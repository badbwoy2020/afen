import React from "react";
import "./Header.css";
import afen from "../src/assets/images/afenlogo.png";
import discord from "../src/assets/icons/discord.svg";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={afen} alt='' className='header__logo' />
      </div>
      <div className='header__right'>
        <ul className='header__innerRight'>
          <li>Products</li>
          <li>Resources</li>
          <li>Contact</li>
          <li
            style={{
              border: "1px solid #4D55A6",
              borderRadius: "3px",
              padding: "10px",
            }}
          >
            Whitepaper
          </li>
          <li className='header__last'>
            Buy on Pancakeswap
            <img src={discord} alt='' className='header__lastSvg' />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
