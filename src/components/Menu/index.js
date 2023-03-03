import clsx from "clsx";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/config";
import styles from "./Menu.module.scss";
import MenuItem from "../Item/MenuItem";

function Menu({ ...props }) {

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>
        <div className={clsx(styles.info)}>
          <img className={clsx(styles.avatar)} src='' alt="" />
          <span className={clsx(styles.name)}>kennen</span>
        </div>
        <Link to="/profile" className={clsx(styles.profile_btn)}>
          View profile
        </Link>
      </div>
      <div className={clsx(styles.list)}>
        <h2 className={clsx(styles.label)}>Account</h2>
        <MenuItem to={"/setting"} className={clsx(styles.item)}>
          Settings & Privacy
        </MenuItem>
        <MenuItem to={"/help"} className={clsx(styles.item)}>
          Help
        </MenuItem>
        <MenuItem to={"/language"} className={clsx(styles.item)}>
          Language
        </MenuItem>
      </div>
      <div className={clsx(styles.list)}>
        <h2 className={clsx(styles.label)}>Manage</h2>
        <MenuItem to={"/settings"} className={clsx(styles.item)}>
          Posts & Activity
        </MenuItem>
        <MenuItem to={"/jobs"} className={clsx(styles.item)}>
          Job Posting Account
        </MenuItem>
      </div>
      <button className={clsx(styles.sign_out)} onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export default Menu;
