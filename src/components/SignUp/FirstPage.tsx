import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai"

const FirstPage = () => {
    return (
        <div className="flex flex-col w-[20rem] text-[#333333]">
            <div className="flex justify-center py-4">
                <AiOutlineCheckCircle className="text-[#e50914] w-10 h-10" />
            </div>
            <div className="text-center">
                <p className="text-4xl font-medium">Choose your plan</p>
            </div>
            <div className="flex flex-col py-5 space-y-4 text-xl px-1">
                <div className="flex">
                    <AiOutlineCheck className="w-7 h-7 text-[#e50914] mr-2" />
                    <span> No commitments, cancel anytime. </span>
                </div>
                <div className="flex">
                    <AiOutlineCheck className="w-7 h-7 text-[#e50914] mr-2"  />
                    <span>Everything on Netflix for one low price.</span>
                </div>
                <div className="flex">
                    <AiOutlineCheck className="w-7 h-7 text-[#e50914] mr-2"  />
                    <span>Unlimited viewing on all your devices.</span>
                </div>
            </div>
            <div className="py-6">
                <button className="button">Next</button>
            </div>
        </div>
    )
}

export default FirstPage