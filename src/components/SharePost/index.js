import styles from "./Share.module.scss";
import clsx from "clsx";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

function SharePost({ id, description, selection, src, ...props }) {
  const data = useContext(AuthContext);

  return (
    <div className={clsx(styles.post_box)}>
      <div className={clsx(styles.account)}>
        <a>
          <img src={data.photoURL} className={clsx(styles.avatar)} />
          <div>
            <span className={clsx(styles.name)}>{data.displayName}</span>
            <span className={clsx(styles.follower)}>55 follower</span>
            <span className={clsx(styles.time)}>22/3/2002</span>
          </div>
        </a>
        <button>
          <img src="/images/ellipsis.svg"></img>
        </button>
      </div>
      <div className={clsx(styles.description)}>{description}</div>

      <div className={clsx(styles.image)}>{src != "" && <img src={src} />}</div>

      <ul className={clsx(styles.social_count)}>
        <li>
          <button>
            <img src="/images/like.svg"></img>
            <span>Like</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/comment.svg"></img>
            <span>Comment</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/send.svg"></img>
            <span>Report</span>
          </button>
        </li>
        <li>
          <button>
            <img src="/images/send.svg"></img>
            <span>Send</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SharePost;
