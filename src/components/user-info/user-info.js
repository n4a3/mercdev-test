import React from 'react'

import './user-info.css'

const UserInfo = (props) => {
  const { name, photoUrl } = props.userData
  return (
    <div className="user-info">
      <img src={photoUrl} alt={name} className="photo"/>
      <h1>{name}</h1>
      <button>Logout</button>
    </div>
  )
}

export default UserInfo