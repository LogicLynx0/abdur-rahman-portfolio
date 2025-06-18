import React from 'react'

const FaqSection = ({faqData}: any) => {
  return (
    <div>
        <section className="py-20 bg-slate-800/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-300">Everything you need to know</p>
                  </div>
                  
                  <div className="space-y-6">
                    {faqData.map((faq, index) => (
                      <div key={index} className="bg-slate-800/80 rounded-lg p-6 hover:bg-slate-700/80 transition-colors">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    </div>
  )
}

export default FaqSection