const authRequest = () => {
  return {
    type: 'FETCH_AUTH_REQUEST'
  }
}

const authLoaded = (userData) => {
  return {
    type: 'FETCH_AUTH_SUCCESS',
    payload: userData
  }
}

const authError = (err) => {
  return {
    type: 'FETCH_AUTH_FAILURE',
    payload: err
  }
}

const authLogout = () => {
  return {
    type: 'LOGOUT'
  }
}

const fetchLogin = (mercdevService) => (email, password) => (dispatch) => {
  dispatch(authRequest())
  mercdevService.userLogin(email, password)
    .then((data) => {
      if (!data.ok) {
        if (data.status === 400) {
          dispatch(authError('E-Mail or password is incorrect'))
        } else {
          dispatch(authError(`Error #${data.status}`))
        }
      }

      if (data.status === 200) {
        return data.json()
      }
    })
    .then((data) => {
      if (data !== undefined) {
        dispatch(authLoaded(data))
      }
    })
    .catch((err) => {
      dispatch(authError(err))
    })
}


export {
  fetchLogin,
  authLogout
}