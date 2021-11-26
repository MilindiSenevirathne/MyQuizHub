import React from 'react';
import { ReactDOM } from 'react-dom';
import './Mainpage.css'

const Main = () => {
  return (
    <div className='main' style={{ backgroundColor: "white" }}>
      <div className="logout">
          <a href='/'>
            <button className="logout-button">
              Log out >>
            </button>
          </a>
        </div>
      <div class="cards-list" style={{ backgroundColor: "white" }}>
        

        <div class="card 1">
          <div class="card_image"> <img src="h.png" /> </div>
          <div class="card_title title-white">
            <p><a href='/Quiz'>HTML</a></p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="c.png" />
          </div>
          <div class="card_title title-white">
            <a href='/css'>CSS</a>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src="j.png" />
          </div>
          <div class="card_title title-white">
            <a href='/js'>JavaScript</a>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image">
            <img src="a.png" />
          </div>
          <div class="card_title title-white">
            <a href='/angular'>Angular</a>
          </div>
        </div>

      </div>
      <div class="cards-list">

        <div class="card 1">
          <div class="card_image"> <img src="p.png" /> </div>
          <div class="card_title title-white">
            <a href='/php'>PHP</a>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src="s.png" />
          </div>
          <div class="card_title title-white">
            <a href='/sql'>SQL</a>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image" style={{ backgroundColor: "black" }}>
            <img src="logo512.png" />
          </div>
          <div class="card_title title-white">
            <a href='/react'>React</a>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image" style={{ backgroundColor: "#154458" }}>
            <img src="python.png" />
          </div>
          <div class="card_title title-white">
            <a href='/python'>Python</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main;