import clsx from "clsx";
import styles from "./PostModal.module.scss";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {memo} from 'react'
function PostModalButton({
  value,
  onClick,
  sendData,
  isShowing, hide ,
  handleToggle
}) {
  let head = "";
  let container = "";
  let accept = "";
  let _name = "";

  const [file, setFile] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [shareVideo, setShareVideo] = useState("");

  // Remove preview ULR
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(shareImage);
    };
  }, [shareImage]);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(shareVideo);
    };
  }, [shareVideo]);

  //Handle Change Image
  const handleChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    if (!image || image === undefined) {
      alert(`there are no image+ ${typeof image}`);
      return;
    }
    setShareImage(image);
  };

  //Handle change Video
  const handleChangeVideo = (e) => {
    const video = URL.createObjectURL(e.target.files[0]);
    if (!video || video === undefined) {
      alert(`there are no image+ ${typeof video}`);
      return;
    }
    setShareVideo(video);
  };

  const handleSend = (e) => {
    sendData(shareImage);
    hide();
    handleToggle;
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

  const resetAll = (e) => {
    setFile("");
    setShareImage('')
    setShareVideo('')
    hide();
  };

  return (
    <>
      { isShowing &&(
        <div className={clsx(styles.wrapper)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.header)}>
              <h2>{head}</h2>
              <div onClick={resetAll} className={clsx(styles.close_btn)}>
                <img src="/images/close-icon.svg" alt="" />
              </div>
            </div>
            {/* Show Image or Video */}
            {shareImage || shareVideo ? (
              <div className={clsx(styles.upload_image)}>
                {(shareImage && <img src={shareImage} />) ||
                  (shareVideo && <ReactPlayer width="100%" url={shareVideo} />)}
              </div>
            ) : (
              <div className={clsx(styles.container)}>
                <input
                  type="file"
                  accept={accept}
                  name={_name}
                  style={{ display: "none" }}
                  id="file"
                  onChange={value == "video" ? handleChangeVideo : handleChange}
                />
                <label htmlFor="file">{container}</label>
              </div>
            )}
            <div className={clsx(styles.footer)}>
              <button className={clsx(styles.cancel_btn)} onClick={resetAll}>
                Cancel
              </button>
              <button className={clsx(styles.done_btn)} onClick={handleSend}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(PostModalButton);
