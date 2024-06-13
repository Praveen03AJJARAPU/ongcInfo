import homeLogo from '../assets/home.jpeg'

const Home = () => {
  return (
    <div>
        <div className="relative">
          <img className="h-screen w-screen" src={homeLogo} alt="" />
          <div className="absolute left-3 bottom-7 ">
            <div className>
                <p className=' text-7xl text-white  font-bold'>ONGC RAJAHMUNDRY ASSET</p>
                <p className=' text-7xl text-red-600  font-bold'> Intranet</p>
            </div>
          </div>
          <div className='absolute top-2 left-2 right-2'>
            <nav className="flex items-center justify-between flex-wrap bg-nav-red p-6 rounded-[80px]">
                
                <div className="block lg:hidden left-5">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white hover:bg-blue-800/50">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                </div> 
                <div className="w-full block flex gap-5">
                    <div className="text-sm flex  gap-5 lg:flex-grow">
                        <a href="#" className=" block mt-4 text-2xl lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            Info
                        </a>
                        <a href="#" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            ONGC Intranet
                        </a>
                        <a href="#" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            ONGC Portals
                        </a>
                        <a href="#" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            Gallery
                        </a>
                        <a href="#" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            Holidays
                        </a>
                        <a href="#" className=" text-2xl block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:underline hover:decoration-blue-700 mr-4">
                            Cartridge Request
                        </a>
                    </div>
                    <div>
                        <a href="#" className=" text-2xl inline-block px-4 py-2 leading-none border rounded-[45px] text-[#E82828] border-white bg-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Feedback</a>
                    </div>
                    <div>
                        <a href="#" className=" text-2xl inline-block px-4 py-2 leading-none border rounded-[45px] text-[#E82828] border-white bg-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
                    </div>
                </div>
            </nav>
          </div>
        </div>
    </div>
  );
}

export default Home