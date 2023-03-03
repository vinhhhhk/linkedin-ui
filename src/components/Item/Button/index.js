import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import {memo} from 'react'

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
       <>
            {children ?( <div className={clsx(styles.wrapper)}>
                <Comp className={clsx(styles.item)} value={value} to={to} onClick={onClick}>
                    <img src={src} alt=''/>
                    <span>{children}</span>                        
                </Comp>
            </div>)
             :
            (<div className={clsx(styles.button)} value={value} to={to} onClick={onClick}>
                <img src={src} alt=''/>
            </div>)
             } 
       </>
    );
}

export default memo(Button);