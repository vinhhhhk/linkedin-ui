import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Chatbox.module.scss';

function Chatbox() {
  const [isUp, setIsUp] = useState(false);

  function handleMove() {
    setIsUp(!isUp);
  }

  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.header)}>
        <div>
          <img className={clsx(styles.avatar)} src="/images/user.svg"/> 
          <span className={clsx(styles.label)}>Messaging</span>
        </div>
        <div className={clsx(styles.action)}>
                <button className={clsx(styles.btn)}>
                  <img src="/images/more-icon.svg"/>
                </button>
                <button className={clsx(styles.btn)}>
                  <img src='/images/mecardo.svg'/>
                </button>
                <button className={clsx(styles.btn)} onClick={handleMove}>
                  {isUp ? <img src='/images/downBox-icon.svg'/>
                   : <img src='/images/upBox-icon.svg'/> 
                  }
                </button>
          </div>
      </div>


        { isUp &&  (
         <div className={clsx(styles.container)}>
            <div className={clsx(styles.search_box)}>
              <img className={clsx(styles.icon_search)} src='/images/search-icon.svg'/>
              <input className={clsx(styles.input_search)} placeholder='Search messages'/>
              <img className={clsx(styles.filter_search)} src='/images/filter.svg'/>
            </div>
  
            <div className={clsx(styles.select)}>
              <button>Focused</button>
              <button>Other</button>
            </div>
              <div className={clsx(styles.chat)}>
                  <img src='/images/background.svg'/>
              </div>
              <span className={clsx(styles.label)}>No results found</span>
         </div>
        )
        }

    </div>
    
  );
}

export default Chatbox;
