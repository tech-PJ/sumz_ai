import React from 'react'
import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
        <button type='button'
        onClick={(e)=>window.open('http://github.com/tech-pj')}
        className='black_btn'
        >
            GitHub
        </button>
        </nav>
        <h1 className='head_text'>
            Summarize Articles with <br
            className='max-md:hidden'/>
            <span
            className='blue_gradient'>
                OpenAI GPT-4
            </span>
        </h1>
        <h2 className='desc'>
            An open-source article summarizer which will Simplify your reading
            , transform lengthy articles into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero