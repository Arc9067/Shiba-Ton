import React from "react";
import Logo2 from "../assets/logo1.png";

const About = () => {
  return (
    <section className="w-full py-16 relative">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <img src={Logo2} alt="" className="order-2 lg:order-1"/>
        <article className="flex  z-10 flex-col gap-5 lg:order-2">
          <h1 className="text-white text-5xl font-squishyBlue ">
            About ShibaTon
          </h1>
          <p className=" text-white text-base font-normal leading-loose">
          A TON season is incoming with the hyped notcoin airdrop and once that happens everyone will look for the classic memes on that chain, so look no more, SHIBATON is here



          </p>
          <a
            href="https://t.me/ShibaTon_Portal"
            className="w-[267px] h-[74px] pl-px pb-1 bg-lime-400 justify-center items-center inline-flex"
          >
            <div className="grow shrink basis-0 self-stretch p-[5px] bg-white justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#2596be] shadow justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7">
                  JOIN TELEGRAM
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
