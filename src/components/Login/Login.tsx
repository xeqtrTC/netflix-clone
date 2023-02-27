
const Login = () => {
    return (
            <div className="h-[100vh] flex items-center flex-col object-cover" style={{ backgroundImage: 'url(https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg)'}}>
                <div className="md:w-[450px] pt-[40px] h-[70%] m-auto items-center text-white bg-black/80 px-[60px] pb-[68px]">
                    <div>
                        <span className="text-4xl font-medium">Sign In</span>
                    </div>
                    <div className="py-5 space-y-6">
                        <div>
                            <input type='text' placeholder="Email or phone number" className="bg-[#333333] py-3.5 px-5 rounded-md w-full outline-none text-[#8c8c8c] placeholder:text-[#8c8c8c]" />
                        </div>
                        <div>
                            <input type='text' placeholder="Password" className="bg-[#333333] py-3.5 px-5 rounded-md w-full outline-none text-[#8c8c8c] placeholder:text-[#8c8c8c]" />
                        </div>
                        <div>
                            <button className="bg-[#e50914] w-full text-md py-4 rounded-md font-medium">Sign In</button>
                        </div>
                    </div>
                    <div>
                        <span className="text-[#8c8c8c]">New to Netflix? </span>
                        <span className="text-white">Sign up now.</span>
                    </div>
                </div>
                <div className="bg-black/80 bottom-0 w-full ">
                    <div className="w-[50%] m-auto py-10 px-3 text-[#737373]">
                        <p className="hover:underline cursor-pointer">Questions? Contact us?</p>
                        <div className="py-5 grid-cols-4 grid text-sm">
                            <div className="flex flex-col gap-3">
                                <span className="hoverFooter">FAQ</span>
                                <span className="hoverFooter">Cookie Preferences</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="hoverFooter">Help Center</span>
                                <span className="hoverFooter">Corporate Information</span> 
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="hoverFooter">Terms of Use</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="hoverFooter">Privacy</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default Login;