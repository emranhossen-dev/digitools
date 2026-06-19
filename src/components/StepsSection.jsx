const StepsSection = () => {
  return (
    <section className="w-full bg-[#F9FAFB] flex items-center justify-center" style={{ height: '762px' }}>
      <div className="w-full px-6 flex flex-col items-center justify-center" style={{ maxWidth: '1200px' }}>
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 text-sm font-normal">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col items-center text-center h-[340px] justify-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              01
            </span>
            <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Create Account
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[240px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col items-center text-center h-[340px] justify-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              02
            </span>
            <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Choose Products
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[240px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm relative flex flex-col items-center text-center h-[340px] justify-center">
            <span className="absolute top-4 right-4 bg-[#7C3AED] text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center">
              03
            </span>
            <div className="w-20 h-20 rounded-full bg-[#F3E8FF] flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.93 14.93 0 00-3.07 10.16V21.5h-.008a2.25 2.25 0 01-1.583-.66l-1.06-1.06a2.25 2.25 0 01-.66-1.583v-.009A14.93 14.93 0 0015.61 14.37z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Start Creating
            </h3>
            <p className="text-gray-400 text-[13px] leading-relaxed max-w-[240px]">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StepsSection;