
// LOGIN
export const LOGIN_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS= 'LOGIN_SUCCESS';
export const LOGIN_REQUEST= 'LOGIN_REQUEST';


export const loginRequest = (data) =>{
   return { type:LOGIN_REQUEST,
    payload: {
        data
    },}
}

export const loginSuccess = (data) =>{
  return {  type:LOGIN_SUCCESS,
    payload: {
        data
    },}
}

export const loginFailure = (data) =>{
  return {  type:LOGIN_FAILURE,
    payload: {
        data  
    },}
}

export const logoutSuccess = () =>({
    type:LOGOUT_SUCCESS,
})

//Login form
// export const login = (email, password) => async (dispatch) => {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       dispatch({
//         type: 'LOGIN_SUCCESS',
//       });
//     } catch (error) {
//       dispatch({
//         type: 'LOGIN_FAILURE',
//         payload: error.message,
//       });
//     }
//   };
  


// ADD POST

export const addPost =(data) =>{
    return {
        type: 'post/news',
        payload:data
    }
}

