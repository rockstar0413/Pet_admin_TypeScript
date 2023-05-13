import appRoutes from '../pages/routes'
import FootLogo from '../assets/images/foot.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Dad from '../assets/images/dad-dog.png'
import { useLocation} from 'react-router-dom'
const Footer = () => {
  const location = useLocation();
  return (
    <div className="footer bg-black relative">
      {location.pathname === "/about" && <div className='flex justify-end w-full absolute'>
        <img src={Dad} alt="foot3" className="-mt-80 ml-25" width={400} height={400} />
      </div>}
      <div className="pt-12 px-16 flex justify-between">
        <div className='pt-12 flex flex-wrap w-full'>
          <div className='text-white font-medium pr-20 col-lg-3 col-md-4 col-sm-4'>
            <div className='mb-4'>
              <div className='text-orange-500 font-xl font-medium'>CONTACT US</div>
              <div>Please feel free to contact us</div>
            </div>
            <div className='mb-4'>
              <div className='text-orange-500 font-xl font-medium'>EMAIL</div>
              <div>n2web@gmail.com</div>
            </div>
            <div className='mb-4'>
              <div className='text-orange-500 font-xl font-medium'>MESSENGER</div>
              <div>jjsminiausie</div>
            </div>
            <div className='mb-4'>
              <div className='text-orange-500 font-xl font-medium'>TEXT</div>
              <div>713-371-6637</div>
            </div>
          </div>
          <div className='text-white text-xs pr-20 pt-7 col-lg-3 col-md-4 col-sm-4'>
            {appRoutes.map(
              (item, index) =>
                <div key={index} className='mb-4 flex items-center'>
                  <MdKeyboardArrowRight />
                  {item.title}
                </div>
            )}
          </div>
          <div className='text-white text-xs pr-20 pt-7 col-lg-3 col-md-4 col-sm-4'>
            <div className='mb-4 flex items-center'>
              <MdKeyboardArrowRight />
              Support
            </div>
            <div className='mb-4 flex items-center'>
              <MdKeyboardArrowRight />
              Privacy Policy
            </div>
            <div className='mb-4 flex items-center'>
              <MdKeyboardArrowRight />
              Terms and conditions
            </div>
            <div className='mb-4 flex items-center'>
              <MdKeyboardArrowRight />
              FAQ
            </div>
          </div>
          <div className='mx-auto text-white col-lg-3 col-md-12 col-sm-12'>
            <div className='text-center'>
              <div className='flex justify-center'>
                <img src={FootLogo} alt="" width={100} height={100} />
              </div>
              <div className='pt-2'>AUSTRALIAN <br /> SHEPHARDS</div>
              <div className='' >
                <div className='mt-5 pl-1'>NEWS</div>
                <input type="text" placeholder='Subscribe your email' className='rounded-sm p-1' />
                <div className='pl-1'>to get more updates on <br /> future</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div className='mx-auto text-white '>
            <div className=''>
              <img src={FootLogo} alt="" width={100} height={100} />
              <div className='pt-2'>AUSTRALIAN <br /> SHEPHARDS</div>
              <div>
              </div>
              <div className='mt-5 pl-1'>NEWS</div>
              <input type="text" placeholder='Subscribe your email' className='rounded-sm p-1' />
              <div className='pl-1'>to get more updates on <br /> future</div>
            </div>
          </div>
        </div> */}

      </div>
      <div className='w-full border-t-2 border-slate-400'>
      </div>
      <div className='w-full text-white bg-black h-12 text-center flex items-center justify-center'>
        <div>
          2022 Shade Tree Ranch. All rights reserved. Design by <span className='text-red-500'>SAHIL D.</span>
        </div>
      </div>
      <div className='w-full bg-white h-4'>
      </div>
      <div className='w-full bg-orange-500 h-6'>
      </div>
    </div>
  )
}

export default Footer
