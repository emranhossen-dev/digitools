import bannerImage from '../assets/banner.png';

const Banner = () => (
  <div className="w-full bg-white">
    <div className="hero max-w-300 mx-auto h-190">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 w-full">
        <div className="flex-1 w-full flex justify-center">
          <img src={bannerImage} className="w-full max-w-md rounded-2xl shadow-xl" />
        </div>
        <div className="flex-1 space-y-6">
          <div className="badge bg-purple-100 text-purple-600 border-none px-4 py-3 rounded-full font-medium">New: AI-Powered Tools Available</div>
          <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">Supercharge Your Digital Workflow</h1>
          <p className="text-lg text-gray-600">Access premium AI tools, design assets, and templates in one place.</p>
          <div className="flex gap-4">
            <button className="btn bg-purple-600 text-white border-none rounded-full px-8">Explore Products</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Banner;