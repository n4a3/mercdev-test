import userAuth from "./auth";

const reducer = (state, action) => {
  return {
    user: userAuth(state, action)
  };
};

export default reducer;
