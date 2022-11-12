const initialState = {
  user: {},
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return { ...state, user: action.payload };
    case "AUTH_FAILURE":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
