import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { authLogout } from '../../actions'

import './user-info.css'

const UserInfo = (props) => {
  const { name, photoUrl } = props.userData
  return (
    <div className="user-info">
      <img src={photoUrl} alt={name} className="photo"/>
      <h1>{name}</h1>
      <button onClick={props.authLogout}>Logout</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authLogout
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserInfo)