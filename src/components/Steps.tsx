
export default function Steps() {

    const step1 = {
        img_src: "/banner1.svg",
        title: "Install SuperMetrics and create an account",
        desc: "Installation is quick, and creating a SuperMetrics account is completely free."
    }

    const step2 = {
        img_src: "/banner2.svg",
        title: "Connect your marketing accounts to SuperMetrics",
        desc: "Link your accounts to track campaigns and manage channels from one dashboard."
    }

    const step3 = {
        img_src: "/banner3.svg",
        title: "Sync data directly to Google Sheets and Slides",
        desc: "Easily access and integrate your data into documents and presentations."
    }



    const steps = [
        step1, step2, step3
    ]

    return (
        <div className="flex  flex-col items-center justify-center  sm:gap-5  lg:gap-0 py-14 mt-10 lg:px-20 px-5 border-y-2">
            <span className=" lg:my-10 my-5 font-semibold font-geist_mono text-gray600 text-base shadow-white200 p-2 px-3 rounded-2xl border   border-gray600">How It Works</span>
            <span className="font-semibold lg:my-10  text-gray800 text-4xl  text-center">Get Started in 3 Simple Steps</span>

            {
                steps.map((step, index) => (
                    <div key={index} className="flex flex-col ">
                        <div className={`step flex  lg:flex-row flex-col-reverse  items-center justify-evenly  gap-10  w-full ${index % 2 == 1 && 'lg:flex-row-reverse'}`}>
                            <img src={step.img_src} alt={"banner" + (index + 1)} />
                            <div className=" flex flex-col  justify-start  p-5 ">
                                <span className="font-geist_mono font-semibold text-8xl bg-gradient-to-b from-[#CFD5DE] to-transparent bg-clip-text text-transparent leading-normal opacity-50">{"0" + (index + 1)}</span>
                                <span className="lg:w-2/3 w-full font-semibold text-xl text-gray-800">{step.title}</span>
                                <span className="lg:w-2/3 w-full text-gray-[#344054]">{step.desc}</span>
                            </div>
                        </div>
                        {index%2!=0 ?
                    <img src="/connector2.svg"  className="w-1/2 self-center hidden lg:block"alt="connector" />:
                    index<2 &&
                    <img src="/connector.svg"  className="w-1/2 self-center hidden lg:block"alt="connector" />
                    }

                    </div>
                ))
            }


        </div>
    )
}
