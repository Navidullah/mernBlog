import React from "react";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { BsClipboardPulse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="shadow-md dark:bg-gray-800 max-[1024px]:max-w-[1024px] ">
      <div className="max-container flex justify-between mt-[50px]  py-[20px] max-md:flex-col">
        <div className="  flex flex-col gap-[14px]">
          <div className="flex items-center text-3xl text-coral-white max-md:text-2xl">
            <BsClipboardPulse />
            <span>ThePulse</span>
          </div>
          <p className="font-normal max-w-[550px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            quasi possimus voluptates quidem nam, quisquam molestias sit
            expedita alias quaerat ullam ad totam exercitationem! Veritatis
            eligendi animi cupiditate harum quos.
          </p>
          <div className="icons flex mt-4 mb-5 gap-3">
            <BiLogoFacebookCircle />
            <FaInstagramSquare />
            <FaXTwitter />
            <AiFillTikTok />
          </div>
        </div>
        <div className="links  flex  gap-11 max-md:justify-around max-md:gap-3">
          <div className="flex flex-col items-center gap-[10px] font-normal">
            <span className="font-bold">Links</span>
            <Link to="/">HomePage</Link>
            <Link to="/write">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">About</Link>
          </div>
          <div className="flex flex-col items-center gap-[10px] font-normal">
            <span className="font-bold">Tags</span>
            <Link to="/">Style</Link>
            <Link to="/">Fashion</Link>
            <Link to="/">Culture</Link>
            <Link to="/">Coding</Link>
          </div>
          <div className="flex flex-col items-center gap-[10px] font-normal">
            <span className="font-bold">Socials</span>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Tiktok</Link>
            <Link to="/">Instagram</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
