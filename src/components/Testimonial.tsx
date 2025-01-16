
export default function Testimonial() {
  return (
    <div className="relative flex flex-col items-center border-b-2 justify-center gap-10 bg-gradient-to-b from-[#F5F7FA] to-white  mt-10 py-14 lg:px-20 px-8 border-t-2">
        <img src="/quotes.png" className="absolute top-2 " alt="quotes" />
        <button className="font-semibold font-geist_mono text-base shadow-white200 p-2 px-3 rounded-2xl border z-10  border-gray600 text-gray600">Testimonial</button>
        <span className="font-semibold text-gray800 text-4xl  text-center z-10 ">Don’t just take our word for it</span>

        <div className="box  bg-white border rounded-2xl p-3  xl:w-1/2 w-full mx-auto ">
            <div className="innerbox flex rounded-2xl   py-20   bg-gradient-to-b from-[#F5F7FA] to-[#F5F7FA]">
               <div className="w-3/5  flex flex-col mx-auto gap-4 items-center justify-center">
               <span className="text-[#344054] text-center">
                SuperMetrics social analytics tool has provided great insights into social channels for our clients and has become an integral part of our content marketing strategies.
                </span>
                <img src="/p1.png" alt="person1" className="w-[56px]" />
                <div className="flex flex-col items-center justify-center">
                <span className="font-semibold">Mark Manson</span>
                <span className="text-gray600">Project Manager at <span className="font-semibold text-gray900 underline">Google</span></span>
                </div>
               
                <div className="flex gap-4">
                    <img src="/p1.png" alt="person1" className="w-[32px]" />
                    <img src="/p2.png" alt="person2" className="w-[32px]" />
                    {/* todo */}
                    <img src="/p3.png" alt="person3" className="w-[32px]" />
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}
