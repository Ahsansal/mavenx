import React, { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";

const App = () => {
  const [show, setShow] = useState(false);
  function handler() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <div>
      <header className="bg-[#181717] h-[70px]">
        <nav className="flex justify-between pl-[20px] pr-[40px]">
          <div className="flex gap-[22px]">
            <div className="pt-[15px]">
              <img className="h-[40px] w-[150px] " src="/logos/logo.svg" />
            </div>
            <div className="flex gap-[18px]">
              <p className="text-[12px] font-normal uppercase pt-[25px]">
                Browse
              </p>
              <div className="pt-[25px] flex relative">
                <HiOutlineDotsVertical
                  className="w-[20px] h-[20px]  hover:cursor-pointer"
                  onClick={handler}
                />
                {show ? (
                  <div className="bg-[#FFFFFF]/30 text-[12px]  absolute pl-[10px] leading-8 w-[154px] h-[170px] pt-[5px ] ml-[20px] rounded-md">
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms& Conditions</p>
                    <p>Support</p>
                    <p>Help</p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-[2px]">
            <input
              className="bg-[#3E3D3D] w-[355px] h-[40px] opa rounded-s-lg pl-[20px] mt-[15px] focus:outline-none hover:cursor-pointer "
              type="search"
              placeholder="Search for anything..."
            />
            <button className="bg-[#3E3D3D] h-[40px] w-[40px]  mt-[15px] flex justify-center items-center rounded-e-lg ">
              <GoSearch className="w-[20px] h-[20px]" />
            </button>
          </div>
          <div className="flex gap-[20px] sticky">
            <div className="flex py-[25px] items-center gap-2 hover:cursor-pointer">
              <p className="font-normal text-[15px] ">AR</p>
              <AiFillCaretDown className="w-[15px] h-[15px] " />
            </div>
            <div className="flex gap-[24px] items-center">
              <BiHomeAlt2 className="w-[24px] h-[24px] hover:cursor-pointer" />
              <IoIosChatboxes className="w-[24px] h-[24px] hover:cursor-pointer" />
              <FiBell className="w-[24px] h-[24px] hover:cursor-pointer" />
              <img
                className="w-[40px] h-[40px] rounded-md hover:cursor-pointer"
                src="/avatars/avatar-1.jpg"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default App;
