import React from 'react'
import StyledButton from './Button/button'
import {styles} from './../object-style/style'

const StyledComponents = () => {
  return (
    <div>
     <div style={styles.Container}>
      <h2 style={styles.Header}>6)STYLED COMPONENT</h2>
     </div>
     <button>STYLED BUTTON</button>
      <StyledButton>STYLED DEFAULT BUTTON-2</StyledButton>
      <StyledButton variant = 'outline'>STYLED PROPERTY BUTTON-2</StyledButton>
    </div>   
  )
}

export default StyledComponents
