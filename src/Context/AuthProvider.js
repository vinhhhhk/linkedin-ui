// import { useNavigate } from "react-router-dom";
// import {auth} from '../firebase/config';
// import React, { useEffect, useState } from "react";
// import {  onAuthStateChanged } from "firebase/auth";


// export const AuthContext = React.createContext();

// function AuthProvider({children}) {
//     const navigate= useNavigate();
//     const [user,setUser]=useState({})

//     useEffect(() =>{
//        const unSubcribe= onAuthStateChanged(auth, (user) => {
//            if(user) {
//                 const {displayName, email, uid, photoURL} = user;
//                 setUser({displayName, email, uid, photoURL});
//                 navigate('/home');
//                 return;
//             }
//             navigate('/')
//         })

//         return () =>{
//             unSubcribe();
//         }
//     },[navigate])

//     return (
//         <AuthContext.Provider value={user}> 
//             <div> {children}</div>
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider;