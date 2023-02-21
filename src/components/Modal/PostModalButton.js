import clsx from "clsx";
import styles from "./PostModal.module.scss";
import { useEffect, useState } from "react";

function PostModalButton({ children, value, onClick, ...passProps }) {
  let head = "";
  let container = "";
  let accept = "";
  let _name = "";

  const [file, setFile] = useState("");
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, [value]);

  //Handle Change Image
  const handleChange = (e) => {
    const image = e.target.files[0];
    if (!image || image === undefined) {
      alert(`there are no image+ ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  //Handle change Video
  const handleChangeVideo = (e) => {
    console.log(e);
    var video = URL.createObjectURL(e.target.files[0]);

    if (!video || video === undefined) {
      alert(`there are no image+ ${typeof video}`);
      return;
    }
    setShareVideo(video);
  };

  // Config
  if (value == "image") {
    head = "Edit your photo";
    container = "Select images to share";
    accept = "image/gif , image/jpeg, image/png";
    _name = "image";

  } else if (value == "video") {
    head = "Select/Edit your video";
    container = "Select video to share";
    accept = "video/mp4,video/x-m4v,video/*";
    _name = "video";

  } else if (value == "event") {
    head = "Create an event";
    container = "Select event to share";
    accept = "image/gif , image/jpeg, image/png";
    _name = "event";
  }

  const reset = () => {
    console.log("heloo");
    setFile("");
    setOpen(false);
  };

  return (
    <>
      {value && open && (
        <div className={clsx(styles.wrapper)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.header)}>
              <h2>{head}</h2>
              <div onClick={reset}>
                <img src="/images/close-icon.svg" alt="" />
              </div>
            </div>
            <div className={clsx(styles.container)}>
              <input
                type="file"
                accept={accept}
                name={_name}
                style={{ display: "none" }}
                id="file"
                onChange={value == "video" ? handleChangeVideo : handleChange}
                // ref={inputRefImage}
              />
              <label htmlFor="file">{container}</label>
            </div>
            <div className={clsx(styles.footer)}>
              <button className={clsx(styles.cancel_btn)} onClick={reset}>
                Cancel
              </button>
              <button className={clsx(styles.done_btn)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostModalButton;
