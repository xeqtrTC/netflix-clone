import Header from "../Header/Header"
import { useEffect, useState } from 'react';
import ListMovies from "./ListMovies"
import instance from "../netflixAPI/axios"
import requests, { API_KEY } from "../netflixAPI/requests"
import ShowUpVideo from "../ShowUpVideo/ShowUpVideo";
import { base_url, propsFetchData, randomMovieArray, statesForVideo } from "../Hooks/typeOfInterfaces";
import setVideoState from "../Hooks/setVideoState";
import useStateContext from "../Hooks/useStateContext";


const Homepage = () => {
    const [randomMovie, setRandomMovie] = useState<randomMovieArray>()
    const { fetchSecondData, forVideo, load, setLoad, errorValue } = useStateContext();

    const fetchData = async () => {
        const {data} = await instance.get(requests.fetchNetflixOriginals);
        const randomMovieFromArray = data.results[Math.floor(Math.random() * data.results.length - 1)];
        setRandomMovie(randomMovieFromArray);
    }

    useEffect(() => {   
        fetchData()
    }, [])

    const truncate = (string: string, n: number) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string
    }
    return (
        <div>
            {
                load && (
                    <ShowUpVideo />
                )
            }
            <div className="bg-black">
                <Header />
            </div>
            <div>
                <div className={`py-32 px-10 object-cover bg-cover bg-center `} style={{ backgroundImage: `url(${base_url}${randomMovie?.poster_path})`}}>
                    <div className={` text-white md:w-[45rem]`}>
                        
                        <span className='text-5xl font-bold'>{randomMovie?.name}</span>
                        <div className=" py-2 space-x-4">
                            <button className="buttonHomepage">Play</button>
                            <button className="buttonHomepage">My List</button>
                        </div>
                        <div className="py-2 overflow-hidden">
                            <span className="text-2xl text-wite ">{truncate(`${randomMovie?.overview}`, 100)}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-[#111] px-10 py-10 min-h-[100vh]">
                    <ListMovies  title={'NETFLIX ORIGINALS'} fetchUrl={requests.fetchNetflixOriginals}  fetchSecondData={fetchSecondData} />
                    <ListMovies  title={'Trending now'}  fetchUrl={requests.fetchTrending}  fetchSecondData={fetchSecondData}/>
                    <ListMovies  title={'Top Rated'} fetchUrl={requests.fetchTopRated}  fetchSecondData={fetchSecondData}/>
                    <ListMovies  title={'Action Movies'} fetchUrl={requests.fetchActionsMovies}  fetchSecondData={fetchSecondData} />
                    <ListMovies  title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}  fetchSecondData={fetchSecondData}/>
                    <ListMovies  title={'Horror movies'} fetchUrl={requests.fetchHorrorMovies}  fetchSecondData={fetchSecondData}/>
                    <ListMovies  title={'Romance Movies'} fetchUrl={requests.fetchRomanseMovies}  fetchSecondData={fetchSecondData}/>
                    <ListMovies  title={'Documentaries'} fetchUrl={requests.fetchDocumenatries}  fetchSecondData={fetchSecondData}/>
                </div>

            </div>
        </div>
    )
}

export default Homepage