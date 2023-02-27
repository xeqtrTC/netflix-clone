import { useState, useEffect } from 'react'
import setVideoState from '../Hooks/setVideoState'
import ShowUpVideo from '../ShowUpVideo/ShowUpVideo'
import Footer from '../Footer/Footert'
import FreqQuestions from './FreqQuestions'
import { freqStates, statesForVideo } from '../Hooks/typeOfInterfaces'
import junk from '../jsonFiles/toys.json';
import Jumbo from './Jumbo'
import Search from '../Search/Search'
import Header from '../Header/Header'
import instance from '../netflixAPI/axios'
import { API_KEY } from '../netflixAPI/requests'
const HomeScreen = () => {
    const [load, setLoad] = setVideoState();
    console.log(load);
    const [forVideo, setForVideo] = useState<statesForVideo>();

    const onloadahs = () => {
        setForVideo({
            videoId: '5JyfgkPMXk0',
            title: 'ahahahahaha',
            description: 'OVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJOVO MOZE BRATE MOJ SAMO ROKAJ'
        } as any)
        setLoad(true);
    }

    let loadButton = null;
    const secondid: string = `/movie/505642/videos?api_key=${API_KEY}&language=en-US`
    const testas: string = `/movie/505642?api_key=${API_KEY}&language=en-US`

    const fetchData = async () => {
        // const { data } = await instance.get(testas);
        const { data } = await instance.get(secondid);
        // console.log(data);
        console.log(data);

    }
    useEffect(() => {
        fetchData();
    }, [secondid])

    // if (load) {
    //     loadButton = (
    //         // <ShowUpVideo videoId={forVideo?.videoId} title={forVideo?.title} setLoad={setLoad} description={forVideo?.description}/>
    //     )
    // }
    const combinedButton = (
        <>
        {loadButton}
        </>
    )
    

    const content = (
        <div>
            {
                combinedButton
            }
            <div className='h-[80%] border-b-8 border-[#222222] border-6 '>
                <div className="h-[80vh] w-full object-cover" style={{backgroundImage: 'url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg)'}}>
                <div className=' text-white'>
                    <Header />
                    <div className="flex flex-col p-4 md:py-10 justify-center items-center h-[70%] font-mono w-[90%] md:w-[60%] lg:w-[50%] text-center m-auto">
                        <p className="text-xl md:text-7xl">Unlimited movies, TV shows, and more.</p>
                        <p className="text-4xl mt-2">Watch anywhere. Cancel anytime.</p>
                        <div className="font-medium px-2 py-10">
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>
                            <div className='flex flex-col py-5 md:flex-row h-full'>
                                <div className=" flex flex-1 min-w-[20rem] ">
                                    <input type='text' className=" py-5 px-2 w-full  text-black outline-none placeholder:text-[#8c8c8c] placeholder:font-bold" placeholder='Email'/>
                                </div>
                                <div className="flex-0 py-6 md:py-0">
                                    <button className="bg-[#E50914] py-1.5 h-full hover:bg-[#f40612] transition-all duration-200 ease-in-out font-medium px-5">Get Started {'>'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="bg-black flex flex-col text-white">
                <Jumbo />
                <FreqQuestions  />
                <Footer />
            </div>
        </div>
    )

    
    
    return content
}

export default HomeScreen;


{/* <div className='h-[80%] border-b-8 border-[#222222] border-6 '>
                <div className="relative">
                    <img className='h-[80vh] w-full' src='https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg' />
                </div>
                <div className='absolute top-0 h-[80%] text-white w-full'>
                    <div className='w-[95%] py-[15px] m-auto flex justify-between items-center'>
                        <div>
                            <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
                            className='h-20 object-cover' />

                        </div>
                        <div>
                            <button className="bg-[#E50914] py-1 px-4 rounded font-medium" onClick={onloadahs}>Sign In</button>
                        </div>
                    
                    </div>
                    <div className="flex flex-col p-4 md:py-10 justify-center items-center h-[70%] font-mono w-[90%] md:w-[60%] lg:w-[50%] text-center m-auto">
                        <p className="text-xl md:text-7xl">Unlimited movies, TV shows, and more.</p>
                        <p className="text-4xl mt-2">Watch anywhere. Cancel anytime.</p>
                        <div className="font-medium px-2 py-10">
                            <p>Ready to watch? Enter your email to create or restart your membership.</p>

                            <div className='flex flex-col py-5 md:flex-row h-full'>
                                <div className="relative flex flex-1 min-w-[20rem] ">
                                    <label className="z-10 pointer-events-none  px-2 py-1 text-[#8c8c8c] font-bold text-sm">Email address</label>
                                    <input type='text' className="absolute py-3 px-2 w-full pt-7 text-black outline-none"/>
                                </div>
                                <div className="flex-0 py-6 md:py-0">
                                    <button className="bg-[#E50914] py-1.5 h-full hover:bg-[#f40612] transition-all duration-200 ease-in-out font-medium px-5">Get Started {'>'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}