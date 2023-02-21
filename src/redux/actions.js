// export default postNews ={
//     type:'post/news',
//     payload: { id:3 , description: 'We can’t wait to host more exciting MICE events this year', src:'', selection :'anyone' },
    
// }

// action creators => function

export const addPost =(data) =>{
    return {
        type: 'post/news',
        payload:data
    }
}

