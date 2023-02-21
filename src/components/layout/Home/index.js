import clsx from "clsx";
import styles from "./Home.module.scss";
import Leftside from "../Leftside";
import Main from "../Main";
import Rightside from "../Rightside";

function Home({props}) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div  className={clsx(styles.layout)}>
                <Leftside />
                <Main />
                <Rightside />
            </div>
        </div> 
    );
}

export default Home;