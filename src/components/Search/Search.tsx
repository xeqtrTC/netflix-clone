import { useState, FormEvent, useEffect } from 'react'
import { propsFetchData, randomMovieArray, searchMovieArray } from '../Hooks/typeOfInterfaces';
import instance from '../netflixAPI/axios';
import { API_KEY } from '../netflixAPI/requests';
import SearchMovie from './SearchMovie';
import { AiOutlineClose} from 'react-icons/ai'
import searchState from '../Hooks/searchState';
import useStateValue from '../Hooks/useStateContext';
import useStateContext from "../Hooks/useStateContext";
import ShowUpVideo from '../ShowUpVideo/ShowUpVideo';

const Search = () => {
    const [keywordValue, setKeywordValue] = useState<string>('');
    const [searchMovies, setSearchMovies] = useState<searchMovieArray[]>([])
    const { searchStateValue, setSearchStateValue } = useStateValue()
    const { fetchSecondData, forVideo, load, setLoad, errorValue } = useStateContext();

    const searchTerm: string = `search/movie?api_key=${API_KEY}&language=en-US&query=${keywordValue}&page=1&include_adult=false`

    const changeValue = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setKeywordValue(e.currentTarget.value);
    }

    const fetchData = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(keywordValue.length > 2) {
            const { data } = await instance.get(searchTerm);
            console.log(data);
            setSearchMovies(data.results);
        }

    }

    const clearConsole = () => {
        setSearchMovies([]);
        setKeywordValue('');
    }

    const onclick = ({id, title, overview}: propsFetchData) => {
        fetchSecondData({id, title, overview});
    }


    return (
        <>
        <div className="fixed bg-black/80 h-[100vh] w-full  overflow-hidden overflow-y-scroll scrollbar">
        {
            load && (
                <ShowUpVideo />
            )
        }
            <form onSubmit={fetchData}>
                <div className='flex items-center border-b border-[#393939] p-5'>
                    <input type='text' value={keywordValue} onChange={changeValue} className="bg-transparent outline-none  p-5 placeholder:text-5xl placeholder:text-[#393939] text-[#393939] text-5xl w-full" placeholder="SEARCH HERE" />
                    <AiOutlineClose className='w-10 text-white h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' onClick={() => setSearchStateValue(false)}/>
                </div>
            </form>
            <div className="text-white flex flex-col ">
                {
                    searchMovies.length > 0 && (
                        <div className='flex justify-end p-5'>
                            <AiOutlineClose className='w-10 h-10 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out' onClick={clearConsole}/>
                        </div>
                    )
                }
                {
                    searchMovies.map((item) => {
                        const {backdrop_path, id, overview, poster_path, title } = item;
                        return (
                            <SearchMovie onclick={onclick} backdrop_path={backdrop_path} key={id} overview={overview} poster_path={poster_path} title={title} id={id} />
                            )
                        })
                    }            
            </div>
        </div>
                    </>
    )
}

export default Search;