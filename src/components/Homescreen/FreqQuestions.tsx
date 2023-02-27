import { useState, MouseEvent } from 'react'
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { freqStates, propsForFreqQuestions } from '../Hooks/typeOfInterfaces'
import freqs from '../jsonFiles/freqs.json';


const FreqQuestions = () => {

   const [idForAsk, setIdForAsk] = useState<number>(0);
    const changeState = (id: number) => {
        
        idForAsk === id ? (
            setIdForAsk(0)
        ) : (
            setIdForAsk(id)
        )

    }

    const content = (
        <div className='px-[70px] py-[20px]   border-b-8 border-[#222222]'>
        
        <p className="text-center text-5xl py-10">Frequently Asked Questions</p>

            <div className="py-2 flex flex-col w-[100%] md:w-[40%] m-auto select-none cursor-pointer">
                {
                    freqs.map((item) => {
                        const { id, body, header } = item;
                        return (
                            <div className="py-1" key={id}>
                                <div className="freqAskFirst" id={'whatNetflix'} onClick={() => changeState(id)}>
                                    <div className='pointer-events-none'>
                                        <span className='text-2xl'>{header}</span>
                                    </div>
                                    <div >
                                        {
                                            idForAsk === id ? (
                                                <AiOutlineClose className='h-7 w-7' />
                                                ) : (
                                                    <AiOutlinePlus className='h-7 w-7' />
                                                    )
                                                }
                                    </div>
                                </div>
                                {
                                    idForAsk === id ? (
                                        <div className="freqAsk">
                                            <span>{body}</span>
                                        </div>
                                    ) : null
                                }
                            </div>

                        )
                    })   
                }
            </div>
        </div>
    )
    return content;
}

export default FreqQuestions