import clsx from "clsx";
import styles from "./Product.module.scss";

function Product({src,children }) {
  return (
    <div className={clsx(styles.item)}> 
      <a className={clsx(styles.link)}>
        <img src={src} alt="" />
        <span className={clsx(styles.name)}>{children}</span>
      </a>
    </div>
  );
}

export default Product;
