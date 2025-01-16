import { useState } from "react"
import type { priceDetailsType } from "./PricingBox"
import PricingBox from "./PricingBox"

const priceDetails1:priceDetailsType = {
    icon_url: "/heart.svg",
    type: "Free",
    desc: "To grow referrals and leads of business looking",
    price: 0,
    btn_text: "Get Started For Free",
    tick_url: "/success_red.svg",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails2:priceDetailsType = {
    icon_url: "/rocket.svg",
    type: "Starter",
    desc: "To grow referrals and leads of business looking",
    price: 19,
    btn_text: "Get Starter",
    tick_url: "/success_blue.svg",
    features: ["Data Sources: Up to 10 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails3:priceDetailsType = {
    icon_url: "luggage.svg",
    type: "Professional",
    desc: "To grow referrals and leads of business looking",
    price: 39,
    btn_text: "Get Professional",
    tick_url: "/success_yellow.svg",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails4:priceDetailsType = {
    icon_url: "graph.svg",
    type: "Team",
    desc: "To grow referrals and leads of business looking",
    price: 99,
    btn_text: "Get Team",
    tick_url: "/success_purple.svg",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}


const priceDetailsList:priceDetailsType[] = [
    priceDetails1, priceDetails2, priceDetails3, priceDetails4
]


export default function Pricing() {
    const [paymentType,setPaymentType] = useState(0);
    return (
        <div  className="flex flex-col items-center justify-center gap-10 py-14 mt-10 xl:px-20 px-10 border-y-2">
            <span id="pricing" className="font-semibold font-geist_mono text-base shadow-white200 p-2 px-3 rounded-2xl border border-gray600">Pricing</span>
            <span className="font-semibold text-gray800 text-4xl  text-center">Flexible Pricing, built for growth</span>

            <div className="p-1 px-2 bg-gray100 flex gap-1 rounded-2xl">
                <button onClick={()=>setPaymentType(0)} className={`p-1 px-2  ${paymentType ===0?"text-blue500  bg-white":"text-gray600"}  rounded-2xl font-semibold `}>Monthly</button>
                <button onClick={()=>setPaymentType(1)} className={`p-1 px-3 ${paymentType ===1?"text-blue500  bg-white":"text-gray600"}  rounded-2xl font-semibold flex gap-2`}>
                    <span>Yearly</span>
                    <span className="bg-red200 text-red400 px-1 py-[1px] rounded-2xl text-sm">save 20%</span>
                </button>

            </div>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-4 lg:p-5 ">
                {priceDetailsList.map((priceDetails) => (
                    <PricingBox key={priceDetails.desc} icon_url={priceDetails.icon_url} type={priceDetails.type} desc={priceDetails.desc} 
                    price={priceDetails.price} btn_text={priceDetails.btn_text} tick_url={priceDetails.tick_url}
                    payment_type={paymentType} features={priceDetails.features}
                     />
                    
                ))}

            </div>
        </div>
    )
}
