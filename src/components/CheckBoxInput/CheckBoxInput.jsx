import React from 'react'


const CheckBoxInput = ({value, label, ...rest}) => {
  return (
    <label>
      <input type="checkbox" value={value} {...rest}/>
      {label}
    </label>
  )
}

export default CheckBoxInput
