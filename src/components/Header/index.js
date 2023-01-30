import clsx from "clsx";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import styles from "./Header.module.scss";
import {auth} from '../../firebase/config'
import { signOut } from "firebase/auth";
import MenuItem from "../../Item/MenuItem";

function Header({props}) {

    const data= useContext(AuthContext);
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
                    <div className={clsx(styles.menu_list)}>
                            <MenuItem menu href="/home" src='/images/nav-home.svg'> Home</MenuItem>
                      
                            <MenuItem menu to={"/mynetwork"} src="/images/nav-network.svg"> My Network</MenuItem>
                          
                            <MenuItem menu to={"/jobs"} src="/images/nav-jobs.svg"> Jobs</MenuItem>

                            <MenuItem menu to={"/messaging"} src="/images/nav-messaging.svg" >Messaging</MenuItem>

                            <MenuItem menu to={"/notifications"} src="/images/nav-notifications.svg" >Notifications</MenuItem>

                           <div>
                                <MenuItem user href="/home" src={data.photoURL || '/images/user.svg'} iconMore={"/images/down-icon.svg"}>Me</MenuItem>
                           </div>

                            <MenuItem menu href="/home" src="/images/nav-work.svg" iconMore={"/images/down-icon.svg"}>Work</MenuItem>
                    </div>
                </nav>
            </div>
        </div> 
    );
}

export default Header;