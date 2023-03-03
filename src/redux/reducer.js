import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS,LOGIN_REQUEST,} from "./actions";

const initialState = {
  login: 
    {
      loading: true,
      user: null,
      error: null,
    }
  ,

  addPost:[
    {
      id: 1,
      description: "We can’t wait to host more exciting MICE events this year",
      src: "https://www.invert.vn/media/uploads/uploads/2022/12/06181201-13.jpeg",
      selection: "anyone",
    },
    {
      id: 2,
      description: "We can’t wait to host more exciting MICE events this year",
      src: "https://www.invert.vn/media/uploads/uploads/2022/12/06181201-13.jpeg",
      selection: "anyone",
    },
    {
      id: 3,
      description: "We can’t wait to host more exciting MICE events this year",
      src: "https://www.invert.vn/media/uploads/uploads/2022/12/06181201-13.jpeg",
      selection: "anyone",
    },
  ],
};

// Log in

export const authReducer = (state = initialState.login, action) => {
  console.log({ state, action });

  switch (action.type) {
    case LOGIN_REQUEST:
      return { 
         ...state,
         
    };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login:[
          {
          ...state,
          user: action.payload,}
        ]
      };

    case LOGIN_FAILURE:
      return {
        error: action.payload,
        user: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        };
      
    default:
      return state;
  }
};

// Add post
 const rootReducer = (state = initialState.addPost, action) => {
  // console.log({ state, action });
  switch (action.type) {
    case "post/news":
      return {
        ...state,
        addPost: [action.payload,...state.addPost ],
      };

    default:
      return state;
  }
};
export default rootReducer;


