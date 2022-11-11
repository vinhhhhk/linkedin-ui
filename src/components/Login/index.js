import styles from './Login.module.scss'
import clsx from 'clsx'

import { connect, Connect } from 'react-redux';


function Login() {
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
                    <button>
                        <img src="/images/google.svg" alt="" />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div> 
    );
}

const mapStateToProps=(state) =>{
    return {}
}

const mapDispatchToProps=(dispatch) => {
    return {}
}

export default connect(mapStateToProps,mapDispatchToProps) (Login);