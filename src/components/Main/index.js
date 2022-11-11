import clsx from "clsx";
import styles from './Main.module.scss'

function Main() {
    return ( 
    <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.share_box)}>    
            <div>
                <img src="/images/user.svg" alt=''></img>
                <button> Start a post</button>
            </div>

            <div>
                <button>
                    <img src="/images/photo-icon.svg" alt=''></img>
                    <span>Photo</span>
                </button>
    
                <button>
                    <img src="/images/video-icon.svg" alt=''></img>
                    <span>Video</span>
                </button>
                
                <button>
                    <img src='/images/event-icon.svg' alt=''></img>
                    <span>Event</span>
                </button>
    
                <button>
                    <img src='/images/article-icon.svg' alt=''></img>
                    <span>Write article</span>
                </button>
            </div>
        
        </div>
        
        <div className={clsx(styles.post_box)}>
            <div className={clsx(styles.account)}>
                <a>
                    <img src='/images/user.svg'></img>
                    <div>
                        <span>Title</span>
                        <span>Info</span>
                        <span>Date</span>
                    </div>
                </a>
                <button>
                    <img src='/images/ellipsis.svg'></img>
                </button>
            </div> 
            <div className={clsx(styles.description)}>
                description
            </div>

            <div className={clsx(styles.image)}>
                <img src='./images/image.jpeg'></img>
            </div>

            <ul className={clsx(styles.social_count)}>
                <li>
                    <button>
                        <img src='/images/like.svg'></img>
                        <span>Like</span>
                    </button>
                </li>

                <li>
                    <button>
                        <img src='/images/comment.svg'></img>
                        <span>Comment</span>
                    </button>
                </li>
                <li>
                    <button>
                        <img src='/images/send.svg'></img>
                        <span>Report</span>
                    </button>
                </li>
                <li>
                    <button>
                        <img src='/images/send.svg'></img>
                        <span>Send</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
 );
}

export default Main;