import React from 'react'
import {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1700px] m-auto px-4 bg-[#24262b]'>
    <div className='py-16 px-4 grid lg:grid-cols-3 gap-8  text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-orange-500'>TomYum</h1>
            <p>
            At TomYum Kitchen, every meal is a gateway to an unforgettable journey of flavors. 
            Ready to embark on your next delicious journey?
            </p>
            <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>

            <h6 className='font-medium text-[#00df9a] text-lg '>Location</h6>
            <ul>
            <li className='py-2 text-sm'>New York</li>
            <li className='py-2 text-sm'>Usa</li>
            <li className='py-2 text-sm'>Bangladesh</li>
            <li className='py-2 text-sm'>Canada</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#00df9a] text-lg'>Shops</h6>
            <ul>
            <li className='py-2 text-sm'>Bangladeshi Food</li>
            <li className='py-2 text-sm'>Indian Food Shop</li>
            <li className='py-2 text-sm'>Import Shop Corner</li>
            <li className='py-2 text-sm'>World Top Food</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#00df9a] text-lg'>Links</h6>
            <ul>
            <li className='py-2 text-sm'>Contact Us</li>
            <li className='py-2 text-sm'>About Us</li>
            <li className='py-2 text-sm'>Shipping</li>
            <li className='py-2 text-sm'>Privacy</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-[#00df9a] text-lg'>Follow Us</h6>
            <ul>
            <li className='py-2 text-sm'><FaFacebookSquare size={25}/></li>
            <li className='py-2 text-sm'><FaInstagram size={25}/></li>
            <li className='py-2 text-sm'><FaTwitterSquare size={25}/></li>
            <li className='py-2 text-sm'><FaGithubSquare size={25}/></li>
            </ul>
          </div>

        </div>
    </div>

</div>
  )
}

export default Footer
