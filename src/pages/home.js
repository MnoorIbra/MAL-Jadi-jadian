import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/home.css'

export default function Home(){
    return (
        <div className="home" id="home">
      <header>
        <img src="/logomal.png" className="app-logo" />
        <h2 className="title">MAL Jadi-jadian</h2>
      </header>
      <div className="container-home">
        <div className="wrapper-home">
          <NavLink to="/anime" className="link app-link">
            Anime
          </NavLink>
        </div>
        <div className="wrapper-home">
          <NavLink to="/manga" className="app-link">
            Manga
          </NavLink>
        </div>
        <div className="wrapper-home">
          <NavLink to="/tentang" className="app-link">
            About
          </NavLink>
        </div>
      </div>
    </div>
    )
}
