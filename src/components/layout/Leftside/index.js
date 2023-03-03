import clsx from "clsx";
import styles from './Leftside.module.scss'


function Leftside({props}) {
    return (
        <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles.container)}>
            <div className={clsx(styles.info)}>
                <img className={clsx(styles.background)} src='/images/card-bg.svg'  alt=''/>
                <a>
                    <div className={clsx(styles.avatar)}>
                        <img src='/images/avatar.svg' alt='' />
                    </div>
                    <div className={clsx(styles.label)}>Welcome, kennen</div>
                </a>
                <a><div className={clsx(styles.add)}>Add a photo</div></a>
            </div>

            <div className={clsx(styles.connection)}>
                <a>
                    <div>
                        <span>Connections</span>
                         <span>Grow your network</span>
                     </div>
                    <img src="/images/widget-icon.svg" alt="" />
                </a>
            </div>
        </div>
        <div className={clsx(styles.container,styles.left_side)}>
            <div >
                <a className={clsx(styles.item)}>
                    <span>
                        <img src="/images/item-icon.svg" alt="" />My Items
                    </span>
                </a>
                <div className= {clsx(styles.community)}>
                    <a>
                        <span>Groups</span>
                    </a>
                    <a>
                    <span>
                        Events <img src="/images/plus-icon.svg" alt="" />
                    </span>
                    </a>
                    <a>
                        <span>Follow Hashtags</span>
                    </a>
                    <a>
                        <span>Discover more</span>
                    </a>
                </div>
            </div>
        </div>    
        </div>
     );
}

export default Leftside;