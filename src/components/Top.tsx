import Navbar from "./Navbar"
import Hero from "./Hero"
import Steps from "./Steps"
import Pricing from "./Pricing"
import Seperator from "./Seperator"
import Testimonial from "./Testimonial"
import FAQ from "./FAQ"
function Top() {
  return (
    <main>
<div className='bg-gradient-to-b from-[#DCEFFF] via-[#F7FAFC] to-white'>
      <Navbar/>
      <Hero/>
    </div>

    <div  className="w-full p-5 flex flex-col items-center justify-center font-geist_mono text-xl border-y-2 py-16">
                <span className="text-xl text-gray600 ">Trusted by 5000+ marketing professionals</span>
                <img src="/companies.svg" className="w-full" alt="companies" />
    </div>

    <div className="flex flex-col border-b-2 items-center justify-center p-5 gap-4 py-8 bg-gradient-to-b from-[#F5F7FA] to-white">
        <span className="font-semibold text-gray800 text-4xl w-1/3 text-center">Access all your marketing data without leaving</span>
        <img src="GoogleWorkspace.svg" alt="" />
        <img className="w-5/6" src="google_products.svg" alt="" />
     </div>

    <div className="flex items-center justify-center p-3 gap-4 text-xl border-t-2 mt-2">
        <span className="">Looking for <span className="font-bold">DataStudio?</span></span>
        <button className="font-semibold font-geist_mono text-base shadow-white100 p-2 px-3 rounded-lg border border-gray600">Check it out</button>
    </div>
    <Steps/>

    <Seperator/>
    <Pricing/>
    <Seperator/>

    <Testimonial/>
    <Seperator/>
    </main>
    
  )
}

export default Top
