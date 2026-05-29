
import './navbar.style.css'
import {LucideClipboardCopy,LucideLayoutDashboard,ClipboardType,Monitor,LucideSettings,LucideLogOut} from 'lucide-react'
import NavLink from '../NavLink/NavLink'

export default function Navbar() {
  return (
    <nav className='nav'>
        <section className='nav__header'>
            <LucideClipboardCopy size={'1.8rem'}/>
            <p>Clip Sync</p>
        </section>

        <section className='nav__links'>
            <NavLink isSelected title='Dashboard' icon={<LucideLayoutDashboard/>}/>
            <NavLink isSelected={false} title='Clipboard History' icon={<ClipboardType/>} />
            <NavLink isSelected={false} title='Devices' icon={<Monitor/>} />
        </section>

        <section className='nav__actions'>
            <NavLink isSelected={false} icon={<LucideSettings />} title='Setting' />
            <NavLink isSelected={false} icon={<LucideLogOut/>} title='Logout' />
        </section>
    </nav>
  )
}
