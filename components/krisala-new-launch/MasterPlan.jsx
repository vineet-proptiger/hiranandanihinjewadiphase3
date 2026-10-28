'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const MasterPlan = ({ setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('master')

  return (
    <section id="masterplan" className="w-full py-10 md:py-14 font-poppins bg-white">
      <div className="container mx-auto px-4 sm:px-6" style={{ maxWidth: '1200px' }}>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-white">
            MASTER PLAN &amp; FLOOR PLANS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            Site &amp; <span className="text-[#AF751C]">Floor Plans</span>
          </h2>
          <div className="w-16 h-1 bg-[#AF751C] mx-auto mt-3 rounded-full" />
        </div>

        {/* Interactive Switch Buttons */}
        <div className="flex items-center justify-center mb-10" data-aos="fade-up">
          <div className="inline-flex p-1.5 rounded-full bg-gray-100 border border-gray-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('master')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'master'
                  ? 'bg-[#AF751C] text-white font-extrabold shadow-md'
                  : 'text-[#495057] hover:text-[#AF751C]'
              }`}
            >
              <i className="fa-solid fa-map-location-dot text-xs" />
              <span>Master Plan</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('floor')}
              className={`flex items-center gap-2 px-6 sm:px-8 py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] font-bold transition-all duration-300 cursor-pointer ${
                activeTab === 'floor'
                  ? 'bg-[#AF751C] text-white font-extrabold shadow-md'
                  : 'text-[#495057] hover:text-[#AF751C]'
              }`}
            >
              <i className="fa-solid fa-layer-group text-xs" />
              <span>Floor Plans</span>
            </button>
          </div>
        </div>

        {/* ── TAB CONTENT: MASTER PLAN ── */}
        {activeTab === 'master' && (
          <div className="max-w-[920px] mx-auto" data-aos="fade-up">
            <div
              className="bg-white rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-200 overflow-hidden group cursor-pointer"
              onClick={() => setIsOpen && setIsOpen(true)}
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gray-50 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/krisala-new-launch/images/masterplan/masterplan.webp"
                  alt="Hiranandani Hinjewadi Township Master Plan"
                  fill
                  className="object-contain filter blur-[6px] transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
                <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-2.5 transition-colors group-hover:bg-black/35">
                  <div className="w-12 h-12 rounded-full bg-white text-[#111111] flex items-center justify-center text-lg shadow-lg">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <span className="bg-white text-[#111111] px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-2 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <i className="fa-solid fa-file-arrow-down text-[#AF751C] group-hover:text-white" />
                    Click to Unlock High-Res Master Plan
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB CONTENT: FLOOR PLANS ── */}
        {activeTab === 'floor' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto" data-aos="fade-up">
            
            {[
              { label: '2 BHK Residence', size: '825 Sq.Ft.', img: '/krisala-new-launch/images/masterplan/2bhk.webp' },
              { label: '3 BHK Residence', size: '1,285 Sq.Ft.', img: '/krisala-new-launch/images/masterplan/3bhk.webp' },
              { label: '4 BHK & Duplexes', size: '1,540 Sq.Ft.', img: '/krisala-new-launch/images/masterplan/4bhk.webp' },
            ].map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[22px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden border border-[#f3f4f6] cursor-pointer hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:border-[#AF751C]/40 transition-all duration-300 group flex flex-col justify-between"
                onClick={() => setIsOpen && setIsOpen(true)}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-50 p-6 flex items-center justify-center border-b border-[#f3f4f6] overflow-hidden">
                  <Image
                    src={plan.img}
                    alt={plan.label + ' Floor Plan'}
                    fill
                    className="object-contain filter blur-[6px] transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center gap-2 transition-colors group-hover:bg-black/30">
                    <div className="w-10 h-10 rounded-full bg-white text-[#111111] flex items-center justify-center text-sm shadow-md">
                      <i className="fa-solid fa-lock" />
                    </div>
                    <span className="bg-white text-[#111111] px-4 py-2 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      <i className="fa-solid fa-eye text-[#AF751C] group-hover:text-white" />
                      Unlock Floor Plan
                    </span>
                  </div>
                </div>
                <div className="py-5 px-4 text-center">
                  <h4 className="text-[#111111] font-extrabold text-[20px] sm:text-[22px] m-0">
                    {plan.label}
                  </h4>
                  <p className="text-[#6c757d] text-[14px] font-semibold mt-1 m-0">
                    Size: {plan.size}
                  </p>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default MasterPlan
