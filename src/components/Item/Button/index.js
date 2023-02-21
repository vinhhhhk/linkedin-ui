import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';


function Button({children,onClick,src,to,value,...passProps}) {

    const props={    
        onClick,
        ...passProps
    }
    let Comp= 'button';
    if( to) {
        Comp=Link;
    }
    return ( 
        <div className={clsx(styles.wrapper)} {...props}>
            <Comp className={clsx(styles.item)} value={value} to={to}>
                <img src={src} alt=''></img>
                <span>{children}</span>                        
            </Comp>
        </div> 
    );
}

export default Button;