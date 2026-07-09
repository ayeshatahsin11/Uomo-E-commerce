import Link from 'next/link'
import React from 'react'

const Subscribe = () => {
  return (
   <>
    <div className=' max-w-82.5'>
        <h2 className='text-[18px] font=medium uppercase text-white'>subscribe</h2>
        <p className='text-sm leading-6 mt-7 text-white'>Be the first to get the latest news about trends,
promotions, and much more!</p>
   <div className='relative mt-8'>
    <input type="email" name="email" id="email" placeholder='Your Email Address' className='w-82.5 h-16 pl-5 bg-white text-primary-black! placeholder:text-primary-black' />
    <button className='uppercase font-medium text-primary-black absolute top-5 right-5 cursor-pointer'>Join</button>
   </div>
    </div>
    <div id='download' className='flex items-center gap-12.5 mt-7'>

        <div className='flex max-w-33.75 items-center gap-3'>
            <Link href={''}>
            
<svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.207 23.7305C26.0547 23.3789 25.0195 22.5586 24.1211 21.2695C23.2227 19.9805 22.7734 18.5156 22.7734 16.9141C22.7734 15.4297 23.2031 14.082 24.043 12.8711C24.5117 12.1875 25.2539 11.4258 26.2695 10.5664C25.6055 9.74609 24.9219 9.08203 24.2383 8.61328C23.0273 7.77344 21.6406 7.34375 20.0781 7.34375C19.1211 7.34375 17.9883 7.57812 16.6992 8.00781C15.4102 8.45703 14.4727 8.67188 13.9063 8.67188C13.457 8.67188 12.5586 8.47656 11.2109 8.08594C9.84375 7.69531 8.71094 7.5 7.75391 7.5C5.50781 7.5 3.67188 8.4375 2.20703 10.3125C0.742188 12.207 0 14.6289 0 17.6172C0 20.8203 0.976563 24.082 2.87109 27.4414C4.80469 30.8008 6.73828 32.5 8.75 32.5C9.39453 32.5 10.2539 32.2852 11.3281 31.8359C12.3828 31.4063 13.3203 31.1914 14.1016 31.1914C14.9023 31.1914 15.8984 31.3867 17.0508 31.8164C18.2227 32.2266 19.1211 32.4414 19.7852 32.4414C21.4453 32.4414 23.125 31.1719 24.8047 28.6133C25.9375 26.9141 26.7188 25.2734 27.207 23.7305ZM19.8633 0.820312C19.8633 0.683593 19.8438 0.566405 19.8438 0.429687C19.8242 0.312499 19.7852 0.17578 19.7461 -2.38419e-06C17.4805 0.527342 15.8398 1.48437 14.8633 2.89062C13.8867 4.29687 13.3789 5.97656 13.3398 7.91015C14.2578 7.83203 14.9219 7.71484 15.3711 7.57812C16.0742 7.34375 16.7773 6.875 17.4805 6.17187C18.3008 5.35156 18.9063 4.45312 19.2969 3.47656C19.668 2.51953 19.8633 1.62109 19.8633 0.820312Z" fill="white"/>
</svg>

            </Link>
            <h2>Get it on Apple Store</h2>
        </div>
        <div className='flex max-w-33.75 items-center gap-3'>
            <Link href={''}>
            

<svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5781 13.7109L4.6875 0.761719L21.0938 10.1953L17.5781 13.7109ZM1.28906 0C0.429688 0.429687 0 1.11328 0 2.05078V27.9492C0 28.8867 0.429688 29.5703 1.28906 30L16.3477 15L1.28906 0ZM26.1914 13.2422L22.7344 11.1914L18.9258 15L22.7344 18.75L26.25 16.7578C26.7969 16.3672 27.0508 15.7812 27.0117 15C27.0117 14.2188 26.7383 13.6328 26.1914 13.2422ZM4.6875 29.2383L21.0938 19.8047L17.5781 16.2891L4.6875 29.2383Z" fill="white"/>
</svg>

            </Link>
            <h2>Get it on Google Play</h2>
        </div>

    </div>
   </>
  )
}

export default Subscribe


