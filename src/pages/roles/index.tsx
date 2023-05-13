const Roles = () => {
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-10 py-8 pb-7">
      <div className="text-white font-bold text-2xl mb-7">Roles & Permissions</div>
      <div className='px-7 pt-5 text-[#DDDDDD]'>
        <div className='text-[13px] mb-3'>Add New Administrator</div>
        <div className='text-[#979797] text-[10px] mb-10'>Create a new Super Admin user or create a new user <br />in your client’s organization.</div>
        <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-full lg:w-[260px] text-sm mb-24'>
          <option disabled selected className='bg-[#232329] text-[#AAAAAA]'>Select user role</option>
          <option value="us" className='bg-[#232329] h-[40px]'>Administrator</option>
          <option value="uk" className='bg-[#232329]'>Moderator (Read Only)</option>
        </select>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Invite Name</span>
          <input type="text" placeholder='Team invite' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>First Name</span>
          <input type="text" placeholder='Enter first name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Last Name</span>
          <input type="text" placeholder='Enter last name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Display Name</span>
          <input type="text" placeholder='Enter display name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>E-mail</span>
          <input type="text" placeholder='Enter e-mail' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Password</span>
          <input type="password" placeholder='Enter password' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Role</span>
          <input type="text" placeholder='Enter role' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className=' flex items-center w-full xl:w-[800px] mb-5'>
          <span className='whitespace-nowrap w-[100px]'>Whitelist IP</span>
          <input type="text" placeholder='Enter whitelist IP' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
        </div>
        <div className='my-10 pb-10'>
        <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[100px] h-[38px]">Save</button>
      </div>
      </div>
    </div>
  );
}

export default Roles;