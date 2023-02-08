import {auth} from '../../firebase/config'
import styles from "./Menu.module.scss"

import clsx from 'clsx';
import { signOut } from "firebase/auth";
import {forwardRef} from 'react'


function Menu({...props},data, ref) {
    return (<div  className={clsx(styles.wrapper)}>
            {console.log(data)}
            <button className={clsx(styles.sign_out)}   onClick={() =>signOut(auth)}>Sign out</button>
    </div>  );
}

export default (Menu);