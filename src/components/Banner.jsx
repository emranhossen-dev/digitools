import bannerImage from '../assets/banner.png';

const Banner = () => (
  <div className="w-full bg-white py-12">
    <div className="max-w-[1200px] mx-auto min-h-[500px] px-6 flex flex-col lg:flex-row items-center gap-12 w-full">
      <div className="flex-1 space-y-6 order-2 lg:order-1 text-left">
        <div className="badge bg-purple-50 text-purple-600 border border-purple-100 px-4 py-3.5 rounded-full font-semibold text-xs tracking-wide">
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-base lg:text-lg text-gray-500 font-normal leading-relaxed max-w-xl">
          Access premium AI tools, design assets, and templates in one place.
        </p>
        <div className="flex gap-4 pt-2">
          <button className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold rounded-full shadow-sm text-sm cursor-pointer transition-colors">
            Explore Products
          </button>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center order-1 lg:order-2">
        <img src={bannerImage} className="w-full max-w-lg rounded-2xl shadow-sm border border-gray-50" alt="Banner" />
      </div>
    </div>
  </div>
);

export default Banner;