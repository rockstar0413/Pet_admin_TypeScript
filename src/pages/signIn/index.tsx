import { FaRegUser, FaKey } from 'react-icons/fa'
import { BsEyeFill } from 'react-icons/bs'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackIamge from '../../assets/images/BackImage.png'
import Logo from '../../assets/images/Logo.png'
const SignIn = () => {
  const navigate = useNavigate()
  const [isNameCorrect, setIsNameCorrect] = React.useState<boolean>(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = React.useState<boolean>(false);
  const [passwordType, setPasswordType] = React.useState<string>('password');
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [username, setUserName] = React.useState<string>("");
  const [password, setPassword] =  React.useState<string>("")
  const signHandler = () =>{
    console.log(isNameCorrect)
    if(username!=="superadmin"){
      console.log('right')
      setIsNameCorrect(true);
    }else setIsNameCorrect(false);
    if(password!=="superpass"){
      setIsPasswordCorrect(true);
    }else setIsPasswordCorrect(false)
    if(username!=="superadmin"||password!=="superpass")return;
    navigate('/dashboard')
  }

  const showPassword =()=>{
    setPasswordType('text')
  }
  const hidePassword =()=>{
    setPasswordType('password')
  }
  return (
    <div className="w-full h-screen bg-[#000000] flex justify-center items-center text-white font-[13px] relative" onMouseUp={()=>hidePassword()}>
      <img src={BackIamge} alt="BackIamge" className='w-full h-screen absolute' />
      <div className="bg-[#000A10] w-[90%] lg:w-2/5 px-[20px] lg:px-[50px] pt-4 lg:pt-[60px] pb-3 lg:pb-[40px] z-10 rounded-xl">
        <div className='w-full flex justify-center'>
          <img src={Logo} alt="logo" className="w-[120px]" />
        </div>
        <div className='mb-3'>Username</div>
        <div>
          <div className={`relative ${isNameCorrect?'':'mb-4'}`}>
            <FaRegUser className='absolute top-[10px] left-3 text-xs text-[#999999]' />
            <input type="text" placeholder='Name' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#999999] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-full p-2 pl-[35px] h-[32px]" value={username} onChange={(e)=>setUserName(e.target.value)} />
          </div>
          {isNameCorrect && <div className="text-[#FF4861] text-[11px]">The username you have entered is incorrect. Please try again.</div>}
        </div>
        <div className='mb-3'>Password</div>
        <div>
        <div className={`relative `}>
            <FaKey className='absolute top-[10px] left-3 text-xs text-[#999999]' />
            <BsEyeFill className={`absolute top-[10px] right-3 text-sm  ${passwordType==='text'?'text-[#70BBFD]':'text-[#999999]'} cursor-pointer`} onMouseDown={()=>showPassword()}  />
            <input type={passwordType} placeholder='Password' className="bg-transparent focus:bg-transparent appearance-none border border-gray-300 text-gray-900 !text-[#999999] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-full p-2 pl-[35px] h-[32px]"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className={`flex ${isPasswordCorrect?'justify-between':'justify-end'}`}>
            {isPasswordCorrect && <div className="text-[#FF4861] text-[11px]">Incorrect password entered. Please try again.</div>}
            <div className="text-[#70BBFD] text-[11px] cursor-pointer hover:text-[#7055FF]">Forgot  password?</div>
          </div>
        </div>
        <div className="flex items-center mt-1">
          <input type="checkbox" className="w-[16px] h-[16px] bg-transparent border border-white hover:!border hover:!border-white focus:bg-transparent focus:!border-1 focus:!border-[#70BBFD] focus:!outline-0 focus:ring-0 focus:ring-offset-0 checked:!bg-transparent checked:!border checked:!border-white focus-visible:border-white focus-visible:outline-0 !text-blue cursor-pointer" checked={isChecked} onChange={()=>setIsChecked(!isChecked)} />
          <div className='pl-2'>Remember me</div>
        </div>
        <div className="flex justify-center mt-[40px]">
          <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-1/2 h-[38px]" onClick={()=>signHandler()}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;