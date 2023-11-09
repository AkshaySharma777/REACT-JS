import React from 'react'

const Address = (users) => {
  return (
    <div>
      <h2>City : {users.addr.city}</h2>
      <h2>Pin : {users.addr.pin}</h2>
    </div>
  )
}

export default Address;
