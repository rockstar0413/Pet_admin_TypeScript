// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import Check from '../../assets/images/Check.svg'
import X from '../../assets/images/X.svg'
import Pagination from '@mui/material/Pagination';

const PrizeManagement = () => {
  const users = [
    {
      avatar: "",
      username: 'ALDO_RAINE45',
      email: 'aldo@gmail.com',
      phone: '(512)289-6014',
      country: 'United States',
      timestamp: '2022/03/22 01:42:21',
      prize: '$1,000',
      fullfilled: true,
    },
    {
      avatar: "",
      username: 'ALDO_RAINE45',
      email: 'aldo@gmail.com',
      phone: '(512)289-6014',
      country: 'United States',
      timestamp: '2022/03/22 01:42:21',
      prize: '$1,000',
      fullfilled: false,
    },
    {
      avatar: "",
      username: 'ALDO_RAINE45',
      email: 'aldo@gmail.com',
      phone: '(512)289-6014',
      country: 'United States',
      timestamp: '2022/03/22 01:42:21',
      prize: '$1,000',
      fullfilled: true,
    },
  ]
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-10 py-8 pb-7">
      <div className="text-white font-bold text-2xl mb-2">Prize Management</div>
      <div className="text-[#999999] font-normal text-base mb-10">View, edit, and manage your customers</div>
      <div className='text-[#DDDDDD]'>
        <div className='bg-[#232329] p-5 mt-5'>
          <div className='uppercase font-bold text-sm mb-7'>User Lookup</div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Username</div>
              <input type="text" placeholder='Enter username' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Country</div>
              <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-full text-sm'>
                <option disabled selected className='bg-[#232329] text-[#AAAAAA]'>Select Country</option>
                <option value="us" className='bg-[#232329] h-[40px]'>United States</option>
                <option value="uk" className='bg-[#232329]'>United Kingdom</option>
                <option value="ca" className='bg-[#232329]'>Canada</option>
                <option value="ge" className='bg-[#232329]'>Germany</option>
              </select>
              {/* <Select options={options} value={value} onChange={changeHandler} className="bg-black" /> */}
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Email Address</div>
              <input type="text" placeholder='Enter email address' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Enrollment Date</div>
              <input type="text" placeholder='Enter enrollment date' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Phone Number</div>
              <input type="text" placeholder='Enter phone number' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <div className='mb-2'>Recently Logged in Users</div>
              <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-full text-sm'>
                <option disabled selected className='bg-[#232329] text-[#AAAAAA]'>Data Range Dropdwon</option>
                <option value="us" className='bg-[#232329] h-[40px]'>Today</option>
                <option value="uk" className='bg-[#232329]'>This week</option>
                <option value="ca" className='bg-[#232329]'>This month</option>
                <option value="ge" className='bg-[#232329]'>This quarter</option>
                <option value="ge" className='bg-[#232329]'>This years</option>
                <option value="ge" className='bg-[#232329]'>Last week</option>
                <option value="ge" className='bg-[#232329]'>Last month</option>
                <option value="ge" className='bg-[#232329]'>Last quarter</option>
                <option value="ge" className='bg-[#232329]'>Last years</option>
              </select>
            </div>
          </div>
          <div className='mt-3'>Include blocked users?</div>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio color="secondary" />} label="Yes" sx={{ fontSize: "12px" }} />
            <FormControlLabel value="no" control={<Radio color="secondary" />} label="No" />
          </RadioGroup>
          <div className="flex justify-end mt-[20px]">
            <button className="bg-[#E7E2E2] hover:bg-[#D7D2E2] rounded-md text-black font-sm w-[100px] h-[38px] mr-3">Clear</button>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[100px] h-[38px]">Submit</button>
          </div>
        </div>
      </div>
      <div className='text-[#DDDDDD] text-sm font-bold mt-10'>
        Search Results
      </div>
      <div className='flex items-center justify-between mt-3'>
        <div className='flex items-center'>
        <div className='text-[#DDDDDD] mr-3 text-[13px]'>Results per page</div>
        <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-100px text-sm'>
          <option value="us" className='bg-[#232329] h-[40px]'>10</option>
          <option value="uk" className='bg-[#232329]'>25</option>
          <option value="ca" className='bg-[#232329]'>50</option>
          <option value="ge" className='bg-[#232329]'>100</option>
        </select>
        </div>
        <button className="bg-[#F2F4F7] hover:bg-[#E1F4E7] rounded-md text-black text-[13px] font-medium w-[90px] h-[30px]">Export CSV</button>
      </div>
      <div className='text-[#DDDDDD] text-xs'>
        <div className='mt-10 flex'>
          <div className='basis-[3%]'>
            #
          </div>
          <div className='basis-[7%]'>

          </div>
          <div className='basis-[13%]'>
            Username
          </div>
          <div className='basis-[13%]'>
            Email
          </div>
          <div className='basis-[13%]'>
            Phone
          </div>
          <div className='basis-[13%]'>
            Country
          </div>
          <div className='basis-[15%] whitespace-nowrap'>
            Winning Timestamp
          </div>
          <div className='basis-[13%]'>
            Prize Won
          </div>
          <div className='basis-[10%]'>
            Fullfilled
          </div>
          <div className='basis-[10%]'>

          </div>
        </div>
        <div className='mt-2'>
          <div className='block bg-[#333339] w-full h-[1px]'></div>
        </div>
        {users.map((item: any, index: number) => {
          return <div key={'prize'+index}>
            <div className='mt-5 flex items-center'>
            <div className='basis-[3%]'>
              {index + 1}
            </div>
            <div className='basis-[7%]'>
              <img src="../../assets/images/avatar.svg" alt="avatar" />
            </div>
            <div className='basis-[13%]'>
              {item.username}
            </div>
            <div className='basis-[13%]'>
              {item.email}
            </div>
            <div className='basis-[13%]'>
              {item.phone}
            </div>
            <div className='basis-[13%]'>
              {item.country}
            </div>
            <div className='basis-[15%] whitespace-nowrap'>
              {item.timestamp}
            </div>
            <div className='basis-[13%]'>
              {item.prize}
            </div>
            <div className='basis-[10%]'>
              {item.fullfilled && <img src={Check} alt="Check" />}
              {!item.fullfilled && <img src={X} alt="X" />}
            </div>
            <div className='basis-[10%] flex justify-end'>
              {/* <button className="bg-[#51B950] hover:bg-[#21A930] rounded-md text-white font-medium w-[90px] h-[30px]">Details</button> */}
            </div>
            
          </div>
          <div className='mt-2'>
              <div className='block bg-[#333339] w-full h-[1px]'></div>
            </div>
          </div>
        })}
        <div className='flex justify-end mt-5'>
        <Pagination count={10} color="primary" siblingCount={0} showFirstButton showLastButton sx={{button:{color: '#ffffff', backgroundColor:''}}} />
        </div>
      </div>
    </div>
  );
}

export default PrizeManagement;