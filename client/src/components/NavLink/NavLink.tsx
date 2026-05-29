import type { NavLinkProps } from './navlink.type'
import './navlink.style.css'

export default function NavLink({title,icon:Icon,isSelected=false}:NavLinkProps) {
  return (
    <button className={`navlink ${isSelected ? 'select' : ''}`}>
        {Icon}
        {title}    
    </button>
  )
}
