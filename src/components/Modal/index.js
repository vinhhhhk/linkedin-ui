import clsx from "clsx";
import { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import styles from "./PostModal.module.scss";
import { AuthContext } from "../../Context/AuthProvider";
import { addPost } from "../../redux/actions";
import Button from "../Item/Button";
import PostModalButton from "./PostModalButton";

function PostModal(props) {
  const [inputValue, setInputValue] = useState("");
  const [shareImage, setShareImage] = useState(null);
  const [shareVideo, setShareVideo] = useState("");
  const [selection, setSelection] = useState("anyone");
  //   const [valueButton, setValueButton] =useState('');

  const data = useContext(AuthContext);
  const dispatch = useDispatch();

  const handleChangeSelect = (e) => {
    setSelection(e.target.value);
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (!image || image === undefined) {
      alert(`there are no image+ ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  const handlePost = () => {
    dispatch(
      addPost({
        id: uuidv4(),
        description: inputValue,
        src: shareImage ? URL.createObjectURL(shareImage) : "",
        section: selection,
      })
    );
    setShareImage("");
    setInputValue("");
    // reset()
    // props.handleClick();
  };

  const reset = (e) => {
    setInputValue("");
    setShareImage("");
    setShareVideo("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
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
                <img src={data.photoURL} alt="" />
                <span>{data.displayName}</span>
              </div>
              <div className={clsx(styles.input_box)}>
                <textarea
                  value={inputValue}
                  autoFocus={true}
                  placeholder="What do you want to talk about ?"
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className={clsx(styles.upload_image)}>
                  {(shareImage && (
                    <img src={URL.createObjectURL(shareImage)} />
                  )) ||
                    (shareVideo && (
                      <ReactPlayer width="100%" url={shareVideo} />
                    ))}
                </div>
              </div>

              <div className={clsx(styles.action)}>
                <div className={clsx(styles.assets)}>
                  <button>
                    <input
                      accept="image/gif , image/jpeg, image/png"
                      name="image"
                      type="file"
                      style={{ display: "none" }}
                      id="file"
                      onChange={handleChange}
                    />
                    <label htmlFor="file"> Click input file</label>
                    <img src="/images/image-icon.svg" />
                  </button>
                  <button>
                    <img src="/images/youtube-icon.svg" />
                  </button>
                  {/* <Button src="/images/image-icon.svg" value="image"/> */}
                  {/* <button>
                                    <img  src='/images/document-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/job-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/occation-icon.svg'/>
                                </button>
                                <button>
                                    <img  src='/images/poll-icon.svg'/>
                                </button> */}
                  <button>
                    <img src="/images/more-icon.svg" />
                  </button>
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
                  disabled={
                    !inputValue && !shareImage && !shareVideo ? true : false
                  }
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <PostModalButton  value={valueButton} /> */}
    </>
  );
}

export default PostModal;
