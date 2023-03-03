import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { loginWithGoogle } from '../../../redux/middleware';


import styles from './Login.module.scss';

function Login() {
    const dispatch=useDispatch();

    const handleLogin= () =>{
        dispatch(loginWithGoogle())
    }
    
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



export default Login;