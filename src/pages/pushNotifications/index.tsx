import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import PlusAlert from '../../assets/images/PlusAlert.svg'
import GreenAlert from '../../assets/images/GreenAlert.svg'
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
const PushNotifications = () => {
  const [message, setMessage] = React.useState("")
  const [sendMessage, setSendMessage] = React.useState("")
  const [value, setValue] = React.useState('trigger');
  const [isSend, setIsSend] = React.useState<boolean>(false)
  const [isSchedule, setIsSchedule] = React.useState<boolean>(false)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // const [country, setCountry] = React.useState("")
  // const options = React.useMemo(() => (countryList().getData() as any), [])

  // const changeHandler = (value: any) => {
  //   setCountry(value)
  // }
  return (
    <div>
      {isSchedule && <div className='h-[calc(100vh+50px)] fixed w-full bg-[#00000090] z-10 -top-[50px] flex justify-center items-center'>
        <div className='px-5 py-7 w-full lg:w-[550px] px-4lg:px-0 text-[#DDDDDD] !bg-[#232329] z-40'>
          <div className='w-full flex justify-center'>
            <img src={GreenAlert} alt="GreenAlert" />
          </div>
          <div className='w-full flex justify-center mt-2'>
            <div className='text-2xl text-center'>
            This message will be sent to <br /> <span className='font-bold text-[#51B950]'>541</span> users. Please confirm.
            </div>
          </div>
          <div className='w-full flex justify-center mt-5 mb-6 border border-[#999999] px-3 py-2'>
            <div className='text-xs text-[#999999] text-center'>
              {sendMessage}
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className="bg-transparent hover:bg-[#00000070] rounded-md text-white font-sm w-[120px] h-[38px] mr-5" onClick={()=>{setIsSchedule(false);}} >Cancel</button>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm px-4 h-[38px] px-5"  onClick={()=>{setIsSchedule(false); }} >Confirm & Schedule</button>
          </div>
        </div>
      </div>}
      {isSend && <div className='h-[calc(100vh+50px)] fixed w-full bg-[#00000090] z-10 -top-[50px] flex justify-center items-center'>
        <div className='px-5 py-7 w-full lg:w-[550px] px-4lg:px-0 text-[#DDDDDD] !bg-[#232329] z-40'>
          <div className='w-full flex justify-center'>
            <img src={PlusAlert} alt="PlusAlert" />
          </div>
          <div className='w-full flex justify-center mt-2'>
            <div className='text-2xl text-center'>
            This message will be sent to <br /> <span className='font-bold text-[#51B950]'>541</span> users. Please confirm.
            </div>
          </div>
          <div className='w-full flex justify-center mt-5 mb-6 border border-[#999999] px-3 py-2'>
            <div className='text-xs text-[#999999] text-center'>
              {sendMessage}
            </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button className="bg-transparent hover:bg-[#00000070] rounded-md text-white font-sm w-[120px] h-[38px] mr-5" onClick={()=>{setIsSend(false);}} >Cancel</button>
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm px-5 h-[38px]"  onClick={()=>{setIsSend(false); }} >Confirm & Send</button>
          </div>
        </div>
      </div>}
      <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] lg:h-full px-0 py-8 pb-7">
      <div className="text-white font-bold text-2xl px-10 mb-10">Push Notifications</div>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        className='relative px-14'
      >
        <Tab value="trigger" label="TRIGGERS" sx={{ color: 'white', marginLeft: '20px' }} />
        <Tab value="send" label="SINGLE SEND" sx={{ color: 'white' }} />
        <Tab value="history" label="HISTORY" sx={{ color: 'white' }} />
        <div className='h-[2px] w-full bg-[#aaaaaa] absolute top-[46px]'></div>
      </Tabs>
      {value === 'trigger' && <div className='text-[#DDDDDD] px-14'>
        <div className='grid grid-cols-2'>
          <div className='col-span-2 lg:col-span-1 pt-5 pl-5'>
            <div className='text-base'>Communication Triggers</div>
            <div className='text-sm text-[#51B950] mt-4 ml-4'>Contact Added</div>
            <div className='mt-5 flex items-center pl-7'>
              <span className='whitespace-nowrap'>Invite Name</span>
              <input type="text" placeholder='Team invite' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mx-5 w-full" />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 pt-5'>
            <div className='text-base'>Message Sent</div>
            <div className='text-sm  mt-4'>
              {message.length}/150 (150 Characters max.)
            </div>
            <div className='mt-1 flex items-center'>
              <textarea placeholder='Message' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[100px] w-full" maxLength={150} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className='flex items-center mt-3'>
              <div>Disabled</div>
              <IOSSwitch sx={{ m: 1 }} defaultChecked />
              <div>Enabled</div>
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px]">Apply</button>
            </div>

          </div>
        </div>
        <div className='h-[2px] w-full bg-[#aaaaaa] mt-40'></div>
        <div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Contact started video</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Contact completed video</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Congrats Winner</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Congrats Winner</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Custom 1</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Custom 2</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Custom 3</div>
          <div className='mt-5 hover:text-[#51B950] cursor-pointer'>Custom 4</div>
        </div>
      </div>}
      {value === 'send' && <div className='text-[#DDDDDD] px-5'>
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
            <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[100px] h-[38px] mr-3">Apply</button>
            <button className="bg-[#E7E2E2] hover:bg-[#D7D2E2] rounded-md text-black font-sm w-[100px] h-[38px]">Cancel</button>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className='col-span-2 lg:col-span-1 pt-5'>
            <div className='text-base font-medium'>Message to Sent</div>
            <div className='text-sm  mt-4'>
              {sendMessage.length}/150 (150 Characters max.)
            </div>
            <div className='mt-1 flex items-center'>
              <textarea placeholder='Message' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[100px] w-full" maxLength={150} onChange={(e) => setSendMessage(e.target.value)} />
            </div>
            <div className="flex justify-end mt-[20px]">
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px]" onClick={()=>setIsSend(true)}>Send Now</button>
            </div>
            <div className='flex items-center mt-5'>
              <div className='mr-3'>When</div>
              <input type='date' placeholder='Name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mr-3 w-[150px]" name='name' />
              <input type="time" id="appt" name="appt" className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-[150px]" />
            </div>
            <div className='mt-4'>Time Zone Jump</div>
            <div className='flex items-center mt-3'>
              <div>On</div>
              <IOSSwitch sx={{ m: 1 }} defaultChecked />
              <div>Off</div>
            </div>
            <div className="flex justify-start mt-[20px]">
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px]" onClick={()=>setIsSchedule(true)}>Schedule</button>
            </div>
          </div>
        </div>
      </div>}
      {value === 'history' && <div className='text-[#DDDDDD] px-20'>
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
                return <div key={'push'+index}>
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
    </div>
    </div>
  );
}

export default PushNotifications;