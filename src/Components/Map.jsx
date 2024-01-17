import React from "react";
import token from "../assets/token.svg";

const Map = () => {
  return (
    <section className="py-10 w-full" id="map">
      <div className="container flex justify-center flex-col items-center">
        <h1 className="text-white text-5xl font-squishyBlue">How To Buy $SHIBT</h1>

        <div className="w-full mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-x-20 gap-y-8">
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#2596be] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-squishyBlue">Step One</h1>
            <p className=" text-white text-base font-normal leading-loose">
            1- Download the Tonkeeper wallet:<br /><a href="https://tonkeeper.com/" className="text-black">TonKeeper</a> or use the native Telegram wallet: <a href="https://t.me/wallet" className="underline text-black">@wallet</a> 
            </p>
          </article>
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#2596be] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-squishyBlue">Step Two</h1>
            <p className=" text-white text-base font-normal leading-loose">
            2- Bridge from any chain to TON using:<br /><a href="https://app.rocketx.exchange/swap" className="text-black">RocketX</a> or <a href="https://fixedfloat.com/" className="underline text-black">FixedFloat</a> Or send from a CEX (HTX, OKX, KuCoin...) 
            </p>
          </article>
          <article className="md: flex flex-col gap-5 items-start rounded-xl bg-[#2596be] p-4">
            <img src={token} alt="" />
            <h1 className="text-white text-2xl font-squishyBlue">Step Three</h1>
            <p className=" text-white text-base font-normal leading-loose">
            3- Swap TON for $SHIB on <a href="https://app.ston.fi/" className="text-black">ston.fi</a> using our CA<br />CA: EQBFwbvCKCUlCgND1aAV6i-6m19nQJ0Wol-gyzUw1K-vxE_b
            </p>
          </article>
         
        </div>
      </div>
    </section>
  );
};

export default Map;