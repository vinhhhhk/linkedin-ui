import clsx from "clsx";
import Product from "../Item/Product";
import styles from "./PostModal.module.scss";

function WorkModal(open) {
  return (
    <>
        {open && <div className={clsx(styles.wrapper)}>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.header)}>
              <h2>Work</h2>
              <div className={clsx(styles.close_btn)}>
                <img src="/images/close-icon.svg" alt="" />
              </div>
            </div>
            <div className={clsx(styles.item)}>
                <div className={clsx(styles.header_item)}>
                    <h2>Visit More LinkedIn Products</h2>
                </div>
                <div>
                    <Product src='/images/learing.svg'>Learnings</Product>
                    <Product src=''>Insights</Product>
                    <Product src=''>Post a job</Product>
                    <Product src=''>Advertise</Product>
                    <Product src=''>Find Leads</Product>
                    <Product src=''>Groups</Product>
                    <Product src=''>Services Maketingplaces</Product>
                </div>
                
            </div>  
          </div>
        </div>}
    </>
  );
}

export default WorkModal;
