
import './input.style.css'
import type { InputProps } from './input.type'

export default function Input({type,placeholder,containerStyle,leftIcon:LeftIcon,...rest}:InputProps) {
  return (
    <div className='input-container' style={containerStyle}>
        {LeftIcon}
        <input className='input' type={type} placeholder={placeholder} {...rest}/>
    </div>
  )
}
