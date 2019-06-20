const userAuth = (state, action) => {

  if (state === undefined) {
    return {
      userData: null,
      loading: false,
      error: null
    }
  }

  switch (action.type) {
    case 'FETCH_AUTH_REQUEST':
      return {
        userData: null,
        loading: true,
        error: null
      }

    case 'FETCH_AUTH_SUCCESS':
      return {
        userData: action.payload,
        loading: false,
        error: null
      }

    case 'FETCH_AUTH_FAILURE':
      return {
        userData: null,
        loading: false,
        error: action.payload
      }

    default:
      return state.userAuth
  }

}

export default userAuth