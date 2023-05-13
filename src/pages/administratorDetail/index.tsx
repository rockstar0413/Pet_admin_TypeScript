import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import 'rsuite/dist/rsuite.min.css';
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 0,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#51B950' : '#51B950',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#51B950',
      border: '6px solid #51B950',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#979797' : '#51B950',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const histories = [
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Prize wheel change',
    changedfrom:'$3,000',
    changedto:'$3,000'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Push notification',
    changedfrom:'Congratulations, you earned a free spin!',
    changedto:'Sent notification'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Login',
    changedfrom:'',
    changedto:''
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Add new user',
    changedfrom:'',
    changedto:''
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Profile change',
    changedfrom:'$3,000',
    changedto:'$3,000'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Prize wheel change',
    changedfrom:'Unblocked',
    changedto:'Blocked'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Global settings change',
    changedfrom:'Daily limit 5',
    changedto:'Daily limit 10'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Global settings change',
    changedfrom:'',
    changedto:'Login status- removed suspendedd'
  },
]
const AdministratorDetail = () => {
  const [value, setValue] = React.useState('profile');
  // const [dateValue, setDateValue] = React.useState<DateRange<Dayjs>>([null, null]);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // const [country, setCountry] = React.useState("")
  // const options = React.useMemo(() => (countryList().getData() as any), [])

  // const changeHandler = (value: any) => {
  //   setCountry(value)
  // }
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-10 py-8 pb-7 text-[#DDDDDD]">
      <div className="text-white font-bold text-2xl mb-10">Adminstrators</div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-3 2xl:col-span-1'>
          <div className='bg-[#232329] pt-7'>
            <div className='flex px-7 pb-7'>
              <img src="../../assets/images/user.svg" alt="user" className='w-[100px] 2xl:w-[150px]' />
              <div className='ml-4'>
                <div className='text-[13px] font-bold'>AlDO_RAINE45</div>
                <div className='text-[13px] font-normal'>aldoraine45@gmail.com</div>
                <div className='text-[13px] font-normal'>(512) 999-9999</div>
                <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px] mt-5">Message User</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 2xl:col-span-2 bg-[#232329] pt-2'>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            className='relative'
          >
            <Tab value="profile" label="PROFILE INFO" sx={{ color: 'white', marginLeft: '20px' }} />
            <Tab value="activity" label="ACTIVITY" sx={{ color: 'white' }} />
            <div className='h-[2px] w-full bg-[#aaaaaa] absolute top-[46px]'></div>
          </Tabs>
          {value === 'profile' && <div className='text-[#DDDDDD] w-full px-9'>
            <div className='mb-0 mt-5'>Username</div>
            <input type="text" placeholder='Enter username' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
            <div className='h-[1px] w-full bg-[#AAAAAA]'></div>
            <div className='mb-0 mt-3'>E-mail</div>
            <input type="text" placeholder='Enter eamil' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
            <div className='h-[1px] w-full bg-[#AAAAAA]'></div>
            <div className='mb-0 mt-3'>Phone Number</div>
            <input type="text" placeholder='Enter phone number' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
            <div className='h-[1px] w-full bg-[#AAAAAA]'></div>
            <div className='mb-0 mt-3'>Country</div>
            <input type="text" placeholder='Enter country' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
            <div className='h-[1px] w-full bg-[#AAAAAA]'></div>
            <div className='mb-0 mt-3'>Role</div>
            <input type="text" placeholder='Enter role' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
            <div className='h-[1px] w-full bg-[#AAAAAA]'></div>
            <div className="mt-20">
              <div className=''>Block user</div>
              <div className='text-xs text-[#999999]'>The user will receive an email informing then that they have been blocked from the system.</div>
              <div className='flex items-center mt-3'>
                <div>Unblocked</div>
                <IOSSwitch sx={{ m: 1 }} defaultChecked />
                <div>Blocked</div>
              </div>
            </div>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[200px] h-[38px] mr-3 mt-10 mb-7">Update Profile</button>
          </div>}
          {value === 'activity' && <div className='text-[#DDDDDD] px-5'>
            <div className='text-base font-bold mt-5'>History</div>
            <div className='flex items-center justify-between mt-3'>
              <div className='flex items-center'>
                <div className='text-[#DDDDDD] mr-3 text-[13px]'>Filter by action</div>
                <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-100px text-sm'>
                  <option value="us" className='bg-[#232329] h-[40px]'>Login</option>
                  <option value="uk" className='bg-[#232329]'>Signup</option>
                  <option value="ca" className='bg-[#232329]'>Contact</option>
                  <option value="ge" className='bg-[#232329]'>Join</option>
                </select>
              </div>
              <button className="bg-[#F2F4F7] hover:bg-[#E1F4E7] rounded-md text-black text-[13px] font-medium w-[90px] h-[30px]">Export CSV</button>
            </div>
            <div className='text-[#DDDDDD] text-xs'>
              <div className='mt-10 flex'>
                <div className='basis-[20%]'>
                  Timestamp
                </div>
                <div className='basis-[20%]'>
                  IP Address
                </div>
                <div className='basis-[20%]'>
                  Action
                </div>
                <div className='basis-[20%]'>
                  Changed From
                </div>
                <div className='basis-[20%]'>
                  Changed To
                </div>
              </div>
              <div className='mt-2'>
                <div className='block bg-[#333339] w-full h-[1px]'></div>
              </div>
              {histories.map((item: any, index: number) => {
                return <div key={'admindetail'+index}>
                  <div className='mt-5 flex items-center'>
                    <div className='basis-[20%]'>
                      {item.timestamp}
                    </div>
                    <div className='basis-[20%]'>
                      {item.ipaddress}
                    </div>
                    <div className='basis-[20%]'>
                      {item.action}
                    </div>
                    <div className='basis-[20%]'>
                      {item.changedfrom}
                    </div>
                    <div className='basis-[20%]'>
                      {item.changedto}
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='block bg-[#333339] w-full h-[1px]'></div>
                  </div>
                </div>
              })}
              {/* <div className='flex justify-end mt-5 mb-20'>
                <Pagination count={10} color="primary" siblingCount={0} showFirstButton showLastButton sx={{ button: { color: '#ffffff', backgroundColor: '' } }} />
              </div> */}
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[200px] h-[38px] mr-3 mt-7 mb-20">View All</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default AdministratorDetail;