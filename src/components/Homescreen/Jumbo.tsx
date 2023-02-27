import junk from '../jsonFiles/toys.json';

const Jumbo = () => {
    return (
        <div>
            {
                junk.map((item) => {
                    const { id, row, title, subtitle, img } = item;
                    console.log(row);
                    return (
                        <div className='px-[70px] py-[20px]   border-b-8 border-[#222222]' key={id}>
                            <div className={`w-[90%] md:w-[50%] m-auto p-5 flex flex-col ${row === 'flex-row-reverse' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                                <div className="flex-1">
                                    <p className="text-5xl">{title}</p>
                                    <p className="text-xl py-6">{subtitle}.</p>
                                </div>
                                <div className="flex-1 px-5">
                                    <img src={img} />
    
                                </div>
                            </div>
                        </div>
                    )
                })
            }    
        </div>
    )
}

export default Jumbo