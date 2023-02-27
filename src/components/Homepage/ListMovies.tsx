import instance from "../netflixAPI/axios"
import { useEffect, useState } from "react"
import { base_url, propsFetchData, propsForListMovies, randomMovieArray } from "../Hooks/typeOfInterfaces"
import { API_KEY } from "../netflixAPI/requests"

const ListMovies = ({ title, fetchUrl, fetchSecondData }: propsForListMovies) => {

    const [movies, setMovies] = useState<randomMovieArray[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const fetchData = async () => {
        const { data } = await instance.get(fetchUrl);
        setMovies(data.results);
        setLoading(false)    
    }
    const onclick = ({id, title, overview}: propsFetchData) => {
        fetchSecondData({id, title, overview});
    }
    useEffect(() => {
        fetchData()
    }, [fetchUrl])

    return ( 
       <div>
            {
                loading ? (
                    <p>Loading</p>
                ) : (
                    <>
                    <p className="py-3 text-white text-2xl">{title}</p>
                    <div className="flex space-x-2 overflow-hidden">
                          {
                            movies.map((item) => {
                                const { id, backdrop_path, title, overview } = item
                                return (
                                    <img src={`${base_url}${backdrop_path}`} key={id} onClick={() => onclick({id, title, overview})} className='w-32 h-32 hover:scale-105 cursor-pointer transition-all ease-in-out duration-200' />
                                )
                            })
                          }
                    </div>
                       
                    </>
                )
            }
       </div>
    )
}

export default ListMovies