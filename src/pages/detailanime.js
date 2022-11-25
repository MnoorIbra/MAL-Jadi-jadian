import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {getDetailAnime} from "../Api"
import '../styles/detail.css'


export default function DetailAnime() {

    const {malid} = useParams()
    const [detailanime, setDetailAnime] = useState([])

    useEffect(() => {
        getDetailAnime(malid).then((result) => {
            setDetailAnime(result)
        })
    }, [])

    const DetailAnimeList = () =>{
        if(detailanime.title == undefined){
            return(
              <div>
                  Loading...
              </div>
            );
    
            }
        return(
            <div className='wrapper' >
            <img className='image' src={detailanime.images.jpg.image_url} />
            <div className='title'>{detailanime.title} </div>
            <div className='airing'>{detailanime.aired.string}</div>
            <div className='rating'>{detailanime.rating}</div>
            <div className='rating'>{detailanime.score}</div>
            <div className='title'>{detailanime.synopsis} </div>
      </div>
        )
        }


return (


    
    <div className="">
        <DetailAnimeList/>
    </div>


)

}