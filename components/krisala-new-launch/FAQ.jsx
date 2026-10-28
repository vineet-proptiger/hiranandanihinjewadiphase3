'use client'
import React, { useState } from 'react'

const faqData = [
  {
    question: 'What configurations are available at Hiranandani Hinjewadi Township?',
    answer: (
      <>
        Hiranandani Hinjewadi Township offers thoughtfully planned <strong className="font-semibold text-[#111111]">2, 3 &amp; 4 BHK luxury residences and duplexes</strong> designed with modern architecture, spacious living and dining areas, large private balconies, and optimal natural ventilation.
      </>
    ),
  },
  {
    question: 'What is the starting price of Hiranandani Hinjewadi Township?',
    answer: (
      <>
        Starting price begins from <strong className="font-semibold text-[#111111]">₹79.99 Lacs*</strong> for 2 BHK apartments, with premium 3 BHK and 4 BHK + Duplexes available with pricing on request. Exclusive new launch benefits and priority unit selection are available for early inquiries.
      </>
    ),
  },
  {
    question: 'How large is the project and what is the development structure?',
    answer:
      'Hiranandani Hinjewadi Township is an iconic integrated township planned across sprawling 105 acres in Hinjewadi Phase 3, Pune, featuring premium high-rise towers with extensive landscaped greens and world-class infrastructure.',
  },
  {
    question: 'Where exactly is Hiranandani Hinjewadi Township located?',
    answer: (
      <>
        The project is strategically located at <strong className="font-semibold text-[#111111]">Hinjewadi Phase 3 Krisala Everland, Pune</strong> along the high-growth IT and growth corridor, close to Rajiv Gandhi Infotech Park, proposed metro, and proposed Ring Road.
      </>
    ),
  },
  {
    question: 'What lifestyle amenities are provided at the project?',
    answer:
      'Planned lifestyle facilities include an expansive clubhouse, swimming pool, state-of-the-art fitness areas, multipurpose sports courts, 40-acre Della resort collaboration, TERI eco-features, children’s play areas, and lush landscaped open spaces.',
  },
]

const FAQ = () => {
  // First item open by default, set to index 0
  const [openIdx, setOpenIdx] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIdx(prev => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="w-full py-10 md:py-14 bg-white font-poppins overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1280px]">
        
        {/* Section Title */}
        <div className="text-center max-w-[800px] mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-[#F0E9D8]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Clear Answers To Your <span className="text-[#AF751C]">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-[#AF751C] mx-auto mt-3 rounded-full" />
        </div>

        {/* Accordion Container */}
        <div 
          className="max-w-[960px] mx-auto border border-[#dee2e6] rounded-[12px] sm:rounded-[14px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] divide-y divide-[#dee2e6]"
          data-aos="fade-up"
        >
          {faqData.map((item, index) => {
            const isOpen = openIdx === index

            return (
              <div key={index} className="bg-white">
                {/* Accordion Button */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`w-full py-4 px-5 sm:py-5 sm:px-7 flex items-center justify-between gap-4 text-left text-[15.5px] sm:text-[17px] transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#E8DFCB] text-[#111111] font-bold shadow-inner'
                      : 'bg-white text-[#212529] font-medium hover:bg-[#fafafa]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  
                  {/* Chevron Icon */}
                  <span className={`text-current transition-transform duration-300 transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="bg-white px-5 py-5 sm:px-7 sm:py-6 text-[#343a40] text-[15px] sm:text-[15.5px] leading-[1.75] border-t border-[#dee2e6]/80 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
