import React from "react";
import Logo1 from "../assets/logo1.png";
import Pattern1 from "../assets/pattern1.png";
import Pattern2 from "../assets/pattern2.png";
import { BiCopy } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="w-full pt-32 pb-16 relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex  z-10 flex-col gap-5">
          <h1 className="text-white text-7xl md:text-8xl font-squishyBlue ">
            Welcome To Shiba Ton
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
          A TON season is incoming with the hyped notcoin airdrop and once that happens everyone will look for the classic memes on that chain, so look no more, SHIBATON is here
          </p>
          <button
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
            onClick={() => {
              navigator.clipboard
                .writeText(" EQBFwbvCKCUlCgND1aAV6i-6m19nQJ0Wol-gyzUw1K-vxE_b")
                .then(() => {
                  alert("Contract Copied");
                });
            }}
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#2596be] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white flex items-center gap-3 text-xl font-normal leading-7">
                  COPY CA <BiCopy />
                </div>
              </div>
            </div>
          </button>
        </article>
        <img src={Logo1} alt="" className=" z-10" />
      </div>
    </section>
  );
};

export default Hero;
