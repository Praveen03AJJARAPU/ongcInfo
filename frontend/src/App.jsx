import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import { FaCopyright } from "react-icons/fa";

function App() {
  

  return (
    <div className='font-osw'>
      <Nav />
      <Header />
      <div className='flex py-2 items-center text-xl justify-center text-white bg-zinc-400 font-bold'>
        <FaCopyright />
        <p className="px-1">Designed By Infocom Services Rajahmundry</p>
      </div>
    </div>
  );
}

export default App
