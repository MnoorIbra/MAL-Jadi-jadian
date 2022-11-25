import React, { Component } from 'react'

import axios from 'axios'

export const getTopAnime = async() => {
    const topanime = await axios.get("https://api.jikan.moe/v4/top/anime")
    console.log({topanime: topanime})
    return topanime.data.data

}

export const getTopManga = async() => {
    const topmanga = await axios.get("https://api.jikan.moe/v4/top/manga")
    return topmanga.data.data
}

export const getDetailAnime = async(malid) => {
    const detail = await axios.get(`https://api.jikan.moe/v4/anime/${malid}`)
    return detail.data.data
}

export const getDetailManga = async(malid) => {
    const detail = await axios.get(`https://api.jikan.moe/v4/manga/${malid}`)
    return detail.data.data
}

