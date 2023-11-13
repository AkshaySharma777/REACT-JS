import React, { Component } from 'react'

export default class Address extends Component {
  render() {
    const {address, city, state, postalCode, coordinates} = this.props.addr;
    return (
      <div className='lead border radius p-2'>
        <p><b>Address : </b>{address}</p>
        <p><b>City : </b>{city}</p>
        <p><b>State : </b>{state}</p>
        <p><b>PostalCode : </b>{postalCode}</p>
        <p><b>Coordinates : </b>Latitude :{coordinates.lat}<br/>Longitude : {coordinates.lng}</p>
      </div>
    )
  }
}