import { BsPlusLg } from 'react-icons/bs'
import { ImBin } from 'react-icons/im'
import GreenAlert from '../../assets/images/GreenAlert.svg'
import RedAlert from '../../assets/images/RedAlert.svg'
import React from 'react'
const Prize = () => {
  const [isAddShow, setIsAddShow] = React.useState<boolean>(false)
  const [isDeleteConfirm, setIsDeleteConfirm] = React.useState<boolean>(false)
  const [isDeleteBack, setIsDeleteBack] = React.useState<boolean>(false)
  const prizes =[
    {
      name:"$1000",
      description:"Cash prize"
    },
    {
      name:"5 Free Spins",
      description:"5 Free Spins"
    },
    {
      name:"Trip",
      description:"Mexico trip"
    },
  ]
  return (
    <div>
      {isAddShow && <div className='h-[calc(100vh+50px)] fixed w-full bg-[#00000090] z-10 -top-[50px] flex justify-center items-center'>
        <div className='px-10 py-7 w-full lg:w-[616px] px-4lg:px-0 text-[#DDDDDD] !bg-[#232329] z-40'>
          <div className='text-2xl text-white font-bold mb-10'>Add/Edit prize</div>
          <div className='flex items-center mb-5'>
            <div className='text-xm whitespace-nowrap mr-3 w-[100px]'>Prize name</div>
            <input type="text" placeholder='Enter prize name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
          <div className='flex items-center mb-5'>
            <div className='text-xm whitespace-nowrap mr-3 w-[100px]'>Prize ID</div>
            <input type="text" placeholder='Enter prize ID' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
          <div className='flex items-center mb-5'>
            <div className='text-xm whitespace-nowrap mr-3 w-[100px]'>Display name</div>
            <input type="text" placeholder='Enter display name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
          <div className='flex items-start mb-5'>
            <div className='text-xm whitespace-nowrap mr-3 w-[100px]'>Description</div>
            <textarea  placeholder='Enter description' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[100px] w-full" />
          </div>
          <div className='flex justify-center'>
            <button className="bg-transparent hover:bg-[#00000070] rounded-md text-white font-sm w-[120px] h-[38px] mr-5" onClick={()=>setIsAddShow(false)} >Cancel</button>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[120px] h-[38px]"  onClick={()=>setIsAddShow(false)} >Confirm</button>
          </div>
        </div>
      </div>}
      {isDeleteConfirm && <div className='h-[calc(100vh+50px)] fixed w-full bg-[#00000090] z-10 -top-[50px] flex justify-center items-center'>
        <div className='px-5 py-7 w-full lg:w-[550px] px-4lg:px-0 text-[#DDDDDD] !bg-[#232329] z-40'>
          <div className='w-full flex justify-center'>
            <img src={GreenAlert} alt="GreenAlert" />
          </div>
          <div className='w-full flex justify-center mt-2'>
            <div className='text-2xl text-center'>Confirm you wish to delete <br/> this prize</div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className="bg-transparent hover:bg-[#00000070] rounded-md text-white font-sm w-[120px] h-[38px] mr-5" onClick={()=>{setIsDeleteBack(false); setIsDeleteConfirm(false)}} >Cancel</button>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[120px] h-[38px]"  onClick={()=>{setIsDeleteBack(false); setIsDeleteConfirm(false)}} >Confirm</button>
          </div>
        </div>
      </div>}
      {isDeleteBack && <div className='h-[calc(100vh+50px)] fixed w-full bg-[#00000090] z-10 -top-[50px] flex justify-center items-center'>
        <div className='px-5 py-7 w-full lg:w-[550px] px-4lg:px-0 text-[#DDDDDD] !bg-[#232329] z-40'>
          <div className='w-full flex justify-center'>
            <img src={RedAlert} alt="RedAlert" />
          </div>
          <div className='w-full flex justify-center mt-2'>
            <div className='text-2xl text-center'>This is an active prize and <br/> can not be deleted. </div>
          </div>
          <div className='w-full flex justify-center mt-5 mb-6 border border-[#999999] px-3 py-2'>
            <div className='text-xs text-[#999999] text-center'>The prize must first be removed from the prize wheel before it can be deleted.</div>
          </div>
          <div className='flex justify-center'>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[120px] h-[38px]"  onClick={()=>{setIsDeleteBack(false); setIsDeleteConfirm(false)}} >Go back</button>
          </div>
        </div>
      </div>}
      <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-10 py-8 pb-7 relative">
      <div className="text-white font-bold text-2xl mb-10">Prize</div>
      <div className='flex items-center'>
        <div className='w-[63px] h-[63px] rounded-full border-[3px] hover:border-[#40A040] border-[#51B950] flex items-center justify-center cursor-pointer'>
          <BsPlusLg className='text-[#51B950] text-xl font-bold' onClick={()=>setIsAddShow(true)} />
        </div>
        <div className='uppercase text-sm font-bold text-[#DDDDDD] ml-3'>add new prize</div>
      </div>
      <div className='mt-14'>
        <div className='uppercase text-sm font-bold text-[#DDDDDD]'>Prizes</div>
        <div className='text-[#DDDDDD] text-xs mt-3 flex'>
          <div className='basis-[10%] px-2'>#</div>
          <div className='basis-[15%] px-2'>Name</div>
          <div className='basis-[20%] px-2'>Desription</div>
          <div className='basis-[20%] px-2'></div>
        </div>
        <div className='mt-2'>
          <div className='block bg-[#333339] w-full h-[1px]'></div>
        </div>
        {prizes.map((item:any, index:number)=>{
          return <div key={'prize'+index}>
            <div className='text-[#DDDDDD] text-xs mt-3 flex items-center'>
              <div className='basis-[10%] px-2'>{index + 1}</div>
              <div className='basis-[15%] px-2'>{item.name}</div>
              <div className='basis-[20%] px-2'>{item.description}</div>
              <div className='basis-[20%] px-2'>
              <div className='flex items-center'>
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-1/2 h-[30px] mr-5" onClick={()=>setIsAddShow(true)} >Edit</button>
              <ImBin className='text-[#DDDDDD] hover:text-red-500 text-lg font-normal cursor-pointer' onClick={()=>{
                if(index%2===0)setIsDeleteConfirm(true) 
                else setIsDeleteBack(true)}} />
              </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='block bg-[#333339] w-full h-[1px]'></div>
            </div>
          </div>
        })}
      </div>
    </div>
          
    </div>
    
  );
}

export default Prize;