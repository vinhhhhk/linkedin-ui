import { loginSuccess,loginFailure,logoutSuccess } from "./actions";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// login Google

export const loginWithGoogle= () =>async dispatch => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await firebase.auth().signInWithPopup(provider);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: result.user,
      });
    } 
    catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message,
      })
    }
  };
  

// logout
export const logout =() =>{
    return (dispatch) =>{
        auth.signOut().then(() =>{
            dispatch(logoutSuccess)
        })
    }
}

// const user = useSelector(selectUser);

//   useEffect(() => {
//     // Check if the user is logged in
//     if (!user) {
//       // Redirect the user to the login page
//       window.location.href = '/login';
//     }
//   }, [user]);
