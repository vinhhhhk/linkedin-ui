import clsx from 'clsx';
import {  signInWithPopup,} from "firebase/auth";

import styles from './Login.module.scss';
import {auth, provider} from '../../../firebase/config';

function Login({props}) {
    
    const handleLogin= async() =>{
       const data= await signInWithPopup(auth, provider);
       console.log(data);
    };
    

    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.navbar)}>
                <a href='/' className={clsx(styles.logo)}>
                    <img src='/images/login-logo.svg' alt=''></img>
                </a>
                <div>
                    <a className={clsx(styles.join)}>Join now</a>
                    <a className={clsx(styles.login)}>Sign in</a>
                </div>
            </div>
            <div className={clsx(styles.body)}>
                <div className={clsx(styles.section)}>
                    <h1>Wellcome to your professtional community</h1>
                    <img src='/images/login-hero.svg' alt='' />
                </div>
                <div className={clsx(styles.gg_form)}>
                    <button onClick={handleLogin}>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div> 
    );
}



export default (Login);