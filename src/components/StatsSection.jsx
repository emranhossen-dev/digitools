const StatsSection = () => (
  <div className="w-full bg-[#7C3AED] py-14">
    <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between items-center text-center text-white px-6 gap-8 md:gap-4">
      <div className="flex-1">
        <div className="text-4xl lg:text-5xl font-extrabold">50K+</div>
        <div className="mt-2 text-sm text-purple-100 font-medium">Active Users</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-white/20"></div>
      <div className="flex-1">
        <div className="text-4xl lg:text-5xl font-extrabold">200+</div>
        <div className="mt-2 text-sm text-purple-100 font-medium">Premium Tools</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-white/20"></div>
      <div className="flex-1">
        <div className="text-4xl lg:text-5xl font-extrabold">4.9</div>
        <div className="mt-2 text-sm text-purple-100 font-medium">Rating</div>
      </div>
    </div>
  </div>
);

export default StatsSection;