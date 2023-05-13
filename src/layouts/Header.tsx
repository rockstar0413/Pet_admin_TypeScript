import { BsList, BsChevronDown } from 'react-icons/bs'
import Avatar from '../assets/images/avatar.svg'
import English from '../assets/images/English.svg'
import Logo from '../assets/images/Logo.png'
const Header = () => {
  return (
    <header className="flex justify-between items-center fixed w-full py-6 px-7 z-10 h-[60px] bg-[#232329]">
      <div className='flex items-center'>
        <BsList className="text-[#B1C3C8] hover:text-white cursor-pointer mr-4" />
        <img src={Logo} alt="avatar" className='w-[27px]' />
      </div>
      <div className='flex items-center'>
        <div className='flex items-center cursor-pointer'>
          <img src={Avatar} alt="avatar" />
          <div className='text-[#DDDDDD] mx-2'>Admin Johanson</div>
          <BsChevronDown className="text-[#B1C3C8] hover:text-white cursor-pointer" />
        </div>
        <div className='flex items-center ml-5 cursor-pointer'>
          <img src={English} alt="avatar" />
          <div className='text-[#DDDDDD] mr-2 ml-1'>EN</div>
          <BsChevronDown className="text-[#B1C3C8] hover:text-white cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header
