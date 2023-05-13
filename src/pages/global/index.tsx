import Avatar from '../../assets/images/avatar.svg'
import { ICall } from '../../interfaces/interface'
const results: Array<ICall> = [
  {
    username: 'ALDO_RAINE45',
    email:'aldo@gmail.com',
    ipAddress:'111.11.1.1',
    country:'United States',
  },
  {
    username: 'ALDO_RAINE45',
    email:'aldo@gmail.com',
    ipAddress:'111.11.1.1',
    country:'United States',
  },
  {
    username: 'ALDO_RAINE45',
    email:'aldo@gmail.com',
    ipAddress:'111.11.1.1',
    country:'United States',
  },
]
const Global = () => {
  return (
    <div className="mt-[60px] ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full text-[#A8A8A9] text-sm">
      <div className='pt-10 px-5 lg:px-10'>
        <div className='flex items-center'>
          <div className='font-bold text-xl'>Global Limits</div>
        </div>
        <div className='font-bold text-base'>Maximums set for compliance</div>
      </div>
      <div className='pt-10 px-5 lg:px-10'>
        <div className='flex items-center'>
          <div className='mr-5'>API Calls</div>
          <input type="number" min="0" max="100" placeholder='Count' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[32px] mx-2" />
          <div className='mr-5'>Per</div>
          <input type="number" min="0" max="100" placeholder='Hour' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[32px] mx-2" />
        </div>
        <div className='flex items-center mt-4'>
          <div className='mr-[98px]'>Accounts Used Per IP</div>
          <input type="number" min="0" max="100" placeholder='Count' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[32px] mx-2" />

        </div>
      </div>
      <div className='flex justify-between px-10 mt-10'>
        <div className='flex items-center'>
          <div className='text-white'>Accounts Used For API Calls</div>
        </div>
      </div>
      <div className=''>
        <div className='px-10 mt-10 flex'>
          <div className='basis-[3%]'>
            #
          </div>
          <div className='basis-[5%]'>
            
          </div>
          <div className='basis-[10%]'>
            
          </div>
          <div className='basis-[15%]'>
            Username
          </div>
          <div className='basis-[15%]'>
            Email
          </div>
          <div className='basis-[15%]'>
            IP Address
          </div>
          <div className='basis-[15%]'>
            Country
          </div>
        </div>
        <div className='px-10 mt-2'>
          <div className='block bg-[#333339] w-full h-[1px]'></div>
        </div>
      </div>
      {results.map((item: ICall, index: number) => {
        return <div className='' key={'global'+index}>
          <div className='px-10 mt-5 flex items-center'>
          <div className='basis-[3%]'>
            #
          </div>
          <div className='basis-[5%]'>
          <input type="checkbox" className="w-[16px] h-[16px] bg-transparent border border-[#A53594] hover:!border hover:!border-[#A53594] focus:bg-transparent focus:!border-1 focus:!border-[#A53594] focus:!outline-0 focus:ring-0 focus:ring-offset-0 checked:!bg-[#A53594] checked:!border checked:!border-[#A53594] focus-visible:border-white focus-visible:outline-0 !text-blue cursor-pointer" />
          </div>
          <div className='basis-[10%] flex items-center'>
            <img src={Avatar} alt="avatar" />
          </div>
          <div className='basis-[15%]'>
            {item.username}
          </div>
          <div className='basis-[15%]'>
            {item.email}
          </div>
          <div className='basis-[15%]'>
            {item.ipAddress}
          </div>
          <div className='basis-[15%]'>
            {item.country}
          </div>
        </div>
          <div className='px-10 mt-2'>
            <div className='block bg-[#333339] w-full h-[1px]'></div>
          </div>
        </div>
      })}
    </div>
  );
}

export default Global;