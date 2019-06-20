const authRequest = () => {
  return {
    type: 'FETCH_AUTH_REQUEST'
  }
}

const authLoaded = () => {
  return {
    type: 'FETCH_AUTH_SUCCESS'
  }
}

const authError = () => {
  return {
    type: 'FETCH_AUTH_FAILURE'
  }
}

const fetchLogin = (email, password) => (mercdevService) => () => (dispatch) =>{
  dispatch(authRequest())
  mercdevService.userLogin(email, password)
    .then((data) => dispatch(authLoaded(data)))
    .catch((err) => dispatch(authError(err)))
}


export { fetchLogin }