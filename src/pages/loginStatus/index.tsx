import { BsPlusLg } from 'react-icons/bs'
const LoginStatus = () => {
  const status =[
    {
      status:"Active",
    },
    {
      status:"Qualified",
    },
    {
      status:"Suspended",
    },
    {
      status:"On Hold",
    },
    {
      status:"Terminated",
    },
  ]
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] h-full lg:h-[calc(100vh-60px)] px-10 py-8 pb-7">
      <div className="text-white font-bold text-2xl mb-10">Login Status</div>
      <div className='flex items-center'>
      <div className='text-sm font-medium text-[#DDDDDD] ml-3'>Add Status</div>
        <input type="text" placeholder='New status' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[300px]" />
        <div className='w-[63px] h-[63px] rounded-full border-[3px] hover:border-[#40A040] border-[#51B950] flex items-center justify-center cursor-pointer'>
          <BsPlusLg className='text-[#51B950] text-xl font-bold' />
        </div>
      </div>
      <div className='mt-10 text-[#DDDDDD]'>
        <div className='text-base font-medium '>Requried Status</div>
        <div className='text-sm'>Set the requried user status for app login</div>
        <div className='flex mt-4 justify-start'>
          {status.map((item:any, index:number)=>{
            return <div className='text-center mr-5' key={'login'+index}>
            <div className='text-base mb-2'>{item.status}</div>
            <input type="checkbox" className="w-[20px] h-[20px] bg-transparent border border-[#A53594] hover:!border hover:!border-[#A53594] focus:bg-transparent focus:!border-1 focus:!border-[#A53594] focus:!outline-0 focus:ring-0 focus:ring-offset-0 checked:!bg-[#A53594] checked:!border checked:!border-[#A53594] focus-visible:border-[#A53594] focus-visible:outline-0 !text-blue cursor-pointer" />
          </div>
          })}
        </div>
      </div>
      <div className='mt-5'>
        <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[100px] h-[38px]">Save</button>
      </div>
    </div>
  );
}

export default LoginStatus;