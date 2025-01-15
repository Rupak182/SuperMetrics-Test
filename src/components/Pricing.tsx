const priceDetails1 = {
    icon_url: "/heart.svg",
    type: "Free",
    desc: "To grow referrals and leads of business looking",
    price: "$0",
    btn_text: "Get Started For Free",
    tick_url: "/success_red.svg",
    payment_type: "month",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails2 = {
    icon_url: "/rocket.svg",
    type: "Starter",
    desc: "To grow referrals and leads of business looking",
    price: "$19",
    btn_text: "Get Starter",
    tick_url: "/success_blue.svg",
    payment_type: "month",
    features: ["Data Sources: Up to 10 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails3 = {
    icon_url: "luggage.svg",
    type: "Professional",
    desc: "To grow referrals and leads of business looking",
    price: "$39",
    btn_text: "Get Professional",
    tick_url: "/success_yellow.svg",
    payment_type: "month",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}

const priceDetails4 = {
    icon_url: "graph.svg",
    type: "Team",
    desc: "To grow referrals and leads of business looking",
    price: "$99",
    btn_text: "Get Team",
    tick_url: "/success_purple.svg",
    payment_type: "month",
    features: ["Data Sources: Up to 3 Accounts", "1 Workspace", "1 User", "Analytics Dashboard", "Google Add-on", "Reporting"]
}


const priceDetailsList = [
    priceDetails1, priceDetails2, priceDetails3, priceDetails4
]


export default function Pricing() {
    return (
        <div className="flex flex-col items-center justify-center gap-10 py-14 mt-10 px-20 border-y-2">
            <span className="font-semibold font-geist_mono text-base shadow-white100 p-2 px-3 rounded-lg border border-gray600">Pricing</span>
            <span className="font-semibold text-gray800 text-4xl  text-center">Flexible Pricing, built for growth</span>

            <div className="flex gap-4 p-5 ">
                {priceDetailsList.map((priceDetails) => (
                    <div key={priceDetails.btn_text} className="box border rounded-2xl flex flex-col p-4 gap-4">
                        <img className="w-[60px]" src={priceDetails.icon_url} alt="icon" />
                        <span className="text-gray900 font-bold text-xl">{priceDetails.type}</span>
                        <span className="text-gray-600  text-xl">{priceDetails.desc}</span>
                        <div className="flex gap-2 items-center">
                            <span className="text-gray900 text-3xl font-bold">{priceDetails.price}</span>
                            <span className="text-gray-600 ">{'/' + priceDetails.payment_type}</span>
                        </div>

                        <button className="border-blue500 border-2 font-semibold text-blue500 p-4 px-5 rounded-lg ">{priceDetails.btn_text}</button>
                        <span className="font-roboto font-semibold text-gray600 mt-3 text-lg">Features</span>
                        <div className="flex gap-4 flex-col">
                            {
                                priceDetails.features.map((feature) => (
                                    <div className="flex gap-2">
                                        <img src={priceDetails.tick_url} alt="tick" />
                                        <span className="text-gray-600">{feature}</span>
                                    </div>

                                ))
                            }
                        </div>


                    </div>
                ))}

            </div>
        </div>
    )
}
