import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-8 px-4 md:py-16'>
      <h3 className='text-orange-600 font-bold text-xl md:text-2xl text-center pt-4'>Quick Delivery App</h3>
      <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
        
        
        {/* Text Content */}
        <div className='flex flex-col justify-center'>
          <p className='font-bold text-[#00df9a]'>Get The App</p>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold py-2 text-[#df6100]'>
            Best Delivery App Ever
          </h1>
          <p className='text-neutral-900'>
            At TomYum Kitchen, we believe that every dish is more than just a meal—it's an exploration 
            of bold flavors and rich traditions. Whether you're seeking the comforting taste of home or 
            eager to experience the vibrant spices of Southeast Asia, we are here to guide your culinary 
            adventure. With fresh, authentic ingredients, mouthwatering recipes, and a passion for Thai 
            cuisine, TomYum Kitchen is your ultimate destination for discovering dishes that turn every bite 
            into a moment of excitement. Embark on a flavorful journey with us, and let your taste buds savor 
            the essence of Thailand.
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-md my-6 py-3 font-bold mx-auto md:mx-0'>
            Get Started
          </button>
        </div>
        {/* Image */}
        <img className='w-full max-w-[550px] mx-auto my-4' src='18157545.jpg' alt='h' />
      </div>
    </div>
  )
}

export default Delivery;
