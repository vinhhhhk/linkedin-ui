import styles from "./Network.module.scss";
import clsx from "clsx";
import Rightside from "../../components/layout/Rightside";
import NetworkItem from "../../components/Item/NetworkItem";
import Recommend from "../../components/Item/Recommend";

function Network() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.layout)}>
        <div className={clsx(styles.left)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header)}>
                    <span>Manage my network</span>
                </div>
                <div className={clsx(styles.network_mange)}>
                    <NetworkItem to={'/connection'} src='/images/people-icon.svg'>Connections</NetworkItem>
                    <NetworkItem to={'/contact'} src='/images/contact-icon.svg'>Contacts</NetworkItem>
                    <NetworkItem to={'/following'} src='/images/widget-icon.svg'>Following & followers</NetworkItem>
                    <NetworkItem to={'/groups'} src="/images/nav-network.svg">Groups</NetworkItem>
                    <NetworkItem to={'/event'} src='/images/event-icon.svg'>Events</NetworkItem>
                    <NetworkItem to={'/pages'} src='/images/pages-icon.svg'>Pages</NetworkItem>
                    <NetworkItem to={'/newletter'} src='/images/newletter.svg'>Newsletters</NetworkItem>
                    <NetworkItem to={'/hastag'} src='/images/hastag.svg'>Hastags</NetworkItem>
                </div>  
            </div>
            <Rightside hide={true}/>
        </div>
        <div className={clsx(styles.right)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header)}>
                    No pending invitations
                </div>
            </div>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.header)}>
                    Recommended for you
                    <button className={clsx(styles.more_btn)}>See all</button>
                </div>

                <div className={clsx(styles.recommended)}>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                    <Recommend/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Network;