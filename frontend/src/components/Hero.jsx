import { headerList } from '../constants';
import img from '../assets/on.jpg'

const Hero = () => {
  return (
    <div className='flex'>
      <div className='flex-1 border-2'>
        <img src={img} alt="" />
      </div>
      <div className='max-w-60'>
        {headerList.map((item, id) => (
          <div
            key={id}
            className="text-red-500 border-red-500 border-2 mb-1 w-max"
          >
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>
      <div>
        {headerList.map((item, id) => (
          <div
            key={id}
            className="text-red-500 border-red-500 border-2 mb-1 w-max"
          >
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero