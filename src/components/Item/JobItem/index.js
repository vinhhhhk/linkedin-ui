import clsx from "clsx";
import styles from './JobItem.module.scss';

function JobItem({src, children}) {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <a className={clsx(styles.item)}>
                <img src={src}/>
                <h3>{children}</h3>
            </a>
        </div>
    );
}

export default JobItem;