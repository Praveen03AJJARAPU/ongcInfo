import { headerList, imgList } from '../constants';
import img from '../assets/on.jpg'
import logo from '../assets/logoo.png'
import { useEffect, useState } from 'react';

const Hero = () => {
  const [imgNum, setImgNum] = useState(0);

   useEffect(() => {
    const intervalId = setInterval(() => {
      setImgNum(prev => (prev >= imgList.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [imgList.length]);

  return (
    <div className="flex flex-col lg:flex-row gap-5 font-bold">
      <div className="flex-1 relative border-2">
        <img
          src={imgList[imgNum]?.image}
          className="w-full h-[550px] object-cover"
          alt="images"
        />
        <p className="absolute bottom-10 left-28 backdrop-blur-xl px-16 py-4 text-xl text-white">
          {imgList[imgNum]?.text}
        </p>
      </div>
      
        <div className="lg:w-[25%]">
          {headerList.map((item, id) => (
            <div
              key={id}
              className="text-red-500 text-center border-red-500 border-[1px] hover:bg-red-500 duration-150 hover:scale-105 active:scale-90 ease-linear hover:text-white rounded-md py-3 w-full px-5 mb-3"
            >
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
        </div>
        <div className="lg:w-[25%]">
          {headerList.map((item, id) => (
            <div
              key={id}
              className="text-center bg-blue-500 duration-150 ease-linear text-white rounded-md py-3 w-full px-5 border-[1px] border-transparent mb-3 relative"
            >
              <a href={item.link}>{item.text}</a>
              <img
                src={logo}
                alt="icon"
                className="absolute w-[40px] right-5 top-1"
              />
            </div>
          ))}
        </div>
      </div>
   
  );
}

export default Hero