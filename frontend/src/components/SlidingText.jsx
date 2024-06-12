import { useEffect, useState } from 'react';
import './component.css'

const SlidingText = ({mainText, linkText, link}) => {
    // const [date, setDate] = useState({
    //     nDate: 0,
    //     month: 0,
    //     year: 0,
    //     day: 'Sunday',
    // });
    // const map = ['Monday', 'TuesDay', 'WednesDay']
    // useEffect(() => {
    //     var time = new Date();
    //     setDate({day: time.getDay(), })
    // },[])
  return (
    <div className="logos mx-10">
      <div className="animate absolute">
        <div className='flex items-center text-xl font-bold gap-5'>
          <p className='bg-green-800 text-white px-6 py-2 rounded-lg'>{mainText}</p>
          <a className='underline' href={link}>{linkText}</a>
        </div>
      </div>
    </div>
  );
}

export default SlidingText