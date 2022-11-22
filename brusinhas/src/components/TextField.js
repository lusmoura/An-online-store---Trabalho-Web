import React from 'react'

export default function TextField({label, type, placeholder, value, onChange}) {
  return (
    <div className='text-field-container'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}
