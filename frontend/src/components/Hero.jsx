import { headerList } from '../constants';
import img from '../assets/on.jpg'

const Hero = () => {
  return (
    <div className="flex gap-5 font-bold">
      <div className="flex-1 border-2">
        <img
          src={img}
          alt="hero-pic-1"
          className="w-full h-full object-cover"
        />
      </div>
      
        <div className="w-[25%]">
          {headerList.map((item, id) => (
            <div
              key={id}
              className="text-red-500 text-center border-red-500 border-[1px] hover:bg-red-500 duration-150 hover:scale-105 active:scale-90 ease-linear hover:text-white rounded-md py-3 w-full px-5 mb-3"
            >
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
        </div>
        <div className="w-[25%]">
          {headerList.map((item, id) => (
            <div
              key={id}
              className="text-center bg-blue-500 duration-150 ease-linear text-white rounded-md py-3 w-full px-5 border-[1px] border-transparent mb-3"
            >
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Hero