import styles from "./Messaging.module.scss";
import clsx from "clsx";
import Rightside from "../../components/layout/Rightside";
import Button from "../../components/Item/Button";

function Messaging() {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.layout)}>
        <div className={clsx(styles.container)}>
          <div className={clsx(styles.left)}>
            <div className={clsx(styles.header)}>
              <h3>Messaging</h3>
              <div className={clsx(styles.action)}>
                <button className={clsx(styles.btn)}>
                  <img src="/images/more-icon.svg" />
                </button>
                <button className={clsx(styles.btn)}>
                  <img src="/images/mecardo.svg" />
                </button>
              </div>
            </div>
            <div className={clsx(styles.body)}>
              <div className={clsx(styles.search_box)}>
                <img
                  className={clsx(styles.icon_search)}
                  src="/images/search-icon.svg"
                />
                <input
                  className={clsx(styles.input_search)}
                  placeholder="Search messages"
                />
                <img
                  className={clsx(styles.filter_search)}
                  src="/images/filter.svg"
                />
              </div>

              <div className={clsx(styles.select)}>
                <button>Focused</button>
                <button>Other</button>
              </div>
              <span className={clsx(styles.label)}>No messages</span>
            </div>
          </div>
{/* Right side */}
          <div className={clsx(styles.right)}>
            <div className={clsx(styles.wrap)}>
              <div className={clsx(styles.header)}>
                <h3>New message</h3>
              </div>
              <div className={clsx(styles.input_box)}>
                <input placeholder='Type a name and a multiple names'/>
              </div>
              <div className={clsx(styles.result_box)}>
  
              </div>
              <div className={clsx(styles.write_message)}>
                <textarea placeholder='Write a message'/>
              </div>
              <div className={clsx(styles.add_file)}>
                <div>
                  <Button  src="/images/image-icon.svg"/>
                  <Button  src="/images/file-icon.svg"/>
                  <Button  src="/images/gif.svg"/>
                  <Button  src="/images/icon.svg"/>
                </div>
                <div>
                  <button>Send</button>
                  <Button src="/images/more-icon.svg"/>
                </div>
              </div>
            </div>
            </div>
        </div>
        <Rightside />
      </div>
    </div>
  );
}

export default Messaging;
