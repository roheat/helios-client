import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand d-flex" to="/">
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
          <title>Helios</title>
          <defs>
            <linearGradient
              x1="114.674%"
              y1="39.507%"
              x2="-52.998%"
              y2="39.507%"
              id="logo-a"
            >
              <stop stopColor="#8D92FA" offset="0%" />
              <stop stopColor="#8D92FA" stopOpacity="0" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="93.05%"
              y1="19.767%"
              x2="15.034%"
              y2="85.765%"
              id="logo-b"
            >
              <stop stopColor="#FF3058" offset="0%" />
              <stop stopColor="#FF6381" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="32.716%"
              y1="-20.176%"
              x2="32.716%"
              y2="148.747%"
              id="logo-c"
            >
              <stop stopColor="#FF97AA" offset="0%" />
              <stop stopColor="#FF97AA" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <path
              d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z"
              fill="#312ECA"
            />
            <path
              d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z"
              fill="url(#logo-a)"
            />
            <g opacity=".88">
              <path
                d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z"
                fill="url(#logo-b)"
              />
              <path
                d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z"
                fill="url(#logo-c)"
              />
            </g>
          </g>
        </svg>
        <h4 className="ml-2 my-auto">Helios Trading Platform</h4>
      </Link>
      <div className="collapse navbar-collapse">
        <Link className="btn btn-outline-primary my-2 my-sm-0 ml-auto" to="/">
          How it works
        </Link>
      </div>
    </nav>
  );
}
