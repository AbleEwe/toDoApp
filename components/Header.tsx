'use client'

import Image from "next/image"
import { MagnifyingGlassCircleIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import Avatar from "react-avatar"

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image 
        src='https://links.papareact.com/c2cdd5'
        alt='Trello Logo'
        width={300}
        height={100}
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
            <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
              <MagnifyingGlassCircleIcon className="size-6 text-gray-400"/>
                <input type="text" placeholder="Search" className="flex-1 outline-none p-2"/>
                <button type="submit" hidden>Search</button>
            </form>
            <Avatar name="Diego Suarez" round color="#0055D1"/>
        </div>
      </div>
      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center text-sm font-light p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block size-10 text-[#0055D1] mr-1"/>
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  )
}

export default Header