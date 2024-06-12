import Hero from './Hero';
import SlidingText from './SlidingText'
const Header = () => {
  return (
    <div className="mx-2">
      <SlidingText
        mainText={"Asset Brochure"}
        linkText={"Click here to download Rjy Asset Brochure 2024"}
        link={"#"}
      />
      <div className='flex items-center gap-7 mb-3 text-sm md:text-lg flex-wrap lg:flex-nowrap  font-bold '>
        <p className='bg-blue-500 text-white rounded-lg px-10 py-3'>Production(2024-06-12)/Target</p>
        <p className='bg-red-500 text-white rounded-lg px-10 py-3' >Production(2024-06-12)/Target</p>
        <p className='bg-green-500 text-white rounded-lg px-10 py-3' >Production(2024-06-12)/Target</p>
        <p className='bg-yellow-500 text-white rounded-lg px-10 py-3' >Production(2024-06-12)/Target</p>
      </div>
      <Hero />
    </div>
  );
}

export default Header