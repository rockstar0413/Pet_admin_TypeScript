import { BsPlusLg } from 'react-icons/bs'
const Limits = () => {
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] h-full px-10 py-8 pb-7">
      <div className="text-white font-bold text-2xl mb-5">Qualification & Limits</div>
      <div className='mt-5 text-[#DDDDDD]'>
        <div className='text-base font-medium '>Spin Limits</div>
        <div className='text-sm'>Set limits for user spins</div>
      </div>
      <div className='mt-3 text-[#DDDDDD] flex items-center'>
        <div className='text-sm leading-0'>Max. # of spins<br /> earned</div>
        <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
        <div className='text-base leading-0'>Per</div>
        <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
      </div>
      <div className='mt-3 text-[#DDDDDD] flex items-center'>
        <div className='text-sm leading-0'>Max. # of spins<br /> earned</div>
        <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
        <div className='text-base leading-0'>Per</div>
        <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
      </div>
      <div className='mt-5 text-[#DDDDDD]'>
        <div className='text-base font-medium '>Spin Qualifications</div>
        <div className='text-sm'>Set qualifications for user spins</div>
      </div>
      <div className='flex items-center mt-5'>
        <div className='w-[63px] h-[63px] rounded-full border-[3px] hover:border-[#40A040] border-[#51B950] flex items-center justify-center cursor-pointer'>
          <BsPlusLg className='text-[#51B950] text-xl font-bold' />
        </div>
        <div className='uppercase text-sm font-bold text-[#DDDDDD] ml-3'>add new rule</div>
      </div>
      <div className='mt-5 text-[#DDDDDD]'>
        <div className='flex'>
          <div className='whitespace-nowrap w-[100px]'>Awarded spins</div>
          <div className='text-center flex items-center justify-center mx-10 mr-14 text-transparent'>=</div>
          <div className='basis-[10%] whitespace-nowrap'>Rules</div>
        </div>
        <div className='lg:flex items center mt-4'>
          <div className='flex'>
            <div className='w-[100px]'>
              <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[80px]" />
            </div>
            <div className='text-center flex items-center justify-center mx-10 mr-14'>
              =
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Rules' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px]" />
            </div>
            <div className='flex items-center justify-center mx-3'>
              invite(s)
            </div>
          </div>
          <div className='flex mt-3 lg:mt-0'>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Sent' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[150px]" />
            </div>
            <div className='flex items-center justify-center mx-3'>
              For
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px] mr-3" />
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Consecutive days' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[180px]" />
            </div>
          </div>
        </div>
        <div className='lg:flex items center mt-4'>
          <div className='flex'>
            <div className='w-[100px]'>
              <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[80px]" />
            </div>
            <div className='text-center flex items-center justify-center mx-10 mr-14'>
              =
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Rules' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px]" />
            </div>
            <div className='flex items-center justify-center mx-3'>
              invite(s)
            </div>
          </div>
          <div className='flex mt-3 lg:mt-0'>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Completed' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[150px] p-2 pl-[10px] h-[38px] w-[100px]" />
            </div>
            <div className='flex items-center justify-center mx-3'>
              For
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px] mr-3" />
            </div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='--' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[180px]" />
            </div>
          </div>
        </div>
        <div className='lg:flex items center mt-4'>
          <div className='flex'>
          <div className='w-[100px]'>
            <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[80px]" />
          </div>
          <div className='text-center flex items-center justify-center mx-10 mr-14'>
            =
          </div>
          <div className='basis-[10%]'>
            <input type="number" placeholder='Rules' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px]" />
          </div>
          <div className='flex items-center justify-center mx-3'>
            invite(s)
          </div>
          </div>
          <div className='flex mt-3 lg:mt-0'>
          <div className='basis-[10%]'>
            <input type="number" placeholder='Watched' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[150px]" />
          </div>
          <div className='flex items-center justify-center mx-3'>
            For
          </div>
          <div className='basis-[10%]'>
            <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[100px] mr-3" />
          </div>
          <div className='basis-[10%]'>
            <input type="number" placeholder='Times(s) per week' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[180px]" />
          </div>
          </div>
        </div>
      </div>
      <div className='h-[2px] w-full bg-[#979797] my-10'></div>
      <div className='mt-5 text-[#DDDDDD]'>
        <div className='text-base font-medium '>Invite Limits</div>
      </div>
      <div className='grid grid-cols-10 w-full text-[#DDDDDD]'>
        <div className='col-span-10 lg:col-span-4'>
          <div className='text-sm'>Set limits for user invites</div>
        </div>
        <div className='col-span-10 lg:col-span-4'>
          <div className='text-sm'>Over limit communication</div>
          <div className='text-xs text-[#999999]'>100 character max.</div>
        </div>
        <div className='col-span-10 lg:col-span-4'>
          <div className='mt-3 text-[#DDDDDD] flex items-center'>
            <div className='text-sm w-[80px]'><span className='whitespace-nowrap'>Max. # of </span><br /> invites sent</div>
            <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
            <div className='text-base leading-0'>Per</div>
            <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
          </div>
        </div>
        <div className='col-span-10 lg:col-span-6'>
          <div className='mt-3 text-[#DDDDDD] flex items-center'>
            <input type="text" placeholder='You’ve reached your daily limit. Please follow up with your invited contacts' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
        </div>
        <div className='col-span-10 lg:col-span-4'>
          <div className='mt-3 text-[#DDDDDD] flex items-center'>
            <div className='text-sm leading-0 w-[80px]'><span className='whitespace-nowrap'>Max. # </span><br /> contracts</div>
            <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
            <div className='text-base leading-0'>Per Invite</div>
          </div>
        </div>
        <div className='col-span-10 lg:col-span-6'>
          <div className='mt-3 text-[#DDDDDD] flex items-center'>
            <input type="text" placeholder='The maximum number of contacts per invite is 3' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
        </div>
        <div className='col-span-10 lg:col-span-4'>
          <div className='mt-3 text-[#DDDDDD] flex items-start'>
            <div className='text-sm leading-0 w-[80px]'><span className='whitespace-nowrap'>Max. # of </span><br />invites per<br /> contact</div>
            <input type="number" placeholder='Spins' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
            <div className='text-base leading-0'>Per</div>
            <input type="number" placeholder='Day' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] mx-5 w-[100px]" />
          </div>
        </div>
        <div className='col-span-10 lg:col-span-6'>
          <div className='mt-3 text-[#DDDDDD] flex items-center'>
            <input type="text" placeholder='This contact has already received the maximum number of invites for now. Please try again later.' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
          </div>
        </div>
      </div>
      <div className='my-5 pb-10'>
        <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[100px] h-[38px]">Save</button>
      </div>
    </div>
  );
}

export default Limits;