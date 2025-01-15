
export default function Steps() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-14 mt-10 px-20 border-y-2">
        <span className="font-semibold font-geist_mono text-base shadow-white200 p-2 px-3 rounded-2xl border  border-gray600">How It Works</span>
        <span className="font-semibold text-gray800 text-4xl  text-center">Get Started in 3 Simple Steps</span>

        <div className="step1 flex items-center justify-evenly  gap-10 mt-9 w-full">
            <img src="/banner1.svg" alt="banner1" />
            <div className=" flex flex-col  justify-start  p-5">
                <span className="font-geist_mono  font-semibold text-8xl bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent leading-normal opacity-50">01</span>
                <span className=" w-2/3 font-semibold text-xl text-gray-800">Install SuperMetrics and create an account</span>
                <span className=" w-2/3 text-gray-[#344054]">Installation is quick, and creating a SuperMetrics account is completely free.</span>
            </div>
        </div>

        <div className="step2 flex items-center justify-evenly  gap-10 mt-9 w-full">
            <div className=" flex flex-col  justify-start  p-5">
                <span className="font-geist_mono font-semibold text-8xl bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent leading-normal opacity-50">02</span>
                <span className="w-2/3 font-semibold text-xl text-gray-800">Connect your marketing accounts to SuperMetrics</span>
                <span className="w-2/3 text-gray-[#344054]">Link your accounts to track campaigns and manage channels from one dashboard.</span>
            </div>
            <img src="/banner2.svg" alt="banner2" />

        </div>
   

        <div className="step3 flex items-center justify-evenly  gap-10 mt-9 w-full">
            <img src="/banner3.svg" alt="banner3" />
            <div className=" flex flex-col  justify-start  p-5">
                <span className="font-geist_mono font-semibold text-8xl bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent leading-normal opacity-50">03</span>
                <span className="w-2/3 font-semibold text-xl text-gray-800">Sync data directly to Google Sheets and Slides</span>
                <span className="w-2/3 text-gray-[#344054]">Easily access and integrate your data into documents and presentations.</span>
            </div>
        </div>
   
   
    </div>
  )
}
