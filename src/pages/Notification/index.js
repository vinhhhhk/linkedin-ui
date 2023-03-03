import clsx from 'clsx';
import Rightside from '../../components/layout/Rightside';
import styles from './Notification.module.scss';

function Notification() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.layout)}>
                <div className={clsx(styles.rightside)}>
                    <h3>Manage your Notification</h3>
                    <a>View settings</a>
                </div>
                <div className={clsx(styles.container)}>
                    <div className={clsx(styles.main)}>
    
                    </div>
                </div>
                <Rightside/>
            </div>
        </div>
    );
}

export default Notification;