const initialState = {
  login: {
    loading: false,
    currentUser: null,
    error: null,
  },
  addPost: [
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

const rootReducer = (state = initialState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "post/news":
      return {
        ...state,
        addPost: [...state.addPost, action.payload]
      };

    default:
      return state;
  }
};

export default rootReducer;
