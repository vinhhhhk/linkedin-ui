import { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import PostModal from "../../Modal";
import styles from "./Main.module.scss";
import SharePost from "../../SharePost";
import Button from "../../Item/Button";
import ButtonPostModal from "../../Modal/ButtonPostModal";
import { addPostSelector } from "../../../redux/selector";
import useModal from "../../Modal/useModal";

function Main() {
  const [showModal, setShowModal] = useState(false);
  const [valueButton, setValueButton] = useState("");
  const {isShowing, toggle} = useModal();
  const [file, setFile] = useState();

  const addpost = useSelector(addPostSelector);

  console.log(addpost)

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    setShowModal(!showModal)
  }

  const sendDataToModal = (data) => {
    setFile(data)
  }

  const handleShowButton = (e) => {
    setValueButton('image');
    toggle();
  }
  
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.share_box)}>
        <div className={clsx(styles.input_box)}>
          <img src={ "/images/user.svg"} alt=""></img>
          <button onClick={handleClick}> Start a post</button>
        </div>

        <div className={clsx(styles.list_button)}>
            <Button
              src="/images/photo-icon.svg" 
              onClick={() =>setValueButton('image') } 
            >
            Image
          </Button>
          <Button
            src="/images/video-icon.svg"
            onClick={() =>setValueButton('video') }
          >
            Video
          </Button>
          <Button
            src="/images/event-icon.svg"
            onClick={() =>setValueButton('event') }
          >
            Event
          </Button>
          <Button src="/images/article-icon.svg" to="/new">
            Write article
          </Button>
        </div>
      </div>

      {/* {addpost.map((item) => (
        <SharePost
          key={item.id}
          description={item.description}
          src={item.src}
          selection={item.selection}
        />
      ))} */}

      <PostModal handleClick={handleClick} showModal={showModal} />
      <ButtonPostModal 
        handleToggle={handleClick}
        isShowing={isShowing}
        hide={toggle}
        value={valueButton}
      />
    </div>
  );
}

export default Main;
