import React from 'react'
import DehradunZoo from "../Img/DehradunZoo.jpg"

const Destination = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div>
                <div className='text-blue-800 text-3xl text-center'>Destination <span className='font-semibold'>For You</span></div>
                <div className='h-1 bg-blue-400 w-1/6 mx-auto'></div>
            </div>
            <div className='w-3/4 border-4 mx-auto flex justify-around items-center p-4 rounded-lg bg-slate-200'>
                <div className='p-2 border text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>Famous Places</div>
                <div className='p-2 border text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>Rivers</div>
                <div className='p-2 border text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>Temples</div>
                <div className='p-2 border text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>Monuments</div>
                <div className='p-2 border text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white hover:cursor-pointer'>Mosque</div>
            </div>
            <div className='w-4/5 border-4 mx-auto flex justify-evenly items-center p-2 rounded-lg'>
                <div>
                    <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div>
                    <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div>
                    <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div>
                </div>
                <div>

                    <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div> <div className='border-2 flex justify-center items-center gap-x-3 rounded-lg'>
                        <div>
                            <img
                                className='w-24 rounded-tl-lg rounded-bl-lg'
                                src={DehradunZoo}
                                alt="Dehradun Zoo" />
                        </div>
                        <div>
                            <div>Dehradun Zoo</div>
                            <div className='text-sm text-blue-400'>Read more</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
