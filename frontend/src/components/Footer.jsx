import logo from '../assets/logo.png'
import { footerLinks } from '../constants';
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-mainRed w-full py-16 footer relative">
      <div className="flex flex-wrap gap-10 justify-around ">
        <div className="text-white">
          <h1 className="mb-5">ONGC Portals</h1>
          <div className="flex md:flex-row flex-col gap-6 font-light text-sm">
            <span className="flex span flex-col gap-3">
              {footerLinks.slice(0, 4).map((link) => (
                <a>{link.text}</a>
              ))}
            </span>
            <span className="flex span flex-col gap-3">
              {footerLinks.slice(4, 7).map((link) => (
                <a>{link.text}</a>
              ))}
            </span>
          </div>
        </div>

        <div className="text-white">
          <h1 className="mb-5">Collectives</h1>
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 font-light text-sm">
            <span className="flex span flex-col gap-3">
              {footerLinks.slice(7, 11).map((link) => (
                <a>{link.text}</a>
              ))}
            </span>
            <span className="flex span flex-col gap-3">
              {footerLinks.slice(11, 12).map((link) => (
                <a>{link.text}</a>
              ))}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-white font-semibold">
          <img src={logo} alt="logo_img" className="w-[80px] h-[80px]" />
          <div>
            <p>ONGC</p>
            <p>Rajahmundry Asset</p>
            <p>Intranet</p>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-16 gap-3 justify-center text-white">
        <FaCopyright />
        <p >
          Designed by Infocom Services, Rajahmundry
        </p>
      </div>
    </div>
  );
}

export default Footer