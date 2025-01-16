import React from 'react'

export default function Footer() {

    const product_items = [
        "Integrations",
        "Analytics",
        "Workspace",
        "Embed Charts",
        "DataStudio",
        "Google add-on",
        "Pricing"
    ]

    const resource_items = [
        "Blog",
        "Changelog",
        "Affiliate Program",
        "Knowledge base",
        "Contact us"
    ]

    const legal_items = [
        "Privacy policy",
        "Terms & Conditions"
    ]

    return (
        <div className=' border-t-2 flex flex-col  items-center justify-center gap-10 py-14 pb-4 mt-10 px-20  bg-[#F5F7FA]'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full border-b-2 py-10'>
                <div>
                    <a href="/" className="text-gray900 font-bold ">SuperMetrics.com</a>
                    <div className='flex gap-4 mt-4'>
                        <a href=""><img src="x.svg" alt="x" /></a>
                        <a href=""><img src="linkedin.svg" alt="linkedin" /></a>
                        <a href=""><img src="insta.svg" alt="instagram" /></a>
                        <a href=""><img src="fb.svg" alt="facebook" /></a>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <span className='text-gray500 text-sm'>PRODUCTS</span>
                    <span className='h-[1px]  my-2 text-gray-200 font-geist_mono '>{'-'.repeat(35)}</span>
                    <div className='flex flex-col gap-2 mt-4 '>
                        {
                            product_items.map((item) => (
                                <span className='text-gray700 font-medium'>{item}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='text-gray500 font-geist_mono text-sm'>RESOURCES</span>
                    <span className='h-[1px]  my-2 text-gray-200'>{'-'.repeat(35)}</span>
                    <div className='flex flex-col gap-2 mt-4 '>
                        {
                            resource_items.map((item) => (
                                <span className='text-gray700 font-medium'>{item}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col'>
                    <span className='text-gray500 font-geist_mono text-sm'>Legal</span>
                    <span className='h-[1px]  my-2 text-gray-200'>{'-'.repeat(35)}</span>
                    <div className='flex flex-col gap-2 mt-4 '>
                        {
                            legal_items.map((item) => (
                                <span className='text-gray700 font-medium'>{item}</span>
                            ))
                        }
                    </div>
                    <span className='h-[1px]  my-6 text-gray-200'>{'-'.repeat(35)}</span>
                    <button className="flex gap-2 border-2 rounded-xl p-2 px-3 bg-white items-center mt-4 w-fit ">
                        <img src="/google_sm.svg" alt="google" />
                        <span className="text-blue500  font-medium">Google add-on</span>
                        <img src="/link2.svg" alt="link" />
                    </button>
                    <div>
                    </div>
                </div>
            </div>

            <div className='p-5 pb-0 flex flex-col items-center justify-center gap-10'>
                    <span className='text-gray500'>Copyright 2025 &copy; SuperMetrics.com</span>
                    <img src="/Footer Text.svg" alt="footer_text" />
            </div>
        </div>
    )
}
