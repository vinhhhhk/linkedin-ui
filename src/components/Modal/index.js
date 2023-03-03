import clsx from "clsx";
import { useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import styles from "./PostModal.module.scss";
import { AuthContext } from "../../Context/AuthProvider";
import { addPost } from "../../redux/actions";
import Button from "../Item/Button";
import PostModalButton from "./ButtonPostModal";
import useModal from "./useModal";

function PostModal(props) {
  const [inputValue, setInputValue] = useState("");
  const [shareImage, setShareImage] = useState(null);
  const [shareVideo, setShareVideo] = useState("");
  const [selection, setSelection] = useState("anyone");
  const [valueButton, setValueButton] =useState('');
  const [file, setFile] = useState();
  const {isShowing, toggle} = useModal();

  const dispatch = useDispatch();

  const handleOpenModal =(e) =>{
    toggle();
    props.handleClick(e);
  }


  const sendData = (data) => {
    setFile(data)
  }
  
  const handleChangeSelect = (e) => {
    setSelection(e.target.value);
  };
 
  // Dispatch data
  const handlePost = () => {
    dispatch(
      addPost({
        id: uuidv4(),
        description: inputValue,
        src: file,
        section: selection,
      })
    );
    setShareImage("");
    setInputValue("");
  };

  const reset = (e) => {
    setInputValue("");
    setShareImage("");
    setShareVideo("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal && (
        <div className={clsx(styles.wrapper)}>
          <div className={clsx(styles.content)}>
            <header className={clsx(styles.header)}>
              <h2>Create a post</h2>
              <div className={clsx(styles.close_btn)}>
                <img src="/images/close-icon.svg" alt="" onClick={(event) => reset(event)}/>
              </div>
            </header>
            <div className={clsx(styles.share_box)}>
              <div className={clsx(styles.user_info)}>
                <img src='/images/user.svg' alt="" />
                <span>kennen</span>
              </div>
              <div className={clsx(styles.input_box)}>
                <textarea
                  value={inputValue}
                  autoFocus={true}
                  placeholder="What do you want to talk about ?"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className={clsx(styles.upload_image)}>
                  {(file && (
                    <img src={file} />
                  )) ||
                    (shareVideo && (
                      <ReactPlayer width="100%" url={shareVideo} />
                    ))}
                </div>
              </div>

              <div className={clsx(styles.action)}>
                <div className={clsx(styles.assets)}>
                  <Button  onClick={() => setValueButton('image')}  src="/images/image-icon.svg"/>
                  <Button  onClick={() => setValueButton('video')}   src="/images/video-icon.svg"/>
                  {/* <Button  onClick={() => setValueButton('job')}  src="/images/job-icon.svg"/>
                  <Button  onClick={() => setValueButton('image')}   src="/images/occation-icon.svg"/>
                  <Button  onClick={() => setValueButton('image')}   src="/images/poll-icon.svg"/> */}
                  <Button  onClick={() => setValueButton('image')}   src="/images/more-icon.svg"/>  
                </div>
                <div className={clsx(styles.share_state)}>
                  <button>
                    <img src="/images/share_state-icon.svg" alt="" />
                    <select
                      name="selection"
                      id="selection"
                      onChange={handleChangeSelect}
                    >
                      <option value="anyone">Anyyone</option>
                      <option value="anyone+twitter">Anyone + Twitter</option>
                      <option value="friends">Connections Only</option>
                    </select>
                  </button>
                </div>
                <button
                  className={clsx(styles.post)}
                  disabled={ !inputValue && !shareImage && !shareVideo ? true : false }
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
       <PostModalButton 
       value={valueButton} 
       sendData={sendData} 
       isShowing={isShowing}
       hide={toggle}
        />
    </>
  );
}

export default PostModal;
