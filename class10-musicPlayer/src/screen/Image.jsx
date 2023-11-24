import React from 'react'
const noImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
const Image = (props) => {
  return (
    
    <img src={props.data ? props.data.url : noImage} alt="Image Not Found" style={{ height: '350px' }} />

  )
}

export default Image
