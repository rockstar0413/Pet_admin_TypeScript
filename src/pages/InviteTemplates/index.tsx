import { styled } from '@mui/material/styles'
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import Invite1 from '../../assets/images/Invite1.png'
import Invite2 from '../../assets/images/Invite2.png'
import Invite3 from '../../assets/images/Invite3.png'
import Invite4 from '../../assets/images/Invite4.png'
import Phone from '../../assets/images/phone.png'
import { BsPlusLg, BsArrowLeft } from 'react-icons/bs'
import { TbBrandTelegram } from 'react-icons/tb'
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
const InviteTemplates = () => {
  const [message, setMessage] = React.useState("")
  const [headline, setHeadline] = React.useState<string>('Why you should join this team...')
  // React.useEffect(() => {
  //   window.addEventListener("resize", changeHeight);
  //   return () => { window.removeEventListener("resize", changeHeight) };
  // }, [])
  // const changeHeight = () => {
  //   setHeight((divRef.current as any).offsetHeight)
  //   console.log(height)
  // }
  return (
    <div className='mt-[60px] lg:ml-[250px] bg-[#2a2a31] min-h-[calc(100vh-60px)] h-full px-0 py-8 pb-7 relative'>
      <div className="text-white font-bold text-2xl px-10 mb-5">Invite Templates</div>

      <div className='w-full grid grid-cols-5 gap-5 px-10 mb-5 '>

      </div>
      <div className="w-full grid grid-cols-5 gap-5 px-10">
        <div className='col-span-5 lg:col-span-1 w-full'>
          <div className='text-[#979797] text-[10px] mb-1 w-full bg-[#2a2a31] whitespace-nowrap'>Add new invite template</div>

          <div className='h-[83%] w-full bg-[#333339] flex justify-center items-center'>
            <BsPlusLg className='text-[#555555] hover:text-[#51B950] text-3xl font-bold cursor-pointer' />
          </div>
        </div>
        <div className='col-span-5 lg:col-span-4 w-full'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            // slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="h-full w-full"
          >
            <SwiperSlide>
              <div className=' '>
                <div className='text-[#979797] text-[10px] mb-1 whitespace-nowrap'>1. Team Invite</div>
                <div className='h-full w-full bg-full flex justify-center items-center'>
                  <img src={Invite1} alt='Invite1' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' '>
                <div className='text-[#979797] text-[10px] mb-1 whitespace-nowrap'>2. Selfies Invite</div>
                <div className='h-full w-full bg-full flex justify-center items-center'>
                  <img src={Invite2} alt='Invite1' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' '>
                <div className='text-[#979797] text-[10px] mb-1 whitespace-nowrap'>3. Team Invite</div>
                <div className={`h-[${50}'px] w-full bg-full flex justify-center items-center`}>
                  <img src={Invite3} alt='Invite1' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' '>
                <div className='text-[#979797] text-[10px] mb-1 whitespace-nowrap'>4. Social Invite</div>
                <div className='h-full w-full bg-full flex justify-center items-center'>
                  <img src={Invite4} alt='Invite1' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' '>
                <div className='text-[#979797] text-[10px] mb-1 whitespace-nowrap'>5. new Team Invite</div>
                <div className='h-full w-full bg-full flex justify-center items-center'>
                  <img src={Invite1} alt='Invite1' className='w-full h-full' />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className='px-10'>
        <div className='h-[2px] w-full bg-[#aaaaaa] mt-10'></div>
      </div>
      <div className='mt-5 px-10 text-[#DDDDDD]'>
        <div className='flex items-center mt-3'>
          <div>Disabled</div>
          <IOSSwitch sx={{ m: 1 }} defaultChecked />
          <div>Enabled</div>
        </div>
        <div className='grid grid-cols-5 gap-10'>
          <div className='col-span-5 lg:col-span-2'>
            <div className='mt-5 flex items-center'>
              <span className='whitespace-nowrap'>Invite Name</span>
              <input type="text" placeholder='Team invite' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] ml-5 w-full" />
            </div>
            <div className='mt-3 flex justify-between items-center w-full'>
              <div>
                <div className='whitespace-nowrap'>Invite Video</div>
                <div className='whitespace-nowrap text-[#979797] text-[10px]'>Upload your invite video here</div>
              </div>
              <div className='w-2/5'>
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
            <div className='mt-3 flex justify-between items-center w-full'>
              <div>
                <div className='whitespace-nowrap'>Video Thumbnail</div>
                <div className='whitespace-nowrap text-[#979797] text-[10px]'>Upload your invite video thumbnail</div>
                <div className='whitespace-nowrap text-[#979797] text-[10px]'>Recommended size 1280x720</div>
              </div>
              <div className='w-2/5'>
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
            <div className='mt-5'>
              <div className='whitespace-nowrap'>Invite CTA Text</div>
              <div className='whitespace-nowrap text-[#979797] text-[10px]'>Enter the headline text for your invite. </div>
            </div>
            <div className='mt-5 flex items-center'>
              <span className='whitespace-nowrap'>Headline</span>
              <input type="text" placeholder='Why you should join this team...' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[38px] ml-5 w-full" value={headline === 'Why you should join this team...' ? '' : headline} onChange={(e) => setHeadline(e.target.value)} />
            </div>
            <div className='flex  items-start w-full mt-5'>
              <div className='w-[220px]'>
                <div className='whitespace-nowrap'>Subtext</div>
                <div className='whitespace-nowrap text-[#979797] text-[10px]'>
                  {message.length}/150 (150 Characters max.)
                </div>
              </div>
              <div className='w-full'>
                <textarea placeholder='Message' className="bg-transparent focus:bg-transparent border-2 border-[#333339] text-white !text-[#DDDDDD] focus-visible:border-1 focus-visible:border-[#70BBFD] focus-visible:outline-none block p-2 pl-[10px] h-[100px] w-full" maxLength={150} onChange={(e) => setMessage(e.target.value)} />
              </div>
            </div>
            <div className="flex justify-start mt-12">
              <button className="bg-[#51B950] hover:bg-[#41A940] rounded-md text-white font-sm w-[150px] h-[38px]">Apply</button>
            </div>
          </div>
          <div className='col-span-5 lg:col-span-3 relative'>
            <div className='absolute z-10 flex items-center p-3 mb-40'>
              <BsArrowLeft className='text-[#555555] hover:text-[#51B950] text-xl font-bold cursor-pointer' />
              <div className='text-white font-medium text-xs ml-1'>Send Invites to:</div>
            </div>
            <div className='absolute z-10 p-3 mt-40 w-[200px]'>
              <div className='text-white font-medium text-xs text-left w-[200px]'>{headline === '' ? 'Why you should join this team...' : headline}</div>
              <div className='text-[8px] whitespace-nowrap text-[#979797]'>2 min, 23 sec.</div>
              <div className='text-[8px] whitespace-nowrap text-[#979797] relative mt-1'>
                <span className='text-[10px] whitespace-nowrap text-[#DDDDDD]'>Custom Message</span>
                <span>(150 Characters)</span>
              </div>
              <div className='text-[8px] whitespace-nowrap text-[#DDDDDD] p-1'>{message}</div>

              <div className='flex items-center mt-16'>
                <div className='w-[30px] h-[30px] rounded-full bg-[#51B950] border-[3px] hover:border-[#40A040] border-[#51B950] flex items-center justify-center cursor-pointer'>
                  <BsPlusLg className='text-[#FFFFFF] text-sm font-bold' />
                </div>
                <span className='text-[10px] ml-1'>Add new contract</span>
              </div>
              <div className=''>
                <div className='flex justify-center mt-5'>
                  <div className='w-[40px] h-[40px] rounded-full bg-[#51B950] border-[3px] hover:border-[#40A040] border-[#51B950] flex items-center justify-center cursor-pointer'>
                    <TbBrandTelegram className='text-[#FFFFFF] text-xl font-bold' />
                  </div>
                </div>
                <div className='flex justify-center'>
                  <span className='text-xs ml-1'>Send it!</span>
                </div>
              </div>
            </div>
            <div className='absolute'><img src={Phone} alt="Phone" className='' /></div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default InviteTemplates;