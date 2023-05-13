import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import WheelImage from '../../assets/images/wheel.png'
import ThreeDots from '../../assets/images/ThreeDots.svg'
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
    prize:'$1000',
    section:'1',
  },
  {
    prize:'prize 2',
    section:'5',
  },
  {
    prize:'prize 3',
    section:'4',
  },
  {
    prize:'prize 4',
    section:'4',
  },

]
const Wheel = () => {
  return (
    <div className="mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] h-full px-10 py-8 pb-7">
      <div className="text-white font-bold text-2xl mb-5">Prize Wheel Settings</div>
      <div className='flex gap-10 '>
        <div className='text-white w-full xl:w-[450px]'>
          <div className='text-lg font-medium text-white'>Master Control</div>
          <div className='text-sm text-white'>Turn the prize wheel on or off for your users</div>
          <div className='flex items-center mt-3'>
            <div>Off</div>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
            <div>On</div>
          </div>
          <div className='flex items-start mt-2'>
            <div className='text-base font-medium text-white mr-4'>Section</div>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <div className='text-left'>
                <span className='ml-[7px]'>2</span><br />
                <FormControlLabel value="1" control={<Radio color="secondary" />} label="" sx={{ fontSize: "12px", color: 'white' }} />
              </div>
              <div className='text-left'>
                <span className='ml-[7px]'>6</span><br />
                <FormControlLabel value="2" control={<Radio color="secondary" />} label="" sx={{ fontSize: "12px", color: 'white' }} />
              </div>
              <div className='text-left'>
                <span className='ml-[7px]'>8</span><br />
                <FormControlLabel value="3" control={<Radio color="secondary" />} label="" sx={{ fontSize: "12px", color: 'white' }} />
              </div>
              <div className='text-left'>
                <span className='ml-[2px]'>16</span><br />
                <FormControlLabel value="4" control={<Radio color="secondary" />} label="" sx={{ fontSize: "12px", color: 'white' }} />
              </div>
            </RadioGroup>
          </div>
          <div className='flex items-center'>
            <div className='text-base font-medium text-white mr-4'>No. of prizes</div>
            <div className='basis-[10%]'>
              <input type="number" placeholder='prizes' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#ffffff] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block w-[100px] p-2 pl-[10px] h-[38px] w-[150px]" />
            </div>
          </div>
          <div className='text-xs text-red-500 ml-[105px]'>Number may not exceed sections</div>
          <div className='text-base font-medium text-white mr-4 mt-4'>Default Wheel Colors</div>
          <div className='flex items-center mt-5'>
            <div className='text-base mr-12'>Color 1</div>
            <div className='flex items-center border border-[#333333]'>
            <div className='h-[30px] w-[30px] bg-sky-500'></div>
            <div className='text-base ml-4 pr-4'>Select Color</div>
          </div>
          </div>
          <div className='flex items-center mt-5'>
            <div className='text-base mr-12'>Color 2</div>
            <div className='flex items-center border border-[#333333]'>
            <div className='h-[30px] w-[30px] bg-sky-300'></div>
            <div className='text-base ml-4 pr-4'>Select Color</div>
          </div>
          </div>

        </div>
        <div className='text-white'>
          <div className='text-lg font-medium text-white'>Preview</div>
          <div className='text-sm text-white'>This is how your prize wheel will appear</div>
          <div className='mt-5 ml-5'>
            <img src={WheelImage} alt="wheel" />
          </div>
        </div>
      </div>
      <div className=''>
        <div className='h-[2px] w-full bg-[#aaaaaa] mt-10'></div>
      </div>
      <div className='flex gap-10 mt-10'>
        <div className='text-white'>
          <div className='text-lg font-medium text-white'>Wheel Assignment</div>
          <div className='text-sm text-white'>Customize your prizes and their frequency</div>
          <div className='flex items-center w-full xl:w-[500px] mb-5 mt-10'>
            <span className='whitespace-nowrap basis-[20%]'>Prize</span>
            <div className='basis-[80%]'>
              <input type="number" placeholder='prize' className=" bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
          </div>
          <div className='flex items-center w-full xl:w-[500px] mb-5'>
            <span className='whitespace-nowrap  basis-[20%]'>Win Limit</span>
            <div className='flex basis-[80%] itemx-center'>
              <div className='w-full flex items-center'>
                <input type="number" placeholder='Limit' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mr-3 w-full" />
                <span className='whitespace-nowrap'>per</span>
                <select name="" id="" className='bg-transparent focus:bg-transparent border-2 border-[#333339] text-[#DDDDDD] !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block h-[38px] w-full text-sm ml-3'>
                  <option value="us" className='bg-[#232329] h-[40px]'>Day</option>
                  <option value="uk" className='bg-[#232329]'>Week</option>
                  <option value="ca" className='bg-[#232329]'>Month</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center w-full xl:w-[500px] mb-5'>
            <span className='whitespace-nowrap basis-[20%]'># of Sections</span>
            <div className='basis-[80%]'>
              <input type="text" placeholder='Section' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-full" />
            </div>
          </div>
          <div className='text-base font-medium text-white mr-4 mt-4'>Section Background</div>
          <div className='gap-5 flex w-full xl:w-[500px] mt-2'>
            <div className='1/2'>
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <div className='h-[25px] w-[25px] bg-sky-500'></div>
                  <div className='text-base ml-4'>Select Color</div>
                </div>
                <div className='text-[#AAAAAA]'>OR</div>
              </div>
              <div className='text-[#AAAAAA] mt-3'>If no image is uploaded the background will be your selected color.</div>
            </div>
            <div className='w-1/2'>
              <video
                id="video1"
                // width="80%"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              // className={classes.videoStyle}
              // ref={videoRef}
              // onClick={() => pause()}
              // onEnded={() => myCallback()}
              ></video>
              <div className='whitespace-nowrap text-[#979797] text-[10px]'>s3.bucket/pandahero.mp4</div>
              <div className='flex justify-between mt-2'>
                <button className="border border-gray-700 hover:border-[#41A940] rounded-md text-white font-sm w-[80px] h-[30px]">Upload</button>
                <button className="border border-gray-700 hover:border-[#41A940] rounded-md text-white font-sm w-[80px] h-[30px]">Remove</button>
              </div>
            </div>
          </div>
          <div className='flex items-center mt-5'>
            <div className='mr-3 w-[80px]'>Start date</div>
            <input type='date' placeholder='Name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mr-3 w-[150px]" name='name' />
            <input type="time" id="appt" name="appt" className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-[150px]" />
          </div>
          <div className='flex items-center mt-5'>
            <div className='mr-3 w-[80px]'>End date</div>
            <input type='date' placeholder='Name' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] mr-3 w-[150px]" name='name' />
            <input type="time" id="appt" name="appt" className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] w-[150px]" />
          </div>
          <div className='mt-4'>Time Zone Jump</div>
          <div className='flex items-center mt-3'>
            <div>On</div>
            <IOSSwitch sx={{ m: 1 }} defaultChecked />
            <div>Off</div>
          </div>
          <div className="flex justify-start mt-[20px] gap-5">
            <button className="bg-[#70BCFD] hover:bg-[#60ACED] rounded-md text-white font-sm w-[130px] h-[38px]">Schedule</button>
            <button className="bg-[#4A4798] hover:bg-[#3A4688] rounded-md text-white font-sm w-[130px] h-[38px]">Apply Now</button>
          </div>
        </div>
        <div className='text-white w-full xl:w-[300px]'>
          <div className='text-lg font-medium text-white'>Wheel Breakdown</div>
          <div className='mt-8 ml-5'>
            <div className='text-base font-medium text-white'>
              Required Sections: <span className='font-bold'><span className='text-pink-500'>7</span> of 16</span>
            </div>
          </div>
          <div className='mt-1 ml-5'>
            <div className='text-base font-medium text-white'>
              Prizes: <span className='font-bold'><span className='text-green-500'>4</span> of 4</span>
            </div>
            <div className='text-[#DDDDDD] text-xs'>
              <div className='mt-5 flex font-medium'>
                <div className='basis-[30%]'>
                  Prize
                </div>
                <div className='basis-[30%] whitespace-nowrap'>
                  # of Section
                </div>
                <div className='basis-[30%]'>
                  
                </div>
              </div>
              <div className='mt-2'>
                <div className='block bg-[#333339] w-full h-[1px]'></div>
              </div>
              {histories.map((item: any, index: number) => {
                return <div key={'user2'+index}>
                  <div className='mt-5 flex items-center'>
                    <div className='basis-[30%]'>
                      {item.prize}
                    </div>
                    <div className='basis-[30%] pl-5'>
                      {item.section}
                    </div>
                    <div className='basis-[30%] flex justify-end'>
                      <img src={ThreeDots} alt="ThreeDots" />
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Wheel;