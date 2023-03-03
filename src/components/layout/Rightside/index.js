import clsx from "clsx";
import styles from "./Rightside.module.scss";

function Rightside(hide) {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        {
        !hide && ( <div className={clsx(styles.follow)}>
          <div className={clsx(styles.title)}>
            <h2>Add to your feed</h2>
            <img src="/images/feed-icon.svg" alt="" />
          </div>
          <div className={clsx(styles.feedback)}>
            <li>
              <a>
                <div className={clsx(styles.icon)} />
              </a>
              <div>
                <span>#Linkedin</span>
                <button>Follow</button>
              </div>
            </li>
            <li>
              <a>
                <div className={clsx(styles.icon)} />
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
        </div>)}

        {/* Banner */}
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.banner)}>
            <img
              src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
              alt=""
            />
          </div>
  
          <div className={clsx(styles.footer)}>
            <ul className={clsx(styles.list)}>
              <li className={clsx(styles.item)}>
                <a>About</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Accessibility</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Help Center</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Privacy & Terms</a>
                  <img src="/images/down_icon.svg"/>
              </li>
              <li className={clsx(styles.item)}>
                <a>Ad choices</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Advertising</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Business Services</a>
                <img src="/images/down_icon.svg"/>
              </li>
              <li className={clsx(styles.item)}>
                <a>Get the LinkedIn app</a>
              </li>
              <li className={clsx(styles.item)}>
                <a>Business More</a>
              </li>
            </ul>
            <div className={clsx(styles.copyright)}>
              <img src='/images/linkedin.svg'></img>
              <span>LinkedIn Corporation © 2023</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rightside;
