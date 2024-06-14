import homeLogo from '../assets/raja.jpg'
import { navLinks } from '../constants';
import '../App.css'

const Home = () => {
  return (
    <div className="mb-24 overflow-hidden">
      <div className="relative">
        <div className="w-screen h-[100vh] ">
          <img className="w-full h-full object-cover" src={homeLogo} alt="" />
        </div>
        <div className="absolute left-3 bottom-7 ">
          <div className="text-7xl font-bold">
            <p className="text-white  ">ONGC RAJAHMUNDRY ASSET</p>
            <p className="text-mainRed">Intranet</p>
          </div>
        </div>
        <div className="fixed top-2 bg-mainRed text-white w-[90%] py-4 rounded-full px-10 z-30 mx-24">
          <nav className="flex items-center justify-between">
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <a href={link.link} className="nav text-lg">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="flex gap-3 overflow-hidden">
              <div className='relative '>
                <button className="px-5 border-2 border-transparent btn py-2 hover:text-white rounded-full bg-white text-mainRed">
                  Feedback Portal
                </button>
              </div>
              <div className='relative'>
                <button className="px-5 border-2 border-transparent btn py-2 rounded-full bg-white text-mainRed">
                  Login
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home