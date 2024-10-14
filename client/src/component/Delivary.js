import React from 'react'

const Delivary = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
         <h3 className='text-orange-600 font-bold text-2xl text-center'>Quick Delivery App</h3>
         <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
           
            <div className='flex flex-col justify-center py-16'>
                <p className=' font-bold text-[#00df9a] '>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#df6100]'>Best Delivary App Ever</h1>
                <p className='from-neutral-600'>At TomYum Kitchen, we believe that every dish is more than just a meal—it's an exploration of bold flavors and rich traditions. Whether you're seeking the comforting taste of home or eager to experience the vibrant spices of Southeast Asia, we are here to guide your culinary adventure. With fresh, authentic ingredients, mouthwatering recipes, and a passion for Thai cuisine, TomYum Kitchen is your ultimate destination for discovering dishes that turn every bite into a moment of excitement. Embark on a flavorful journey with us, and let your taste buds savor the essence of Thailand.</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md  my-6 mx-auto md:mx-0 py-3 font-bold'>Get Started</button>
                
            </div>
            <img className='w-[550px] mx-auto my-16 ' src='18157545.jpg' alt='h' />
        </div>

      
    </div>
  )
}

export default Delivary
