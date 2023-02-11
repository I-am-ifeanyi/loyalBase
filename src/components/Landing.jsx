import React, {useState} from "react";

import heart from "../Assets/heart.png";
import profile from "../Assets/profilecircle.png";
import mail from "../Assets/mail-01.png";
import good from "../Assets/good.png";




const Landing = () => {
  const [details, setDetails] = useState({
  name: "",
  email: ""
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  
  const formHandler = (e) => {
    setDetails({
        ...details,
        [e.target.name]: e.target.value
      })
  }

  const formSubmit = (e) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    setTimeout(() => {
      setDetails({
        name: '',
        email: ''
      })
      setIsFormSubmitted(false)
    }, 5000)
  }
  const {name, email} = details

const toggle = () => {
  setIsFormSubmitted(isFormSubmitted ? false : null)
}


  return (
    <div className=' bg-[url("landingBg1.png")] h-screen md:bg-no-repeat md:bg-cover bg-contain text-gray-200' onClick={toggle}>
      <header className="flex tracking-wider justify-between md:p-10 py-5 px-3">
        <h1 className="flex items-center md:text-3xl text-2xl">
          <span className="text-4xl"> l</span>
          <span className="">
            <img src={heart} className="w-[30px]" alt="" />
          </span>
          yalbaze
        </h1>
        <button className="border md:px-8 px-5 rounded-full border-[#5404FF]">
          {" "}
          <a href="#formPage"> Request a call</a>
        </button>
      </header>
      <div className="flex flex-col md:flex-row justify-between mt-16">
        <div className="animate w-[80px] h-[80px] rounded-full md:w-[150px] md:h-[150px] ml-5"></div>
        <div className="md:mt-10 md:  md:w-[50%] flex flex-col items-center relative">
          <h1 className="text-4xl md:w-[80%] text-center font-semibold">
            Turn Your Best Customers Into{" "}
            <span className="text-[#a75fd2]">Loyal Fans</span>
          </h1>
          <p className="text-center px-5 md:px-0">
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Join the waiting list now to be
            among the first to experience the future of customer loyalty.
          </p>
          <form className="flex flex-col gap-4 mt-8 w-full items-center" onSubmit={formSubmit}>
            <label className="flex border w-[65%] rounded-xl">
              <img src={profile} alt="" className="m-2" />
              <input
                type="text"
                placeholder="Tell us your name"
                className="bg-transparent w-full outline-none pl-2"
                required
                name="name"
                value={name}
                onChange={formHandler}
              />
            </label>
            <label className="flex border w-[65%] rounded-xl">
              <img src={mail} alt="" className="m-2" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent w-full outline-none pl-2"
                required
                name="email"
                value={email}
                onChange={formHandler}
              />
            </label>
            <button className="w-[65%] rounded-xl p-2 btn">Get early access</button>
          </form>
          <div className="flex gap-2 mt-2">
            <div className="flex flex-row-reverse font-semibold items-center">
              <p className="w-[20px] h-[20px] text-center rounded-full bg-[#a75fd2] -mr-1 text-sm">G</p>
              <p className="w-[20px] h-[20px] text-center rounded-full bg-[#5404ff] -mr-1 text-sm">O</p>
              <p className="w-[20px] h-[20px] text-center rounded-full bg-[#a75fd2] -mr-1 text-sm">U</p>
              <p className="w-[20px] h-[20px] text-center rounded-full bg-[#5404ff] -mr-1 text-sm">M</p>
            </div>
            <p>+57 Joined</p>
          </div>
          {isFormSubmitted && <div className="p-2 w-[300px] h-[350px] bg-[#15141B] rounded-xl absolute z-50 flex flex-col items-center justify-center gap-4">
            <img src={good} alt="" className="w-[80px]" />
            <h1 className="text-lg font-sem
            ">Congratulations { name}</h1>
            <p className="text-center text-sm">
              Great move! You're one step closer to getting your hands on the
              product. Please check your mail for more information.
            </p>
          </div>}
        </div>
        <div className="animate2 w-[150px] h-[150px] md:rounded-l-full rounded-r-full md:rounded-r-none mt-40 md:w-[150px] md:h-[200px] blur-xl"></div>
      </div>
    </div>
  );
};

export default Landing;
