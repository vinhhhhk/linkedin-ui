import styles from'./Recommend.module.scss'
import clsx from 'clsx';

function Recommend() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.header)}>
                    <img src='./images/image.jpeg' className={clsx(styles.background)}/>
                    <div className={clsx(styles.close_btn)}>
                        <img src="/images/close-icon.svg" alt=""/>
                    </div>
                </div>
                <div className={clsx(styles.info)}>
                    <img className={clsx(styles.avatar)} src='./images/avatar.svg'></img>
                    <h3 className={clsx(styles.name)}>kennen</h3>
                    <span className={clsx(styles.introduce)}>Recruitment Consultant at HEADHUNT Vietnam</span>
                </div>
                <span className={clsx(styles.followers)}>40,875 followers</span>
                <button className={clsx(styles.follow_btn)}>Follow</button>
            </div>
        </div>
     );
}

export default Recommend;