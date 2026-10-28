'use client'
import React from 'react'

const pricingData = [
  {
    type: '2 BHK Apartments',
    area: '825',
    price: '₹ 79.99 Lacs*',
    desc: 'Thoughtfully designed 2 BHK residences with optimal space planning, modern kitchen, and private balcony.',
  },
  {
    type: '3 BHK Apartments',
    area: '1,285',
    price: 'Ask For Price',
    desc: 'Expansive 3 BHK luxury residences featuring generous living-dining areas, master suite, and cross-ventilation.',
  },
  {
    type: '4 BHK + Duplexes',
    area: '1,540',
    price: 'Ask For Price',
    desc: 'Exclusive 4 BHK & duplex residences offering panoramic township views, grand master suites, and premier luxury.',
  },
]

const Pricing = ({ setIsOpen }) => {
  return (
    <section id="pricing" className="w-full py-10 md:py-14 font-poppins overflow-hidden" style={{ background: '#F3F4F6' }}>
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-white">
            CONFIGURATION &amp; PRICE
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Apartment Options &amp; <span className="text-[#AF751C]">Special Launch Pricing</span>
          </h2>
          <div className="w-16 h-1 bg-[#AF751C] mx-auto mt-3 rounded-full" />
        </div>

        {/* ── MOBILE / SMALL DEVICE CARDS (Visible below md breakpoint) ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {pricingData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index * 100).toString()}
              className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#AF751C]/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden flex flex-col justify-between"
              style={{ borderTop: '4px solid #AF751C' }}
            >
              <div>
                {/* Top Header: Unit Type */}
                <div className="pb-4 border-b border-[#f1f5f9] mb-4">
                  <h3 className="text-[#111111] font-black text-[18px] sm:text-[20px] m-0">
                    {item.type}
                  </h3>
                </div>

                {/* Specs: Super Built-up Area */}
                <div className="mb-4 bg-gray-50 px-3.5 py-2.5 rounded-xl border border-gray-200 flex flex-col min-[340px]:flex-row min-[340px]:items-center justify-between gap-1">
                  <span className="text-gray-600 text-[11.5px] sm:text-xs font-bold uppercase tracking-wider">Super Built-up Area</span>
                  <strong className="text-[#111111] text-[13.5px] sm:text-[14px] font-extrabold">
                    {item.area === 'On Request' ? item.area : `${item.area} Sq.Ft.`}
                  </strong>
                </div>

                {/* Estimated Price Block */}
                <div className="mb-4">
                  <span className="text-[11.5px] text-[#AF751C] font-bold uppercase tracking-wider block mb-1">
                    PRICE START FROM
                  </span>
                  <div className="text-[#AF751C] font-black text-[24px] tracking-tight">
                    {item.price}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="w-full py-3.5 rounded-[50px] font-extrabold text-[15px] transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer"
                style={{
                  background: '#AF751C',
                  color: '#ffffff',
                  border: '2px solid #AF751C',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#915E12';
                  e.currentTarget.style.borderColor = '#915E12';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#AF751C';
                  e.currentTarget.style.borderColor = '#AF751C';
                }}
              >
                Get Full Price Sheet
              </button>
            </div>
          ))}
        </div>

        {/* ── DESKTOP TABLE (Visible on md and above) ── */}
        <div className="hidden md:block bg-white rounded-[16px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto border border-[#AF751C]/30" data-aos="fade-up">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#111111] text-white">
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-left whitespace-nowrap">Title</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Super Built-up Area</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Price</th>
                <th className="py-4 px-4 lg:px-6 font-bold text-[13px] tracking-wider uppercase border-b-0 text-center whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#222222] divide-y divide-[#f0f0f0]">
              {pricingData.map((item, index) => (
                <tr key={index} className="hover:bg-[#F0E9D8]/50 transition-colors duration-200">
                  <td className="py-5 px-4 lg:px-6 font-extrabold text-[16.5px] text-[#111111] text-left whitespace-nowrap">{item.type}</td>
                  <td className="py-5 px-4 lg:px-6 text-[15px] font-semibold text-[#495057] text-center whitespace-nowrap">{item.area === 'On Request' ? item.area : `${item.area} Sq.Ft.`}</td>
                  <td className="py-5 px-4 lg:px-6 font-black text-[17px] text-[#AF751C] text-center whitespace-nowrap">{item.price}</td>
                  <td className="py-5 px-4 lg:px-6 text-center whitespace-nowrap">
                    <button 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-[50px] font-extrabold text-[13.5px] transition-all duration-300 shadow-md cursor-pointer"
                      style={{
                        background: '#AF751C',
                        color: '#ffffff',
                        border: '2px solid #AF751C',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#915E12';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#915E12';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#AF751C';
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.borderColor = '#AF751C';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      Get Full Price Sheet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Pricing
