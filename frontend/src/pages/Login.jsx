import img from '../assets/godavari.jpg'
import Logo from '../assets/logo.png'
const Login = () => {
    return (
      <div className="flex  justify-evenly  m-4 items-center">
        <div className='flex flex-col gap-6' >
          <div className>
            <p className=' text-3xl'>Welcome</p>
            <p className=' text-3xl'>Rajahmundry Asset Intranet</p>
          </div>
          <div className="flex flex-col">
            <input
              className="bg-white"
              type="integer"
              name=""
              id=""
              placeholder="cpf number"
            />
            <input
              className="bg-white"
              type="password"
              name=""
              id=""
              placeholder="password"
            />
            <input className="bg-red-600" type="login" value="login" />
          </div>
        </div>
        <div className="relative">
          <img className="h-[696px] w-[824px] rounded-xl " src={img} alt="" />
          <div className="absolute right-3 top-7 ">
            <img
              className="rounded-[80px] h-[130px] w-[130px] "
              src={Logo}
              alt=""
            />
          </div>
        </div>
      </div>
    );
}

export default Login