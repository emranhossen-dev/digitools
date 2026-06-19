const CTASection = () => {
  return (
    <section className="w-full bg-[#7C3AED] flex items-center justify-center py-24 text-center text-white">
      <div className="w-full px-6 flex flex-col items-center justify-center" style={{ maxWidth: '1200px' }}>
        
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        
        <p className="text-purple-100 text-sm font-normal max-w-xl leading-relaxed mb-8">
          Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <button className="px-6 py-3 bg-white text-[#7C3AED] rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors cursor-pointer">
            Explore Products
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors cursor-pointer">
            View Pricing
          </button>
        </div>

        <p className="text-purple-200 text-xs font-normal">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </section>
  );
};

export default CTASection;