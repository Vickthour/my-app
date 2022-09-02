import React from 'react'

function Input(props) {
  return (
    <div>
    <input name={props.name} type={props.type} placeholder={props.placeholder} />
    </div>
  )
}

export default Input