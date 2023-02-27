import Header from "../Header/Header"
import { AiOutlineCheckCircle, AiOutlineCheck } from 'react-icons/ai'
import FirstPage from "./FirstPage"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import Footer from "../Footer/Footert"
const Signup = () => {
    return (
        <div>
            <Header />
            <div className="h-[80vh] border-t border-[#E6E6E6] px-32">
                <div className="flex justify-center">
                    <div className="border border-blue py-20 px-12">
                        <span>STEP 2 OF 3</span>
                        {/* <FirstPage /> */}
                        {/* <SecondPage /> */}
                        <ThirdPage />
                    </div>
                </div>
                
            </div>
            <div className="bg-[#F3F3F3]">
                <Footer />
            </div>
        </div>
    )
}

export default Signup