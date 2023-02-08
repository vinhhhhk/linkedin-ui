import clsx from "clsx";
import { useContext ,useEffect,useRef,useState} from "react";

import { AuthContext } from "../../Context/AuthProvider";
import styles from "./Header.module.scss";
import MenuItem from "../../Item/MenuItem";
import Menu from "../Menu";




function Header({props}) {

    const [showMenu,setShowMenu]=useState(false)

    const data= useContext(AuthContext);

    let menuRef= useRef();

    let handleSetShowMenu=() => {
        setShowMenu(!showMenu);
    }
    
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setShowMenu(false);
            }       
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown",handler);
        }
    })

    return (
        <div className={clsx(styles.wrapper)} >
            <div className={clsx(styles.navbar)}>
                <span className={clsx(styles.logo)}>
                    <a href="/">
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
                <nav className={clsx(styles.nav_menu)} >

                            <MenuItem menu href="/home" src='/images/nav-home.svg'> Home</MenuItem>
                      
                            <MenuItem menu to={"/mynetwork"} src="/images/nav-network.svg"> My Network</MenuItem>
                          
                            <MenuItem menu to={"/jobs"} src="/images/nav-jobs.svg"> Jobs</MenuItem>

                            <MenuItem menu to={"/messaging"} src="/images/nav-messaging.svg" >Messaging</MenuItem>

                            <MenuItem menu to={"/notifications"} src="/images/nav-notifications.svg" >Notifications</MenuItem>

                            <div ref={menuRef}>
                                <MenuItem user href="/home" src={data.photoURL || '/images/user.svg'} iconMore={"/images/down-icon.svg"}  onClick={handleSetShowMenu}>Me</MenuItem>
                                {showMenu ? <Menu   data={data}/> : null }
                            </div>

                            <MenuItem menu href="/home" src="/images/nav-work.svg" iconMore={"/images/down-icon.svg"}>Work</MenuItem>
                    
                </nav>
            </div>
        </div> 
    );
}

export default Header;