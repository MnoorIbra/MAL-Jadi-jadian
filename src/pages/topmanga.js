import {getTopManga} from '../Api'
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function TopManga(){
    const [popularManga, setPopularManga] = useState([])
  useEffect(() => {
    getTopManga().then((result) => {
      setPopularManga(result)
    })
      
    
  }, [])


  const PopularMangaList = () => {
    return popularManga.map((Manga, i) => {
      return (
        <div className='wrappper' key={i}>
         <div className="avatar">
         <NavLink to = {'/detailManga/' + Manga.mal_id}>
        <img src={Manga.images.jpg.image_url} />
        </NavLink>
      </div>
        <NavLink to = {'/detailManga/' + Manga.mal_id}>
        <h3 className="headerDesc"  >{Manga.title}</h3>
        </NavLink>
      
      
      
        </div>
      )
    })
  }

  return(
    <div className='container'>
<PopularMangaList/>
    </div>
    
  )

}