import clsx from "clsx";
import { Link } from "react-router-dom";

import JobItem from "../../components/Item/JobItem";
import Rightside from "../../components/layout/Rightside";
import styles from './Jobs.module.scss';
import SuggestJob from "../../components/Item/SuggestJob";

function Jobs() {
    return ( 
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.layout)}>
                <div className={clsx(styles.left_side)}>
                    <div className={clsx(styles.container)}>
                        <div className={clsx(styles.list)}>
                            <JobItem src={'/images/tag-icon.svg'}>My jobs</JobItem>
                            <JobItem src={'/images/bell-icon.svg'}>Job alerts</JobItem>
                            <JobItem src={'/images/tick-icon.svg'}>Demonstrate skills</JobItem>
                            <JobItem src={'/images/paper.svg'}>Interview prep</JobItem>
                            <JobItem src={'/images/resume.svg'}>Resume Builder</JobItem>
                            <JobItem src={'/images/youtube-icon.svg'}>Job seeker guidance</JobItem>
                            <JobItem src={'/images/setting-icon.svg'}>Application settings</JobItem>
                        </div>
                    </div>
                    <div className={clsx(styles.post_btn)}>
                        <Link to='post/freejob'>
                            <img src='/images/mecardo.svg'></img>
                            <h3>Post a free job</h3>
                        </Link>
                    </div>
                </div>
                <div className={clsx(styles.container)}>
                    <div className={clsx(styles.header)}>
                        <h3>Still hiring</h3>
                        <span>Jobs you may have missed</span>
                    </div>
                    <div className={clsx(styles.suggest_jobs)}>
                        <SuggestJob></SuggestJob>
                        <SuggestJob></SuggestJob>
                        <SuggestJob></SuggestJob>
                        <SuggestJob></SuggestJob>
                        <SuggestJob></SuggestJob>
                    </div>  
                    <div className={clsx(styles.more_btn)}>
                        <span>Show all</span>
                        <img src='/images/arrow-right.svg'/>
                    </div>
                </div>
                <Rightside hide={true}/>
            </div>
        </div>
    );
}

export default Jobs;