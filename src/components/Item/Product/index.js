import clsx from "clsx";
import styles from "./Product.module.scss";

function Product({src, name,children }) {
  return (
    <div>
      <a className={clsx(styles.link)}>
        <image src={src} alt="" />
        <span className={clsx(styles.name)}>{children}</span>
      </a>
    </div>
  );
}

export default Product;
