import '../App.css'
import img1 from '../assets/stories/kohli.jpg'
import img2 from '../assets/stories/messiah.jpg'
import img3 from '../assets/stories/nike.jpg'
import img4 from '../assets/stories/ronny.jpg'

const Stories = () => {
  return (
    <div className="mb-24 mx-10">
      <h1 className="text-7xl mb-6">Stories</h1>
      <div className="grid">
        <div className="pic relative">
          <img src={img1} alt="" />
          <div className="absolute w-full bottom-0">
            <div className="w-full p-5 h-full bg-white">
              <h1 className="text-3xl mb-5 text-mainRed">Missed call</h1>
              <p>
                Kohli misses out the calls for the important matches as he lost
                the grace over the opening group matches. Will kohli dropped
                back to the no 3 in blue
              </p>
            </div>
          </div>
        </div>
        <div className="pic relative">
          <img src={img1} alt="" />
          <div className="absolute bottom-0">
            <div className="w-full p-5 h-full bg-white">
              <h1 className="text-3xl mb-5 text-mainRed">Missed call</h1>
              <p>
                Kohli misses out the calls for the important matches as he lost
                the grace over the opening group matches. Will kohli dropped
                back to the no 3 in blue
              </p>
            </div>
          </div>
        </div>
        <div className="pic relative">
          <img src={img1} alt="" />
          <div className="absolute w-[100%] bottom-0">
            <div className="w-full p-1 h-full bg-white">
              <h1 className="text-xl mb-1 text-mainRed">Missed call</h1>
              <p className='text-xs'>
                Kohli misses out the calls for the important matches as he lost
                the grace over the opening group matches. Will kohli dropped
                back to no 3 in blue
              </p>
            </div>
          </div>
        </div>
        <div className="pic relative">
          <img src={img1} alt="" />
          <div className="absolute bottom-0">
            <div className="w-full p-1 h-full bg-white">
              <h1 className="text-xl mb-1 text-mainRed">Missed call</h1>
              <p className='text-xs'>
                Kohli misses out the calls for the important matches as he lost
                the grace over the opening group matches. Will kohli dropped
                back to the no 3 in blue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// type ? pas : text
// [seen, setSeen] false
//  seen ? type == pas : text
// .... odfofdof
// div seen ? <closedEye> : <openEye>
export default Stories