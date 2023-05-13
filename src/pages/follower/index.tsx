// import Check from '../../assets/images/Check.svg'
// import X from '../../assets/images/X.svg'
// import { IFollower } from '../../interfaces/interface'
// import { useNavigate } from 'react-router-dom'
// const results: Array<IFollower> = [
//   {
//     username: 'DeliverFund',
//     requestedOn: '2022/03/22 01:42:21',
//     estimatedFinish: '2022/03/22 01:42:21',
//     additionalData: 'Yes',
//     followersCount: '5M',
//     emailCount: 0,
//     status: 1
//   },
//   {
//     username: 'TheExodusRoad',
//     requestedOn: '2022/03/22 01:42:21',
//     estimatedFinish: '2022/03/22 01:42:21',
//     additionalData: 'Yes',
//     followersCount: '2K',
//     emailCount: 0,
//     status: 0
//   },
//   {
//     username: 'TheExodusRoad',
//     requestedOn: '2022/03/22 01:42:21',
//     estimatedFinish: '2022/03/22 01:42:21',
//     additionalData: 'Yes',
//     followersCount: '1.5K',
//     emailCount: 0,
//     status: 1
//   },
// ]
const Follower = () => {
  // const navigate = useNavigate()
  // const gotoDetail = () =>{
  //   navigate('/tools/follower/detail')
  // }
  return (
    <div className="mt-[60px] ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full text-[#A8A8A9] text-sm p-5">
      {/* <div className='pt-10 px-5 lg:px-10'>
        <div className='flex items-center'>
          <div className='block  w-[40px] h-[40px] rounded-lg bg-[#E8004C] mr-3'></div>
          <div className='font-bold text-xl'>IG FOLLOWER<br /> SCRAPER</div>
        </div>
        <div className='flex items-center mt-3'>
          <div className='pl-[50px] text-base'>Scrape IG followers of any <br /> public profile or pages</div>
        </div>
        <div className='flex justify-center mt-3'>
          <div className=''>
            <div className='pl-[25px]'>
              <div className='mb-2 text-[#ffffff]'>Instagram URL / username</div>
              <input type="text" placeholder='www.instagram.com/user_name OR user_name' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-full p-2 pl-[10px] h-[32px]" />
              <div className='mt-5'>How many followers’ data do you want to scrape?</div>
              <div className='mb-2 text-[#888888]'>(max. 10,000 followers per request) </div>
              <input type="number" min="0" max="10000" placeholder='10000' className="bg-transparent focus:bg-transparent border border-gray-300 text-gray-900 !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-full p-2 pl-[10px] h-[32px]" />
              <div className='mb-3 mt-3 text-[#ffffff]'>Choose your data points for each follower</div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="w-[16px] h-[16px] bg-transparent border border-[#A53594] hover:!border hover:!border-[#A53594] focus:bg-transparent focus:!border-1 focus:!border-[#A53594] focus:!outline-0 focus:ring-0 focus:ring-offset-0 checked:!bg-[#A53594] checked:!border checked:!border-[#A53594] focus-visible:border-white focus-visible:outline-0 !text-blue cursor-pointer" />
              <div className='pl-2 whitespace-nowrap text-[#ffffff]'>ID, Username, Full Nme, Profile pic URL, Private, Verified</div>
            </div>
            <div className="flex items-start mt-3">
              <input type="checkbox" className="w-[16px] h-[16px] bg-transparent border border-[#A53594] hover:!border hover:!border-[#A53594] focus:bg-transparent focus:!border-1 focus:!border-[#A53594] focus:!outline-0 focus:ring-0 focus:ring-offset-0 checked:!bg-[#A53594] checked:!border checked:!border-[#A53594] focus-visible:border-white focus-visible:outline-0 !text-blue cursor-pointer" />
              <div className='pl-2 '>
                FB ID, followers count, following count, business account,<br /> professional account, joined recently, connected to FB,<br /> email, phone number, phone country code, zipcode, city,<br /> external URL, biography, category name <br />
                <div className='text-[#888888]'>(enabling this option will take a bit longer to process the data)</div>
              </div>
            </div>
            <div className='mb-3 mt-3 pl-[25px] text-[#ffffff]'>Estimated processing time: 1 hour, 41 minutes</div>
            <div className="flex justify-center mt-[30px]">
              <button className="bg-[#E8004C] hover:bg-[#FF9090] rounded-lg text-white font-sm w-1/3 h-[38px]">Run</button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 mt-10'>
        <div className='block bg-black w-full h-[1px]'></div>
      </div>
      <div className='flex justify-between px-10 mt-10'>
        <div className='flex items-center'>
          <div className='text-white'>SEARCH RESULTS</div>
        </div>
        <div className='flex items-center'>
          <div className='text-white mr-5'>export .xls , .csv  button</div>
          <button className="bg-[#F2F4F7] hover:bg-[#FF9090] rounded-md text-black font-medium w-[90px] h-[30px]">Export CSV</button>
        </div>
      </div>
      <div className=''>
        <div className='px-10 mt-10 flex'>
          <div className='basis-[3%]'>
            #
          </div>
          <div className='basis-[10%]'>
            Username
          </div>
          <div className='basis-[15%]'>
            Requested on
          </div>
          <div className='basis-[15%]'>
            Estimated finish
          </div>
          <div className='basis-[13%]'>
            Additional Data
          </div>
          <div className='basis-[13%]'>
            Followers Count
          </div>
          <div className='basis-[12%]'>
            Email Count
          </div>
          <div className='basis-[10%]'>
            Status
          </div>
          <div className='basis-[10%]'>

          </div>
        </div>
        <div className='px-10 mt-2'>
          <div className='block bg-[#333339] w-full h-[1px]'></div>
        </div>
      </div>
      {results.map((item: IFollower, index: number) => {
        return <div className='' key={index}>
        <div className='px-10 mt-5 flex'>
          <div className='basis-[3%]'>
            {index + 1}
          </div>
          <div className='basis-[10%]'>
            {item.username}
          </div>
          <div className='basis-[15%]'>
          {item.requestedOn}
          </div>
          <div className='basis-[15%]'>
          {item.estimatedFinish}
          </div>
          <div className='basis-[13%]'>
          {item.additionalData}
          </div>
          <div className='basis-[13%]'>
          {item.followersCount}
          </div>
          <div className='basis-[12%]'>
          {item.emailCount}
          </div>
          <div className='basis-[10%]'>
            {item.status ===1 && <img src={Check} alt="Check" /> }
            {item.status ===0 && <img src={X} alt="X" /> }
          </div>
          <div className='basis-[10%] flex justify-end'>
            <button className="bg-[#51B950] hover:bg-[#21A930] rounded-md text-white font-medium w-[90px] h-[30px]" onClick={()=>gotoDetail()}>Details</button>
          </div>
        </div>
        <div className='px-10 mt-2'>
          <div className='block bg-[#333339] w-full h-[1px]'></div>
        </div>
      </div>
      })} */}
      <div className="text-white font-bold text-2xl mb-20">Development</div>
    </div>
  );
}

export default Follower;