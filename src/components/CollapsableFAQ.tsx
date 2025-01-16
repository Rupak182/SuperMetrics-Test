import { motion } from "framer-motion";
import { useState } from "react"
import type { faqsType } from "./FAQ";


const CollapsableFAQ = ({question,answer}:faqsType
) => {
    const[isOpen,setIsOpen] = useState(false);
  return (
    <button onClick={()=>setIsOpen((prev)=>!prev)} className="collapsible p-5 border-b-2 xl:w-1/2 w-full mx-auto flex flex-col justify-start gap-4 ">
        <div className="header flex items-center justify-between w-full ">
            <span className="text-gray-800 font-medium">{question}</span>
            <img src={!isOpen ? "/plus.svg" : "/minus.svg"} 
                    className={`transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>

        {
            isOpen &&(
                <motion.div className="content text-start text-gray-600"
                initial={{height:0, opacity:0}}
                animate={{height:isOpen?"auto":0, opacity:isOpen?1:0}}
                transition={{duration:0.3}}
                >
                    {answer}
                </motion.div>
            )
        }
    </button>
  )
}

export default CollapsableFAQ
