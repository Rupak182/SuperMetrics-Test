

export default function Hero() {
    return (
        <main className="">
            <div className="flex lg:flex-row flex-col p-8 pt-14 items-center justify-center lg:gap-2 gap-6 ">
                <div className="lg:w-1/2 bg-gradient-to-b from-[#0D314F] to-[#165182] bg-clip-text text-transparent leading-normal  flex flex-col  pl-10  relative">
                    <span className="xl:text-[56px] text-4xl font-bold mt-10  ">Sync Your Marketing </span>
                    <div className="flex items-center flex-wrap">
                        <span className="xl:text-[56px] text-4xl font-bold  text-left">Data to</span>
                        <img className="ml-2 xl:h-[56px]  h-[36px] xl:mt-4 mt-2  w-auto" src="./google.svg" alt="Google" />
                        <img className="ml-2 xl:h-[56px] h-[36px] xl:mt-4 mt-2 w-auto" src="./workspace.svg" alt="Workspace" />
                    </div>

                    <span className="text-gray600  text-[20px] lg:mt-8 mt-2  ">
                        With the SuperMetrics Workspace add-on, access all your connected marketing and sales accounts directly in Google Sheets, Slides, and everywhere else.
                    </span>

                    <div className="flex gap-2 my-6">
                        <button className="text-white font-medium bg-blue500 lg:p-4 lg:px-5 md:p-3 md:px-4 px-2 p-1   rounded-lg flex gap-2 shadow-blue100"><span>Install Now</span> <img src="/link.svg" alt="" /></button>
                        <button className="font-medium  shadow-white100 lg:p-4 lg:px-5md:p-3 md:px-4 px-2 p-1  rounded-lg border border-gray600">Learn More</button>

                    </div>

                </div>

                <div className="lg:w-1/2  w-full p-5 mt-10 ">
                    <img src="/Hero.svg" className="cover w-full" alt="" />
                </div>


            </div>
        </main>
    )
}
