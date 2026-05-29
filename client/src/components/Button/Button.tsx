import './button.style.css'
import './button.type'
import type { ButtonProps } from './button.type'

export default function Button({title,leftIcon:LeftIcon,rightIcon:RightIcon,
  btnType="Primary"
  ,...rest}:ButtonProps) {



    return (
    <button className={`btn ${btnType === 'Primary' ? 'primary' : 'secondary'}`} {...rest}>
        {LeftIcon}
        {title}
        {RightIcon}
    </button>
  )
}
