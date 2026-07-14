import React from 'react'
import shopbannerImage from '../../app/assests/Images/shopbannerImage.jpg'
import Link from 'next/link'
const ShopBanner = () => {
    const shopList = [
        {
            id: 1,
            name: "vegetables",
            href : "/veggies"
        },
        {
            id: 2,
            name: "fruits",
            href : "/fruits"
        },
        {
            id: 3,
            name: "groceries",
            href : "/grocery"
        },
        {
            id: 4,
            name: "milk",
            href : "/milk"
        },
        {
            id: 5,
            name: "seeds",
            href : "/seeds"
        },
        {
            id: 6,
            name: "nuts",
            href : "/nuts"
        },
        {
            id: 7,
            name: "bakery",
            href : "/bakery"
        }
    ]
  return (
    <div className='w-full py-40 bg-no-repeat! bg-cover! bg-center! mb-25 flex flex-col justify-center items-center'
    style={{background:`url(${shopbannerImage.src})`}}
    >
    <h2 className='text-[60px] font-bold text-primary-black uppercase'>naturally fresh</h2>
    <ul className='flex gap-10 mt-7'>
        {
            shopList?.map((item)=>(
              <Link href={item.href}>
              <li key={item.id} className="uppercase text-[16px] font-medium text-primary-black relative after:content-[''] after:w-0 hover:after:w-full after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:duration-300 ">
            {item.name}
              </li>
              </Link>
            ))
        }
    </ul>
    </div>
  )
}

export default ShopBanner