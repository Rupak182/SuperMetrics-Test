
export default function Bottom() {

    const task1 = {
        img_url: "/paint.png",
        text: "Add Styling"
    }

    
    const task2 = {
        img_url: "/success.svg",
        text: "Sync Data"
    }
    
    const task3 = {
        img_url: "/icons.svg",
        text: "Integrations"
    }
    const task4 = {
        img_url: "/google_sm.svg",
        text: "Google add-on"
    }
    
    const task5 = {
        img_url: "/page.png",
        text: "Report"
    }

    const task6 = {
        img_url: "/bars.png",
        text: "Analytics"
    }

    const taskList = [
        task1,task2,task3,task4,task5,task6
    ]

    return (
        <div className="">
            <div className="flex lg:flex-row flex-col  border-t-2 items-center justify-center gap-10 py-14 mt-10 px-20  bg-gradient-to-b from-[#F5F7FA] to-white">
                <div className="text flex flex-col gap-8">
                    <span className="text-4xl font-semibold  text-gray-800">Access all your marketing data without leaving Google Workspace
                    </span>
                    <button className="w-fit  text-white font-medium bg-blue500 p-4 px-5 rounded-lg flex gap-2 shadow-blue100"><span>Install Now</span> <img src="/link.svg" alt="" /></button>
                </div>

                <div className=" ">
                    <img className="" src="/mac.svg" alt="picture" />
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center p-5 my-10 py-10 gap-4">
                {
                    taskList.map((task)=>(
                        <div className="flex gap-2 border-2 rounded-2xl p-1 px-2 items-center ">
                            <img src={task.img_url} alt={task.img_url} />
                            <span className="text-gray600  font-medium">{task.text}</span>
                        </div>
                    ))
                }
            </div >
        </div>


    )
}
