import CollapsableFAQ from "./CollapsableFAQ"

export type faqsType ={
  question:string
  answer:string
}

export default function FAQ() {

    const faq1:faqsType={ question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }
    const faq2:faqsType={ question: "Can I change my plan later?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }
    const faq3:faqsType={ question: "What is your cancellation policy?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }
    const faq4:faqsType={ question: "How does billing work?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }
    const faq5:faqsType={ question: "How do I change my account email?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }

  const faqs:faqsType[] =[
      faq1,faq2,faq3,faq4,faq5
  ]


  return (
    <div className="flex flex-col items-center justify-center gap-10 py-14 mt-10 px-20 border-t-2">
      <span className="font-semibold font-geist_mono text-base shadow-white200 p-2 px-3 rounded-2xl border border-gray600">FAQ’s</span>
      <span className="font-semibold text-gray800 text-4xl  text-center">Frequently asked questions</span>

      {
        faqs.map((faq)=>(
          <CollapsableFAQ  question={faq.question} answer={faq.answer}/>
        ))
      }
    </div>
  )
}
