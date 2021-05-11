import React from 'react'


const CheckBoxInput = ({value, label, ...rest}) => {
  return (
    <label style={{color:'#222D39',fontSize:'1.4rem'}}>
      <input type="checkbox" value={value} {...rest}/>
      {label}
    </label>
  )
}

export default CheckBoxInput
