import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { navitems } from '../constants';
import { VscTriangleRight } from "react-icons/vsc";
const Nav = () => {
  const [close,setClose] = useState(false);
  const [subClose, setsubClose] = useState({
    id: 2,
    isClosed: true,
  })

  return (
    <div>
      <div className="p-4 bg-zinc-700 flex items-center justify-between ">
        <div>
          <p className="text-black font-bold text-md md:text-2xl">
            12/06/2024 (Wednesday)
          </p>
        </div>
        <div className="flex items-center gap-1 md:gap-3 ">
          <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">
            Feedback
          </p>
          <p className="bg-red-600 py-2 px-2 w-max items-center rounded-md text-white">
            Admin Login
          </p>
        </div>
      </div>

      <div className="bg-zinc-300 justify-between items-center flex gap-11">
        <div className="flex">
          <img className="h-[120px] w-[120px] px-3 py-3" src={Logo} alt="" />
          <div className="font-bold text-xl items-center py-7 ">
            <p className="text-blue-800">RAJAHMUNDRY ASSET INTRANET </p>
            <p className="text-green-800">राजमुंदरी एसेट इंट्रानेट</p>{" "}
          </div>
        </div>
        {close ? (
          <div className="m-5" onClick={() => setClose((prev) => !prev)}>
            <IoMenu size={40} />
          </div>
        ) : (
          <div className="fixed right-0 z-10 w-[350px] md:w-[500px] bg-white h-[100vh] top-0">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center">
                <img
                  className="h-[80px] w-[80 px] md:h-[75px] md:w-[75px] px-3 py-3"
                  src={Logo}
                  alt=""
                />
                <div className="font-bold text-sm md:text-lg items-center  py-7 ">
                  <p className="text-blue-800">RAJAHMUNDRY ASSET INTRANET </p>
                  <p className="text-green-800">
                    राजमुंदरी एसेट इंट्रानेट
                  </p>{" "}
                </div>
              </div>
              <div onClick={() => setClose((prev) => !prev)} className="flex items-center justify-between">
                <RxCross2 size={40} />
              </div>
            </div>
            <div className="text-lg">
              {/* {navitems.map((item, id) => (
                <span> */}
              {/* {item.List.length > 0 ? (
                    <span className="flex gap-1 items-center">
                      <p>{item.text}</p>
                      <VscTriangleRight size={12} />
                      {subClose.id == id && subClose.isClosed == true ? ""
                       : (
                        <span className=''>{item.List.map((li) => <p>{li}</p>)}</span>
                      )}
                    </span>
                  ) : (
                    <p>{item.text}</p>
                  )} */}
              {/* {item.List.length > 0 &&
                    !(subClose.id === id && subClose.isClosed === true) && (
                      <div className="sublist">
                        {item.List.map((li, index) => (
                          <p key={index}>{li}</p>
                        ))}
                      </div>
                    )}
                </span>
              ))} */}
              {navitems.map((item, id) => (
                <span key={id}>
                  {" "}
                  {/* Add a unique key */}
                  <div className="flex gap-1 items-center">
                    <p>{item.text}</p>
                    <VscTriangleRight size={12} />
                    {item.List.length > 0 &&
                      !(subClose.id === id && subClose.isClosed === true) && (
                        <div className="sublist">
                          {" "}
                          
                          {item.List.map((li, index) => (
                            <p key={index}>{li}</p>
                          ))}
                        </div>
                      )}
                  </div>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav