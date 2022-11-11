import clsx from "clsx";
import styles from "./Home.module.scss";

import Leftside from "../Leftside";
import Main from "../Main";
import Rightside from "../Rightside";

function Home({props}) {
    return (
        <div className={clsx(styles.wrapper)}>
           <div className={clsx(styles.section)}>
            <h5> <a>Hiring in a hurry? - </a> </h5>
            <p>Find talented pros in record time with Upwork and keep busines moving.</p>
           </div>

            <div  className={clsx(styles.layout)}>
                <Leftside />
                <Main />
                <Rightside />
            </div>
        </div> 
    );
}

export default Home;