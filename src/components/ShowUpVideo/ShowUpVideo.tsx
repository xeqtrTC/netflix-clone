import ShowVideo from "../ShowVideo/ShowVideo"
import { useState } from 'react'
import { propsFetchData, propsForVideo, statesForVideo } from "../Hooks/typeOfInterfaces"
import { AiOutlineClose } from "react-icons/ai"
import useStateContext from "../Hooks/useStateContext"

const ShowUpVideo = () => {
    const { forVideo, errorValue, setLoadAndVideo } = useStateContext();
    const [loading, setLoading] = useState<boolean>(true)
    const { videoId, title, description}: statesForVideo = forVideo;
    let content = null;
    
    if(errorValue) {
        content = (
            <div className="fixed bg-black/80 py-32 w-full h-[100vh] flex justify-center ">
                <div className="absolute top-0 right-5 p-5">
                    <AiOutlineClose  className="text-white w-8 h-8 cursor-pointer" onClick={setLoadAndVideo}/>
                </div>
                <div className='w-[90%] md:w-[40%] rounded-lg overflow-y-scroll scrollbar' >
                    <div className="bg-[#111] text-white p-10 ">
                        <p className="font-medium text-4xl text-white">Error broke up</p>
                    </div>
                </div>
            </div>
        )
    }

    if(forVideo.description && forVideo.title) {
        content = (
            <div className="fixed bg-black/80 py-32 w-full h-[100vh] flex justify-center ">
                <div className="absolute top-0 right-5 p-5">
                    <AiOutlineClose  className="text-white w-8 h-8 cursor-pointer" onClick={setLoadAndVideo}/>
                </div>
                <div className='w-[90%] md:w-[40%] rounded-lg overflow-y-scroll scrollbar' >
                    <div className="w-full bg-black rounded-lg">
                        <ShowVideo setLoading={setLoading} loading={loading} videoId={videoId} /> 
                    </div>
                    <div className="bg-[#111] text-white p-10 ">
                        <p className="font-medium text-4xl">{title}</p>
                        <div className="py-5">
                            <span className="font-medium">{description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return content;  
}

export default ShowUpVideo