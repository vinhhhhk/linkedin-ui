import clsx from "clsx";
import { useContext, useEffect, useRef, useState } from "react";

import { AuthContext } from "../../../Context/AuthProvider";
import styles from "./Header.module.scss";
import MenuItem from "../../Item/MenuItem";
import Menu from "../../Menu";
import WorkModal from "../../Modal/WorkModal";

function Header({ props }) {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(true);

  const data = useContext(AuthContext);

  let menuRef = useRef();

  const handleSetShowMenu = () => {
    setShowMenu(!showMenu);
  };

const handleOpen =() =>{
  console.log(open)
  setOpen(false)
}

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.navbar)}>
        <span className={clsx(styles.logo)}>
          <a href="/">
            <img src="/images/home-logo.svg" alt=""></img>
          </a>
        </span>
        <div className={clsx(styles.search)}>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div className={clsx(styles.search_icon)}>
            <img src="/images/search-icon.svg" alt="" />
          </div>
        </div>
        <nav className={clsx(styles.nav_menu)}>
          <MenuItem menu href="/home" src="/images/nav-home.svg">
            {" "}
            Home
          </MenuItem>
          <MenuItem menu to={"/mynetwork"} src="/images/nav-network.svg">
            {" "}
            My Network
          </MenuItem>
          <MenuItem menu to={"/jobs"} src="/images/nav-jobs.svg">
            {" "}
            Jobs
          </MenuItem>
          <MenuItem menu to={"/messagings"} src="/images/nav-messaging.svg">
            Messaging
          </MenuItem>
          <MenuItem
            menu
            to={"/notifications"}
            src="/images/nav-notifications.svg"
          >
            Notifications
          </MenuItem>
          <div ref={menuRef} className={clsx(styles.user)}>
            <MenuItem
              user
              href="/home"
              src={data.photoURL || "/images/user.svg"}
              iconMore={"/images/down-icon.svg"}
              onClick={handleSetShowMenu}
            >
              Me
            </MenuItem>
            {showMenu ? <Menu /> : null}
          </div>
          <MenuItem
            menu
            href="/home"
            src="/images/nav-work.svg"
            iconMore={"/images/down-icon.svg"}
            onClick={handleOpen}
          >
            Work
          </MenuItem>
          <p className={clsx(styles.policy)}>Try Premium for free</p>
        </nav>
      </div>
      <WorkModal open={open}/>
    </div>
  );
}

export default Header;
