import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-black text-white y-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                  <div className='flex-1 mb-4 md:mb-0'>

                  <h3 className='text-2xl font-bold mb-2' >JABRI Raed </h3>
                  <p className='text-gray-400'>Full stack developer based in Tunisia, specializing in web and 
                    software development.
                  </p>
                  </div>
                  <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>

                      <input type="email" placeholder='Enter Email' 
                      className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600
                      focus:outline-none focus:border-green-400'/>
                      <button type='submit'
                      className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>
                        Subscribe
                      </button>
                    </form>
                  </div>

                </div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-raw'>
                  <p className='text-gray-400'>
                    &copy;{new Date().getFullYear()} JABRI Raed . All rigths reserved
                  </p>
                  <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="https://www.facebook.com/profile.php?id=100075714396901"
                    className='text-gray-400 hover:text-white text-2xl'>
                      <FaFacebook/>
                    </a>
                    <a href="https://www.linkedin.com/in/jabri-raed-843ba6228/"
                    className='text-gray-400 hover:text-white text-2xl'>
                      <FaLinkedin/>
                    </a>
                    <a href="https://github.com/raed123333"
                    className='text-gray-400 hover:text-white text-2xl'>
                      <FaGithub/>
                    </a>
                    <a href="https://www.instagram.com/with_rouda/"
                    className='text-gray-400 hover:text-white text-2xl'>
                      <FaInstagram/>
                    </a>
                    <a href="https://www.youtube.com/@With-rouda"
                    className='text-gray-400 hover:text-white text-2xl'>
                      <FaYoutube/>

                    </a>
                  </div>
                </div>


        </div>
        <br />
        <br />
        <br />
    </footer>
  )
}

export default Footer