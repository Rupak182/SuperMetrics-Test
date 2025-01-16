import { useState } from "react";
import useMediaQuery from "../util/useMediaQuery";
import { motion } from "framer-motion";
export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery('(min-width:1280px)')
  return (


    <div className="flex justify-between px-8 py-4 items-center border border-b-gray-300  font-geist bg-[#DCEFFF] opacity-[0.98] fixed top-0 w-full z-50">
      <a href="/" className="text-gray900 font-semibold text-xl">SuperMetrics.com</a>
      {
        matches &&
        <div className="flex gap-4 font-medium ">
          <button className="text-gray700 p-1 px-2 hover:bg-blue-100 hover:text-gray-900 rounded-lg flex items-center gap-1"><span>Features</span><img src="/chevron-down.svg"></img></button>
          <button className="text-gray700 p-1 px-2 hover:bg-blue-100 hover:text-gray-900 rounded-lg flex items-center gap-1"><span>Resources</span><img src="/chevron-down.svg"></img></button>
          <button className="text-gray700 p-1 px-2 hover:bg-blue-100 hover:text-gray-900 rounded-lg flex items-center gap-1"><span>Company</span><img src="/chevron-down.svg"></img></button>
          <a href="#pricing" className="text-gray700 p-1 px-2 hover:bg-blue-100 hover:text-gray-900 rounded-lg flex">Pricing</a>
        </div>
      }

      {matches &&
        <div className="flex gap-4">
          <button className="text-gray-800 font-semibold p-1 px-2 hover:bg-gray-50 rounded-lg">Login</button>
          <button   className="text-white font-medium bg-blue500 p-2 px-3 rounded-lg shadow-blue100">Sign up</button>
        </div>
      }
      <div className="">
        {

          !matches &&
          <div onClick={() => setToggled((prev) => !prev)} className='space-y-1.5 cursor-pointer top-5 right-10 fixed z-50 '>
            <motion.span animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }} className='block h-0.5 w-8 bg-black'></motion.span>
            <motion.span animate={{ width: toggled ? 0 : 32 }} className='block h-0.5 w-8 bg-black'></motion.span>
            <motion.span animate={{ rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0 }} className='block h-0.5 w-8 bg-black'></motion.span>
          </div>
        }

        {
          !matches && toggled &&
          <>
            <motion.div className="w-3/4 border-l-2 h-full fixed top-0 right-0 bg-white z-30 flex flex-col gap-20 items-center justify-center "
              animate={{opacity:1,x:0}}
              initial={{opacity:0,x:25}}
            >
              <div className="flex flex-col items-center justify-center gap-6 font-medium ">
                
                <button className="text-gray600 hover:bg-blue-100 hover:text-gray-900 p-1 px-2  text-2xl font-semibold rounded-lg">Features</button>
                <button className="text-gray600 hover:bg-blue-100 hover:text-gray-900 p-1 px-2  text-2xl font-semibold rounded-lg">Resources</button>
                <button className="text-gray600 hover:bg-blue-100 hover:text-gray-900 p-1 px-2  text-2xl font-semibold rounded-lg">Company</button>    
                <a href="#pricing" className="text-gray600 hover:bg-blue-100 hover:text-gray-900 p-1 px-2  text-2xl font-semibold rounded-lg">Pricing</a>
              </div>

              <div className="flex flex-col gap-6">
                <button className="text-gray-800 font-semibold p-1 px-2 hover:bg-gray-50 rounded-lg text-2xl">Login</button>
                <button className="text-white font-medium bg-blue500 p-2 px-3 rounded-lg shadow-blue100 text-2xl">Sign up</button>
              </div>
            </motion.div>
          </>

        }
      </div>

    </div>
  )
}


