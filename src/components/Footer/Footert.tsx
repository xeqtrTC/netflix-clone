


const Footer = () => {
    return (
        <div className="m-auto py-10 px-3 text-[#737373]">
            <p className="hover:underline cursor-pointer">Questions? Contact us?</p>

            <div className="py-5 grid-cols-4 grid text-sm">
                <div className="flex flex-col gap-3">
                    <span className="hoverFooter">FAQ</span>
                    <span className="hoverFooter">Investor Relations</span>
                    <span className="hoverFooter">Privacy</span>
                    <span className="hoverFooter">Speed Test</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="hoverFooter">Help Center</span>
                    <span className="hoverFooter">Jobs</span>
                    <span className="hoverFooter">Cookie Preferences</span>
                    <span className="hoverFooter">Legal Notices</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="hoverFooter">Account</span>
                    <span className="hoverFooter">Ways to Watch</span>
                    <span className="hoverFooter">Corporate Information</span>
                    <span className="hoverFooter">Only on Netflix</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="hoverFooter">Media Center</span>
                    <span className="hoverFooter">Terms of Use</span>
                    <span className="hoverFooter">Contact Us</span>
                </div>
            </div>
            <div className="py-3">
                <span className='text-sm'>Netflix Montenegro</span>
            </div>
        </div>
    )   
}

export default Footer