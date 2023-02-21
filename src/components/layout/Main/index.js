import clsx from "clsx";
import styles from "./Main.module.scss";
import PostModal from "../../Modal";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import SharePost from "../../SharePost";
import Button from "../../Item/Button";
import PostModalButton from "../../Modal/PostModalButton";
import { addPostSelector } from "../../../redux/selector";
import { AuthContext } from "../../../Context/AuthProvider";

function Main() {

  const [showModal, setShowModal] = useState("close");
  const [valueButton, setValueButton] = useState("");

  const data=useContext(AuthContext)
  const addpost = useSelector(addPostSelector);
  console.log(addpost);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  const handleValueButton = (e) => {
    setValueButton(e.target.value);
  };
  
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.share_box)}>
        <div className={clsx(styles.input_box)}>
          <img src={data.photoURL || "/images/user.svg"} alt=""></img>
          <button onClick={handleClick}> Start a post</button>
        </div>

        <div className={clsx(styles.list_button)}>
          <Button
            src="/images/photo-icon.svg"
            onClick={handleValueButton}
            value="image"
          >
            Image
          </Button>
          <Button
            src="/images/video-icon.svg"
            onClick={handleValueButton}
            value="video"
          >
            Video
          </Button>
          <Button
            src="/images/event-icon.svg"
            onClick={handleValueButton}
            value="event"
          >
            Event
          </Button>
          <Button src="/images/article-icon.svg" to="/new">
            Write article
          </Button>
        </div>
      </div>

      {addpost.map((item) => (
        <SharePost
          key={item.id}
          description={item.description}
          src={item.src}
          selection={item.selection}
        />
      ))}

      <PostModal handleClick={handleClick} showModal={showModal} />
      <PostModalButton value={valueButton} />
    </div>
  );
}

export default Main;
