import clsx from "clsx";
import styles from "./Home.module.scss";
import Leftside from "../Leftside";
import Main from "../Main";
import Rightside from "../Rightside";
import Chatbox from '../../Item/Chatbox';

import React, { useEffect } from 'react';
import { connect ,useSelector} from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { selectUser } from "../../../redux/selector";


function Home() {
//     console.log('heelooo')
//     const userInfo = useSelector(selectUser);
//     console.log(userInfo)
//     const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//      navigate('/');
//     }
//     else navigate('/home')
//   }, [user]);

    return (
        <div className={clsx(styles.wrapper)}>
            <div  className={clsx(styles.layout)}>
                <Leftside />
                <Main />
                <Rightside />
                <Chatbox/>
            </div>
        </div> 
    );
}
// const mapStateToProps = (state) => ({
//     user: state.login.user,
//   });
//connect(mapStateToProps)
  
export default (Home);
