import { Dispatch, SetStateAction } from 'react'

export const base_url:string = "https://image.tmdb.org/t/p/original/"

export interface freqStates {
    whatNetflix: boolean,
    netfixCost: boolean,
    whereWatch: boolean,
    howCancel: boolean,
    canWatchNetflix: boolean,
    goodKids: boolean
}

export interface statesForVideo {
    videoId: string,
    title: string,
    description: string
}

export interface randomMovieArray {
    backdrop_path: string,
    first_air_date: string,
    id: string,
    imdb_id: string,
    title: string,
    name: string,
    origin_country: string[],
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
}

export interface searchMovieArray {
    backdrop_path: string,
    first_air_date: string,
    id: string,
    imdb_id: string
    name: string,
    origin_country: string[],
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string
}

export interface propsFetchData {
    id: string,
    title: string,
    overview: string
}

export interface propsForListMovies {
    title: string,
    fetchUrl: string,
    fetchSecondData: ({id, title, overview}: propsFetchData) => void
}

export interface propsForVideo {
    videoId?: string,
    title?: string,
    description?: string,
    setLoad: (setLoad: boolean) => void
}

export interface propsForYoutube {
    loading: boolean,
    videoId?: string,
    setLoading: (setLoading: boolean) => void
}

export interface propsForFreqQuestions {
    id: number,
    header: string
    body: string,
}

export interface propsForSearchMovie {
    backdrop_path: string,
    id: string,
    overview: string,
    poster_path: string,
    title: string,
    onclick: ({id, title, overview}: propsFetchData) => void
}

