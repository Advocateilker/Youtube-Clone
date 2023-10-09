import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineSearch, AiFillBell, AiFillVideoCamera } from 'react-icons/ai'

const Header = () => {

    const navigate=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const query = e.target[0].value;
        navigate(`/results?search_query=${query}`)
    }

    return (
        <header className=' flex justify-between items-center p-4 '>

            <Link to={'/'} className='flex items-center gap-[7px]'>
                <img className='w-[52px]' src="/youtube.png" />
                <h1 className=' text-[35px] hidden md:block '>Youtube</h1>
            </Link>

            <form onSubmit={handleSubmit} className=' flex items-center border rounded-[20px] border-gray-600 '>
                <input className=" bg-black rounded-[20px] px-3 py-1 outline-none  " type="search" />
                <button className='border-l px-2 h-full'>
                    <AiOutlineSearch />
                </button>
            </form>

            <div className='flex gap-3 text-xl cursor-pointer'>
                <AiFillBell />
                <AiFillVideoCamera />
            </div>

        </header>
    )
}

export default Header