
const ThirdPage = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <span className="text-2xl">Create a password to start your membership</span>
                <span>Just a few more steps and you're done!</span>
                <span>We hate paperwork, too.</span>
            </div>
            <div className="flex flex-col py-2 space-y-2">
                <input type='text' placeholder="Email" className='py-4 px-3 border border-[#8C8C8C] outline-none placeholder:text-[#8C8C8C]'/>
                <input type='text' placeholder="Add a password" className='py-4 px-3 border border-[#8C8C8C] outline-none placeholder:text-[#8C8C8C]'/>
            </div>
            <div className="py-2">
                <button className="button">Register</button>
            </div>
        </div>
    )
}

export default ThirdPage