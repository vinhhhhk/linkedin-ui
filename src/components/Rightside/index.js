import clsx from "clsx";
import styles from './Rightside.module.scss'

function Rightside() {
    return (<>
    <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.follow)}>
            <div className={clsx(styles.title)}>
                <h2>Add to your feed</h2>
                <img src="/images/feed-icon.svg" alt="" />
            </div>
            <div className={clsx(styles.feedback)}>
                <li>
                    <a>
                        <div className={clsx(styles.icon)}/>
                    </a>
                    <div>
                        <span>#Linkedin</span>
                        <button>Follow</button>
                    </div>
                </li>
                <li>
                    <a>
                        <div className={clsx(styles.icon)}/>
                    </a>
                    <div>
                        <span>#Video</span>
                        <button>Follow</button>
                    </div>
                </li>
            </div>

            <a className={clsx(styles.recommendation)}>
                View all recommendations
                <img src="/images/right-icon.svg" alt="" />
            </a>
        </div>   
        <div className={clsx(styles.banner)} >

            <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
            />
        </div>
    </div>
    </>  );
}

export default Rightside;