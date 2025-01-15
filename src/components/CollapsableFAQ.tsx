import { useState } from "react"



const CollapsableFAQ = ({question,answer}:{
    question:string,
    answer:string
}

) => {
    const[isOpen,setIsOpen] = useState(false);
  return (
    <button onClick={()=>setIsOpen((prev)=>!prev)} className="collapsible p-5 border-b-2 w-1/2 mx-auto flex flex-col justify-start gap-4 ">
        <div className="header flex items-center justify-between w-full ">
            <span className="text-gray-800 font-medium">{question}</span>
            {!isOpen ?<img src="/plus.svg" alt="plus" />:<img src="/minus.svg" alt="minus" /> }
        </div>

        {
            isOpen &&(
                <div className="content text-start text-gray-600">
                    {answer}
                </div>
            )
        }
    </button>
  )
}

export default CollapsableFAQ
