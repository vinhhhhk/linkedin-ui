import clsx from "clsx";
import styles from "./Header.module.scss";

function Header({props}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.navbar)}>
                <span className={clsx(styles.logo)}>
                    <a href="/home">
                        <img src='/images/home-logo.svg' alt=''></img>
                    </a>
                </span>
                <div className={clsx(styles.search)}>
                    <div >
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className={clsx(styles.search_icon)}>
                        <img src="/images/search-icon.svg" alt="" />
                    </div>
                </div>
                <nav className={clsx(styles.nav_menu)}>
                    <ul className={clsx(styles.menu_list)}>
                        <li className={clsx(styles.menu_item,styles.active)}>
                            <a>
                                <img src='/images/nav-home.svg'></img>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className={clsx(styles.menu_item)}>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My Network</span>
                            </a>
                        </li>
                        <li className={clsx(styles.menu_item)}>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </li>
                        <li className={clsx(styles.menu_item)}>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messaging</span>
                            </a>
                        </li>
                        <li className={clsx(styles.menu_item)}>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li className={clsx(styles.user, styles.menu_item)}>
                            <a>
                                <img src="/images/user.svg" alt="" />
                                <span>Me
                                <img  src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                            <div className={clsx(styles.sign_out)}>Sign out</div>
                        </li>


                        <li className={clsx(styles.menu_item)}>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>Work<img  src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div> 
    );
}

export default Header;