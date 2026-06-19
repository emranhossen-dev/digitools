const PricingSection = () => {
  return (
    <section className="w-full bg-[#FFFFFF] flex items-center justify-center py-16 lg:py-0 lg:h-207.5">
      <div className="w-full px-6 flex flex-col items-center justify-center" style={{ maxWidth: '1200px' }}>
        
        <div className="text-center mb-16 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm font-normal">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 w-full items-stretch">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-130">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
              <p className="text-gray-400 text-[13px] mb-6">Perfect for getting started</p>
              
              <div className="mb-6 flex items-baseline gap-0.5">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400 text-sm">/Month</span>
              </div>

              <ul className="space-y-3.5">
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Access to 10 free tools</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Basic templates</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Community support</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>1 project per month</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-semibold text-sm shadow-sm transition-colors duration-200 cursor-pointer mt-6 lg:mt-0">
              Get Started Free
            </button>
          </div>

          <div className="bg-[#7C3AED] rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between h-135 relative lg:-mt-2 border border-[#7C3AED]">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FEF3C7] text-[#D97706] text-[10px] font-bold px-3 py-1 rounded-full tracking-wide whitespace-nowrap shadow-sm">
              Most Popular
            </span>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
              <p className="text-purple-200 text-[13px] mb-6">Best for professionals</p>
              
              <div className="mb-6 flex items-baseline gap-0.5">
                <span className="text-4xl font-bold text-white">$29</span>
                <span className="text-purple-200 text-sm">/Month</span>
              </div>

              <ul className="space-y-3.5">
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Access to all premium tools</span>
                </li>
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Unlimited templates</span>
                </li>
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Priority support</span>
                </li>
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Unlimited projects</span>
                </li>
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Cloud sync</span>
                </li>
                <li className="text-[13px] text-white flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-white mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Advanced analytics</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-3 bg-white hover:bg-gray-50 text-[#7C3AED] rounded-xl font-semibold text-sm shadow-sm transition-colors duration-200 cursor-pointer mt-6 lg:mt-0">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between h-130">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h3>
              <p className="text-gray-400 text-[13px] mb-6">For teams and businesses</p>
              
              <div className="mb-6 flex items-baseline gap-0.5">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-400 text-sm">/Month</span>
              </div>

              <ul className="space-y-3.5">
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Everything in Pro</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Team collaboration</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Custom integrations</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Dedicated support</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>SLA guarantee</span>
                </li>
                <li className="text-[13px] text-gray-500 flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Custom branding</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-3 bg-[#7C3AED] hover:bg-[#6D28D9] text-white rounded-xl font-semibold text-sm shadow-sm transition-colors duration-200 cursor-pointer mt-6 lg:mt-0">
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;