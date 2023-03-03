import styles from './NetworkItem.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function NetworkItem( {to,src,children}) {
    return ( 
    <div className={clsx(styles.wrapper)}>
        <Link to={to} className={clsx(styles.item)}>
            <img src={src}/>
            <span>{children}</span>
        </Link>
    </div> 
    );
}

export default NetworkItem;