import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/BottomNav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {TbNotebook} from 'react-icons/tb'
import {SiMyanimelist} from 'react-icons/si'
import {BsPerson} from 'react-icons/bs'


export default function BottomNav(){
    return (
        <div className="bottom-nav">
            <NavLink to= "/" className= "link nav-link">
                <AiOutlineHome className="icon"/>
                Home
            </NavLink>
            <NavLink to= "/anime" className= "link nav-link">
                <SiMyanimelist className="icon"/>
                Anime
            </NavLink>
            <NavLink to= "/manga" className= "link nav-link">
                <TbNotebook className="icon"/>
                Manga
            </NavLink>
            <NavLink to= "/tentang" className= "link nav-link">
                <BsPerson className="icon"/>
                About
            </NavLink>
        </div>
    )
}