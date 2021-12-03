import React from "react";
import "./Banner.css";
import world from "../src/assets/images/world-map.png";
import chat from "../src/assets/icons/chat.svg";
import fb from "../src/assets/icons/fb.svg";
import insta from "../src/assets/icons/insta.svg";
import discord from "../src/assets/icons/discord.svg";
import message from "../src/assets/icons/message.svg";
import telegram from "../src/assets/icons/telegram.svg";
import twitter from "../src/assets/icons/twitter.svg";

function Banner() {
  return (
    <div className='banner'>
      <div className='banner__innerFlex'>
        <div className='banner__text'>
          <div className='banner__header'>
            <h1>Revolutionizing Opportunities Through</h1>
            <span style={{ color: "yellow" }} className='banner__headerSpan'>
              Blockchains
            </span>
          </div>
          <text className='banner__innerText'>
            Blockchain has the potential to adequately transform African
            society. Offering insurmountable to those leveraging it to build a
            new structure in diverse sectors.
          </text>

          <div className='banner__ico'>
            <div className='banner__mini'>
              <img src={chat} alt='' />
              <div className='banner__small'>
                <h4>Questions?</h4>
                <span style={{ fontWeight: 200 }}>Contacts</span>
              </div>
              <div className='banner__items'>
                <img src={fb} alt='' />
              </div>
              <div className='banner__items'>
                <img src={insta} alt='' />
              </div>
              <div className='banner__items'>
                <img src={telegram} alt='' />
              </div>
              <div className='banner__items'>
                <img src={discord} alt='' />
              </div>
              <div className='banner__items'>
                <img src={message} alt='' />
              </div>
              <div className='banner__items'>
                <img src={twitter} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={world} alt='' />
        </div>
      </div>
      <div className='banner__numbers'>
        <div className='banner__numberInfo'>
          <h1>161,374,517</h1>
          <p>Circulating Supply</p>
        </div>
        <div className='banner__numberInfo'>
          <h1>850,000,000</h1>
          <p>Total Supply</p>
        </div>
        <div className='banner__numberInfo'>
          <h1>10,519</h1>
          <p>Address Holders</p>
        </div>
        <div className='banner__numberInfo'>
          <h1>$918,474</h1>
          <p>24hrs Trading Volume</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
