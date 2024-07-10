import React from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { logo2 } from "../assets";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {

    return (
        <footer
            className={` w-full flex items-center top-0 bottom-0 bg-primary`}
        >
            <div className='w-full flex justify-between max-w-7xl mx-auto'>
                <div className="flex flex-col w-[317px]">
                    <Link
                        to='/'
                        className='flex gap-5'
                        onClick={() => {

                            window.scrollTo(0, 0);
                        }}
                    >
                        <div className="flex items-center justify-center gap-5">
                            <img src={logo2} alt='logo' className='w-14 h-14 object-contain' />
                            <p className='text-white text-[20px] font-bold cursor-pointer flex hover:scale-125 transition-all duration-200'>
                                Chirag &nbsp;
                                <span className='sm:block hidden'>Portfolio</span>
                            </p>
                        </div>
                    </Link>
                    <div className="max-w-sm mt-4 text-secondary text-[15px] leading-[28px]">
                        Thank you for visiting my portfolio website.
                        Connect with me over socials.
                    </div>
                </div>

                <div className="flex flex-col w-[181px] gap-6">
                    <p className='text-white pt-[15px] text-[20px] font-bold'>
                        Connect With Me.
                    </p>
                    <div className="flex gap-3 text-3xl text-secondary">
                        <a title="Linkedin" href="https://www.linkedin.com/in/chirag-khaitan" target="_blank" className="hover:scale-150 hover:text-white transition-all duration-200"><FaLinkedin /></a>
                        <a title="Instagram" href="https://www.instagram.com/thechiragkhaitan" target="_blank" className="hover:scale-150 hover:text-white transition-all duration-200"><FaInstagram /></a>
                        <a title="Github" href="https://github.com/TheChiragKhaitan" target="_blank" className="hover:scale-150 hover:text-white transition-all duration-200"><FaGithub /></a>
                        <a title="Email" href="mailto:chiragkhaitan2014@gmail.com" className="hover:scale-150 hover:text-white transition-all duration-200"><MdEmail /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SectionWrapper(Footer, "");
