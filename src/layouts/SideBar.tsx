import Home from '../assets/images/home.svg'
import Global from '../assets/images/global.svg'
import Tools from '../assets/images/tools.svg'
import Out from '../assets/images/out.svg'
import Invite from '../assets/images/Invite.svg'
import Communication from '../assets/images/Communication.svg'
import Game from '../assets/images/Game.svg'
import Reporting from '../assets/images/Reporting.svg'
import { useNavigate, Link, useLocation } from 'react-router-dom'
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  const gotoSignIn = () => {
    navigate('/')
  }
  return (
    <div className='w-[250px] h-[calc(100vh-60px)] overflow fixed mt-[60px] py-5 text-[#BBBBBB] bg-[#232329] text-sm select-none overflow-y-auto sidebar hidden lg:block'>
      <div className=' px-7'>
        <Link to='/dashboard'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/dashboard' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Home} alt="Home" className='mr-3' />
            Dashboard
          </div>
        </Link>
        <Link to='/user/users'>
          <div className={`mb-3 flex items-center ${location.pathname.split('/')[1] === 'user' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Tools} alt="Tools" className='mr-3' />
            User Management
          </div>
        </Link>
        <Link to='/user/users'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/user/users' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Users
          </div>
        </Link>
        <Link to='/user/administrators'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/user/administrators' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Administrators
          </div>
        </Link>
        <Link to='/user/role'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/user/role' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Roles & Permissions
          </div>
        </Link>
        <Link to='/global/login'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname.split('/')[1]=== 'global' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Global} alt="Global" className='mr-3' />
            Global Settings
          </div>
        </Link>
        <Link to='/global/login'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/global/login' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Login Status
          </div>
        </Link>
        <Link to='/global/limits'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/global/limits' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Qualification & Limits
          </div>
        </Link>
        <Link to='/invite'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/invite' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Invite} alt="Global" className='mr-4' />
            Invite Templates
          </div>
        </Link>
        <Link to='/communications'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname.split('/')[1] === 'communications' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Communication} alt="Global" className='mr-3' />
            Communications
          </div>
        </Link>
        <Link to='/communications/notification'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/communications/notification' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Push Notifications
          </div>
        </Link>
        <Link to='/game/prize'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname.split('/')[1] === 'game' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Game} alt="Global" className='mr-3' />
            Game Settings
          </div>
        </Link>
        <Link to='/game/prize'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/game/prize' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Prizes
          </div>
        </Link>
        <Link to='/game/prize-management'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/game/prize-management' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Prize Management
          </div>
        </Link>
        <Link to='/game/wheel'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/game/wheel' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Prize Wheel Settings
          </div>
        </Link>
        <Link to='/reporting'>
          <div className={`mb-3 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname.split('/')[1] === 'reporting' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            <img src={Reporting} alt="Global" className='mr-3' />
            Reporting
          </div>
        </Link>
        <Link to='/reporting/mobile'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/reporting/mobile' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Mobile App Reports
          </div>
        </Link>
        <Link to='/reporting/invites'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/reporting/invites' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Invites
          </div>
        </Link>
        <Link to='/reporting/winnings'>
          <div className={`mb-3 pl-10 flex items-center cursor-pointer hover:text-[#51B950] ${location.pathname === '/reporting/winnings' ? 'text-[#51B950]' : 'text-[#BBBBBB]'}`}>
            Winnings
          </div>
        </Link>
      </div>
      <div className='mb-3 block w-full h-[1px] bg-[#C0306C] hover:text-[#C0306C]'>
      </div>
      <div className='mb-3 flex items-center cursor-pointer px-7 hover:text-[#51B950]' onClick={() => gotoSignIn()}>
        <img src={Out} alt="Global" className='mr-3' />
        Log Out
      </div>
    </div>
  )
}

export default SideBar
