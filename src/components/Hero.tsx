

export default function Hero() {
    return (
        <main>
            <div className="flex p-8 items-center justify-center">
                <div className="w-1/2  flex flex-col  pl-10  relative">
                    {/* change color */}
                    <span className="text-[56px] font-bold text-gray900 ">Sync Your Marketing </span>
                    <div className="flex items-center">
                        <span className="text-[56px] font-bold text-gray-900">Data to</span>
                        <img className="ml-2 h-[56px] mt-4  w-auto" src="./google.svg" alt="Google" />
                        <img className="ml-2 h-[56px] mt-4  w-auto" src="./workspace.svg" alt="Workspace" />
                    </div>

                    <span className="text-gray600 w-[50%] text-[20px] mt-2">
                        With the SuperMetrics Workspace add-on, access all your connected marketing and sales accounts directly in Google Sheets, Slides, and everywhere else.
                    </span>

                    <div className="flex gap-2 my-6">
                        <button className="text-white font-medium bg-blue500 p-4 px-5 rounded-lg flex gap-2 shadow-blue100"><span>Install Now</span> <img src="/link.svg" alt="" /></button>
                        <button className="font-medium  shadow-white100 p-4 px-5 rounded-lg border border-gray600">Learn More</button>

                    </div>

                </div>

                <div className="w-1/2">
                    <img src="/Hero.svg" className="cover w-full" alt="" />
                </div>


            </div>
        </main>
    )
}
