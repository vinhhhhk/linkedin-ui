import clsx from "clsx";
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

function MenuItem({to, children, file, src, menu, inputFile, user, onClick,iconMore, ...passProps}) {

        let Comp = 'button';
        const props={
            
            onClick,
            ...passProps
        }

        if(to){
            props.to = to;
            Comp= Link
        }
        else if(file) {
            props.file = file;
            Comp= 'input'
        }

        const classes= clsx(styles.wrapper, {
            [styles.menu]:true,
            [styles.inputFile]:true,
        })

        
        return ( 
            <Comp className={classes} {...props}>
               { user 
                    ? 
                    <div className={clsx(styles.user)}>
                        <img className={clsx(styles.avatar)} src={src} />
                        {iconMore ? <span>{children} <img src={iconMore}/></span> : <span>{children}</span>}
                        <button className={clsx(styles.sign_out)}   onClick={() =>signOut(auth)}>Sign out</button>
                    </div> 
                    :
                    <div >
                            <img src={src} className={clsx(styles.icon_menu)}/>
                            {iconMore ? <span>{children} <img src={iconMore}/></span> : <span>{children}</span>}
                    </div>
               }
            </Comp>
        );
}



export default MenuItem;