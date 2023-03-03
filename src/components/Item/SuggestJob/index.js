import styles from './SuggestJob.module.scss';
import clsx from 'clsx';

function SuggestJob() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.container)}>
                <div>
                    <div className={clsx(styles.avatar)}>
                        <img src={'/images/avatar.svg'}></img>
                    </div>
                    <div className={clsx(styles.info)}>
                        <h3 className={clsx(styles.position)}>Korea Customer Services Advisor</h3>
                        <span className={clsx(styles.company)}>Grownth Fn</span>
                        <span className={clsx(styles.address)}>Hanoi, Hanoi, Vietnam </span>
                        <div className={clsx(styles.target)}>
                            <img src='/images/target.svg'></img>
                            <span>Actively recruiting</span>
                        </div>
                        <div className={clsx(styles.infor_footer)}>
                            <span className={clsx(styles.status)}>Promoted</span>
                            <span className={clsx(styles.applicants)}>16 applicants</span>
    
                            <div className={clsx(styles.rank)}>
                                <img src="https://static.licdn.com/sc/h/2lte9rx50p160huhpjiynt3mn" x="0" y="0" width="16" height="16"></img>
                                <span>Easy Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.icon)}>
                    <img className={clsx(styles.hide_icon)} src='/images/eye-icon.svg'></img>
                    <img src='/images/notice-icon.svg'></img>
                </div>
            </div>
        </div>
     );
}

export default SuggestJob;