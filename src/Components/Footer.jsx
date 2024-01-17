import React from "react";
import footerLogo from "../assets/logo1.png";
import gecko from "../assets/gecko.png";

const Footer = () => {
  return (
    <footer className="py-9 bg-black w-full">
      <div className="container gap-6 flex justify-between items-center flex-col md:flex-row">
        <div className="text-white font-serif text-center text-2xl font-normal leading-[41.40px]">
          Copyright © {new Date().getFullYear()} ShibaTon. All Rights Reserved.
        </div>
        <img src={footerLogo} alt="" className="w-[5rem]" />
        <div className="flex items-center gap-6">
          <a href="https://t.me/ShibaTon_Portal" target="_blank" className="">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1269_426)">
                <path
                  d="M24.2765 48.5374C37.5417 48.5374 48.2952 37.7839 48.2952 24.5187C48.2952 11.2535 37.5417 0.5 24.2765 0.5C11.0114 0.5 0.257812 11.2535 0.257812 24.5187C0.257812 37.7839 11.0114 48.5374 24.2765 48.5374Z"
                  fill="url(#paint0_linear_1269_426)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1078 24.2568C18.1039 21.189 22.7804 19.2062 25.1374 18.2334C31.7968 15.4649 33.181 14.9786 34.0789 14.9412C34.266 14.9412 34.7149 14.9786 35.0142 15.203C35.2387 15.3901 35.3135 15.652 35.351 15.8391C35.3884 16.0261 35.4258 16.4377 35.3884 16.7744C35.0142 20.553 33.4803 29.7938 32.6573 34.0214C32.3206 35.8172 31.6471 36.4158 31.0111 36.4907C29.6269 36.6029 28.5419 35.5553 27.1951 34.6949C25.1 33.3106 23.9028 32.4501 21.8451 31.1033C19.4881 29.532 21.022 28.6715 22.3689 27.2872C22.7056 26.9131 28.8786 21.3387 28.9909 20.8149C28.9909 20.7401 29.0283 20.5156 28.8786 20.4034C28.729 20.2911 28.5419 20.3285 28.3923 20.3659C28.1678 20.4034 24.8007 22.6481 18.2535 27.0628C17.2808 27.7362 16.4203 28.0355 15.6347 28.0355C14.7742 28.0355 13.128 27.5491 11.8934 27.1376C10.3969 26.6512 9.19975 26.3893 9.31198 25.5663C9.38681 25.1547 9.98541 24.7058 11.1078 24.2568Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1269_426"
                  x1="0.257812"
                  y1="24.5013"
                  x2="48.2605"
                  y2="24.5013"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AABEE" />
                  <stop offset="1" stop-color="#229ED9" />
                </linearGradient>
                <clipPath id="clip0_1269_426">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0.257812 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://twitter.com/ShibaTon_Token"
            target="_blank"
            className=""
          >
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1269_451)">
                <path
                  d="M24.2578 48.5C37.5126 48.5 48.2578 37.7548 48.2578 24.5C48.2578 11.2452 37.5126 0.5 24.2578 0.5C11.003 0.5 0.257812 11.2452 0.257812 24.5C0.257812 37.7548 11.003 48.5 24.2578 48.5Z"
                  fill="#1B9DF0"
                />
                <path
                  d="M19.8674 37.16C30.5114 37.16 36.3314 28.34 36.3314 20.696C36.3314 20.444 36.3314 20.192 36.3194 19.952C37.4474 19.136 38.4314 18.116 39.2114 16.952C38.1794 17.408 37.0634 17.72 35.8874 17.864C37.0874 17.144 37.9994 16.016 38.4314 14.66C37.3154 15.32 36.0794 15.8 34.7594 16.064C33.7034 14.936 32.2034 14.24 30.5354 14.24C27.3434 14.24 24.7514 16.832 24.7514 20.024C24.7514 20.48 24.7994 20.924 24.9074 21.344C20.0954 21.104 15.8354 18.8 12.9794 15.296C12.4874 16.148 12.1994 17.144 12.1994 18.2C12.1994 20.204 13.2194 21.98 14.7794 23.012C13.8314 22.988 12.9434 22.724 12.1634 22.292C12.1634 22.316 12.1634 22.34 12.1634 22.364C12.1634 25.172 14.1554 27.5 16.8074 28.04C16.3274 28.172 15.8114 28.244 15.2834 28.244C14.9114 28.244 14.5514 28.208 14.1914 28.136C14.9234 30.44 17.0594 32.108 19.5914 32.156C17.6114 33.704 15.1154 34.628 12.4034 34.628C11.9354 34.628 11.4794 34.604 11.0234 34.544C13.5554 36.2 16.6034 37.16 19.8674 37.16Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1269_451">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(0.257812 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>          <a
            href="https://www.geckoterminal.com/ton/pools/EQB1_QdBkoi5OsH6fBUYmH59rd507sPstRjXDqi5qFYZVu3j"
            className=""
          >
            <img src={gecko} alt="" className="w-[3rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
