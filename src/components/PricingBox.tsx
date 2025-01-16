
export type priceDetailsType = {
    icon_url: string
    type: string
    desc: string
    price: number
    btn_text: string
    tick_url: string
    payment_type?:number  // 0 for monthly and 1 for yearly
    features: string[]
}



export default function PricingBox({icon_url,type,desc,price,btn_text,tick_url,payment_type,features}:priceDetailsType) {
    return (
        <div key={btn_text} className={`box border ${type==="Starter" &&"border-t-[#39A3F7] border-t-8"} rounded-2xl flex flex-col p-4 hover:shadow-md transition-transform ease-out  hover:-translate-y-1  gap-4 ${type === "Starter" && "bg-gradient-to-b from-[rgba(27,145,240,0.1)] to-[#ffffff]"}`}>
            {
                type === "Starter" ?
                    <div className="flex justify-between w-full items-center">
                        <img className="w-[60px]" src={icon_url} alt="icon" />
                        <span className="border-blue500 border-2 font-medium h-fit text-xs bg-gradient-to-b from-[#39A3F7] to-[#3B8BCB] text-white p-1 px-2  rounded-3xl ">Most Popular</span>
                    </div> :
                    <img className="w-[60px]" src={icon_url} alt="icon" />

            }
            <span className="text-gray900 font-bold text-xl">{type}</span>
            <span className="text-gray-600  text-sm">{desc}</span>
            <div className="flex gap-2 items-center">
                <span className="text-gray900 text-3xl font-bold">${(payment_type==0?price:Math.floor(price*12*0.8))}</span>
                <span className="text-gray-600 ">{'/' + (payment_type ==0?"month":"year") }</span>
            </div>
            {
                type != "Starter" ?
                    <button className="border-blue500 border-2 font-semibold text-blue500 p-4 px-5 rounded-lg ">{btn_text}</button> :
                    <button className="border-blue500  font-semibold text-white bg-blue500 p-4 px-5 rounded-lg ">{btn_text}</button>
            }

            <span className="font-roboto font-semibold text-gray600 mt-3 text-lg">Features</span>
            <div className="flex gap-4 flex-col ">
                {
                    features.map((feature) => (
                        <div className="flex gap-2">
                            <img src={tick_url} alt="tick" />
                            <span className="text-gray-600">{feature}</span>
                        </div>

                    ))
                }
            </div>


        </div>
    )
}
