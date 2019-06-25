const userAuth = (state, action) => {
  if (state === undefined) {
    return {
      userData: null,
      error: null
    };
  }

  switch (action.type) {
    case "FETCH_AUTH_REQUEST":
      return {
        userData: null,
        error: null
      };

    case "FETCH_AUTH_SUCCESS":
      return {
        userData: action.payload,
        error: null
      };

    case "FETCH_AUTH_FAILURE":
      return {
        userData: null,
        error: action.payload
      };

    case "LOGOUT":
      return {
        userData: null,
        error: null
      };

    default:
      return state.userAuth;
  }
};

export default userAuth;
