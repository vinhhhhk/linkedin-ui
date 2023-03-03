import clsx from "clsx";
import { useEffect, useState,useRef } from "react";
import Product from "../Item/Product";
import styles from "./PostModal.module.scss";


function WorkModal( {onOpen} ) {

  
  const menuRef =useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        onOpen();
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      {(
        <div className={clsx(styles.wrapper) }>
          <div className={clsx(styles.content, styles.work_modal)} ref={menuRef} >
            <div className={clsx(styles.header)}>
              <h2 className={clsx(styles.label)}>Work</h2>
              <div className={clsx(styles.close_btn)}>
                <img
                  src="/images/close-icon.svg"
                  alt=""
                  onClick={() => onOpen()}
                />
              </div>
            </div>
            <div className={clsx(styles.main)}>
              <div className={clsx(styles.item)}>
                <div className={clsx(styles.header_item)}>
                  <h2>Visit More LinkedIn Products</h2>
                </div>
                <ul className={clsx(styles.list)}>
                  <li>
                    <Product src="/images/learning.svg">Learnings</Product>
                  </li>
                  <li>
                    <Product src="/images/insights.svg">Insights</Product>
                  </li>
                  <li>
                    <Product src="/images/post.svg">Post a job</Product>
                  </li>
                  <li>
                    <Product src="/images/advertise.svg">Advertise</Product>
                  </li>
                  <li>
                    <Product src="/images/find.svg">Find Leads</Product>
                  </li>
                  <li>
                    <Product src="/images/groups.svg">Groups</Product>
                  </li>
                  <li>
                    <Product src="/images/services.svg">
                      Services Maketplace
                    </Product>
                  </li>
                </ul>
              </div>
              <div className={clsx(styles.item)}>
                <div className={clsx(styles.header_item)}>
                  <h2>LinkedIn Business Services</h2>
                </div>
                <ul className={clsx(styles.services)}>
                  <li>
                    <p className={clsx(styles.service_name)}>
                      Talent Solutions
                    </p>
                    <span className={clsx(styles.service_label)}>
                      Find, actract and recruit talent
                    </span>
                  </li>
                  <li>
                    <p className={clsx(styles.service_name)}>Sales Solutions</p>
                    <span className={clsx(styles.service_label)}>
                      Unlock sales opportunities
                    </span>
                  </li>
                  <li>
                    <p className={clsx(styles.service_name)}>
                      Post a job for free
                    </p>
                    <span className={clsx(styles.service_label)}>
                      Get a job in front of quanlity candidates
                    </span>
                  </li>
                  <li>
                    <p className={clsx(styles.service_name)}>
                      Marketing Solutions
                    </p>
                    <span className={clsx(styles.service_label)}>
                      Acquire customers and grow your business
                    </span>
                  </li>
                  <li>
                    <p className={clsx(styles.service_name)}>
                      Learning Solutions
                    </p>
                    <span className={clsx(styles.service_label)}>
                      Develop talent across your organization
                    </span>
                  </li>
                </ul>
                <div className={clsx(styles.create_page)}>
                  Create a Company page
                  <img src="/images/plus.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkModal;
