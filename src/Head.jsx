import React, { useState } from 'react'

const Head = ({ addTasks }) => {
    const [input, setInput] = useState("");

    const sumbitHandler = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        addTasks(input);
        setInput('')
    }


    return (
        <div
            className='bg-white  transition-all h-fit w-full lg:w-full py-2 rounded-xl  px-2 lg:h-fit  '>
            <div
                className='flex flex-col'>
                <div
                    className='flex px-5 justify-between '>
                    <h2
                        className='text-2xl py-1 font-bold text-purple-700 font-sarif '>TODO
                    </h2>
                </div>
                <form
                    onSubmit={(e) => {
                        sumbitHandler(e)
                    }
                    } >
                    <div
                        className=' text-gray-400 flex px-5 py-2 justify-between'>
                        <input onChange={(e)=>setInput(e.target.value)}
                    
                            value={input}
                            className='border-purple- hover:scale-105 transition-all text-purple-400 outline-none hover:bg-fuchsia-50 border-2  rounded p-2 h-9 lg:w-3/4 w-2/3 mr-1' placeholder='Enter Your Todo Task' type="text" />
                        <button
                            className='h-9 px-5 bg-purple-500 rounded-xl hover:bg-fuchsia-700 flex items-center hover:scale-105 text-l font-bold text-white transition-all'>Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Head
