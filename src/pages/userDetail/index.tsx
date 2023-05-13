import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import Pagination from '@mui/material/Pagination';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Check from '../../assets/images/Check.svg'
import X from '../../assets/images/X.svg'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
// import TextField from '@mui/material/TextField';
// import { Dayjs } from 'dayjs';
// import Box from '@mui/material/Box';
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
const users = [
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Unsent',
  },
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Sent',
  },
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Partially Watched',
  },
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Watched',
  },
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Customer',
  },
  {
    avatar: "",
    name: 'ALDO_RAINE45',
    phone: '(512)289-6014',
    country: 'United States',
    status: 'Distributor',
  },
]
const histories = [
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Login',
    actionid:'--'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Invite sent',
    actionid:'INV-19j2309390'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Wheel spin',
    actionid:'WHL-23409ds90'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Contact Add',
    actionid:'Con-102391039'
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    ipaddress:'18.116.187.201',
    action:'Invite sent',
    actionid:'INV-19j2309390'
  },
]
const winnings = [
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:true,
    gamificationid:'WHL-312p4589 '
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:false,
    gamificationid:'WHL-312p4589 '
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:true,
    gamificationid:'WHL-312p4589 '
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:true,
    gamificationid:'WHL-312p4589 '
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:true,
    gamificationid:'WHL-312p4589 '
  },
  {
    timestamp:'May 11, 2022 12:03:09pm',
    prizename:'$1,000',
    prizeid:'PRZ-2134932',
    fulfillment:true,
    gamificationid:'WHL-312p4589 '
  },
]
const UserDetail = () => {
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
      <div className="text-white font-bold text-2xl mb-1">User Management</div>
      <div className="text-[#999999] font-normal text-base mb-10">View, edit, and manage your customers</div>
      <div className='grid grid-cols-3 gap-5'>
        <div className='col-span-3 2xl:col-span-1'>
          <div className='bg-[#232329] pt-7'>
            <div className='flex px-7'>
              <img src="../../assets/images/user.svg" alt="user" className='w-[100px] 2xl:w-[150px]' />
              <div className='ml-4'>
                <div className='text-[13px] font-bold'>AlDO_RAINE45</div>
                <div className='text-[13px] font-normal'>aldoraine45@gmail.com</div>
                <div className='text-[13px] font-normal'>(512) 999-9999</div>
                <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px] mt-5">Message User</button>
              </div>
            </div>
            <div className='block bg-[#333339] w-full h-[2px] mt-6'></div>
            <div className='flex justify-around py-3 pb-4'>
              <div className='text-center'>
                <div className='text-xl font-bold'>55</div>
                <div>Contacts</div>
              </div>
              <div className='text-center'>
                <div className='text-xl font-bold'>24</div>
                <div>Invited</div>
              </div>
              <div className='text-center'>
                <div className='text-xl font-bold'>12</div>
                <div>Conversions</div>
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
            <Tab value="contact" label="CONTACTS" sx={{ color: 'white' }} />
            <Tab value="activity" label="ACTIVITY" sx={{ color: 'white' }} />
            <Tab value="winning" label="WINNING" sx={{ color: 'white' }} />
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
            <div className='mb-0 mt-3'>Enrollment Date</div>
            <input type="text" placeholder='Enter enrollment date' className="bg-transparent focus:bg-transparent border-0 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-0 focus-visible:border-transparent focus-visible:!outline-none block pl-0 p-2 h-[38px] w-full" />
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
          {value === 'contact' && <div className='text-[#DDDDDD] px-5'>
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
            </div>
            <div className='text-[#DDDDDD] text-xs'>
              <div className='mt-10 flex'>
                <div className='basis-[5%]'>
                  #
                </div>
                <div className='basis-[15%]'>

                </div>
                <div className='basis-[20%]'>
                  Name
                </div>
                <div className='basis-[20%]'>
                  Phone #
                </div>
                <div className='basis-[20%]'>
                  Contry
                </div>
                <div className='basis-[20%]'>
                  Status
                </div>
              </div>
              <div className='mt-2'>
                <div className='block bg-[#333339] w-full h-[1px]'></div>
              </div>
              {users.map((item: any, index: number) => {
                return <div key={'user1'+index}>
                  <div className='mt-5 flex items-center'>
                    <div className='basis-[5%]'>
                      {index + 1}
                    </div>
                    <div className='basis-[15%]'>
                      <img src="../../assets/images/avatar.svg" alt="avatar" />
                    </div>
                    <div className='basis-[20%]'>
                      {item.name}
                    </div>
                    <div className='basis-[20%]'>
                      {item.phone}
                    </div>
                    <div className='basis-[20%]'>
                      {item.country}
                    </div>
                    <div className='basis-[20%]'>
                      {item.status}
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='block bg-[#333339] w-full h-[1px]'></div>
                  </div>
                </div>
              })}
              <div className='flex justify-end mt-5 mb-20'>
                <Pagination count={10} color="primary" siblingCount={0} showFirstButton showLastButton sx={{ button: { color: '#ffffff', backgroundColor: '' } }} />
              </div>
            </div>
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
                  Action ID
                </div>
              </div>
              <div className='mt-2'>
                <div className='block bg-[#333339] w-full h-[1px]'></div>
              </div>
              {histories.map((item: any, index: number) => {
                return <div key={'user2'+index}>
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
                      {item.actionid}
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
              <div className='text-[#FF4861] text-[10px] mt-5'>NOTE: Log only contains the most recent 7 days or up to 500 activities.</div>
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[200px] h-[38px] mr-3 mt-7 mb-20">View All</button>
            </div>
          </div>}
          {value === 'winning' && <div className='text-[#DDDDDD] px-5'>
            <div className='text-base font-bold mt-5'>Winnings</div>
            <div className='flex items-center justify-between mt-3'>
              <div className='flex items-center'>
                <div className='text-[#DDDDDD] mr-3 text-[13px]'>Results per page</div>
                <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-100px text-sm'>
                  <option value="us" className='bg-[#232329] h-[40px]'>10</option>
                  <option value="uk" className='bg-[#232329]'>25</option>
                  <option value="ca" className='bg-[#232329]'>50</option>
                  <option value="ge" className='bg-[#232329]'>100</option>
                </select>
                <div className='text-[#DDDDDD] mr-3 text-[13px] ml-3'>Search</div>
                <DateRangePicker
                  format="yyyy-MM-dd"
                  defaultCalendarValue={[new Date('2022-02-01'), new Date('2022-03-01')]}
                />
                {/* <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={dateValue}
        onChange={(newValue) => {
          setDateValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider> */}
              </div>
            </div>
            <div className='text-[#DDDDDD] text-xs'>
              <div className='mt-10 flex'>
                <div className='basis-[20%]'>
                  Timestamp
                </div>
                <div className='basis-[20%]'>
                  Prize Name
                </div>
                <div className='basis-[20%]'>
                  Prize ID
                </div>
                <div className='basis-[20%]'>
                  Fulfillment
                </div>
                <div className='basis-[20%]'>
                  Gamification ID
                </div>
              </div>
              <div className='mt-2'>
                <div className='block bg-[#333339] w-full h-[1px]'></div>
              </div>
              {winnings.map((item: any, index: number) => {
                return <div key={'user3'+index}>
                  <div className='mt-5 flex items-center'>
                    <div className='basis-[20%]'>
                      {item.timestamp}
                    </div>
                    <div className='basis-[20%]'>
                      {item.prizename}
                    </div>
                    <div className='basis-[20%]'>
                      {item.prizeid}
                    </div>
                    <div className='basis-[20%]'>
                    {item.fulfillment && <img src={Check} alt="Check" />}
                    {!item.fulfillment && <img src={X} alt="X" />}
                    </div>
                    <div className='basis-[20%]'>
                      {item.gamificationid}
                    </div>
                  </div>
                  <div className='mt-2'>
                    <div className='block bg-[#333339] w-full h-[1px]'></div>
                  </div>
                </div>
              })}
              <div className='flex justify-end mt-5 mb-20'>
                <Pagination count={10} color="primary" siblingCount={0} showFirstButton showLastButton sx={{ button: { color: '#ffffff', backgroundColor: '' } }} />
              </div>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default UserDetail;