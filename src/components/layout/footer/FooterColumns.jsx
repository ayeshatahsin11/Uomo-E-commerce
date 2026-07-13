

import React from 'react'
import ColumnDesgin from './ColumnDesgin';

const FooterColumns = () => {
  const footerData = [
    {
      id: 1,
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Affiliates", href: "/affiliates" },
        { label: "Blog", href: "/blog" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: 2,
      title: "Shop",
      items: [
        { label: "New Arrivals", href: "/shop/new-arrivals" },
        { label: "Accessories", href: "/shop/accessories" },
        { label: "Men", href: "/shop/men" },
        { label: "Women", href: "/shop/women" },
        { label: "Shop All", href: "/shop" },
      ],
    },
    {
      id: 3,
      title: "Help",
      items: [
        { label: "Customer Service", href: "/help/customer-service" },
        { label: "My Account", href: "/account" },
        { label: "Find a Store", href: "/find-a-store" },
        { label: "Legal & Privacy", href: "/legal" },
        { label: "Contact", href: "/contact" },
        { label: "Gift Card", href: "/gift-card" },
      ],
    },
  ];

  return (
    <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-42 mt-10 md:mt-0'>
      {footerData?.map((item) => (
        <ColumnDesgin
          key={item.id}
          title={item.title}
          footerlinks={item.items}
        />
      ))}
    </div>
  )
}

export default FooterColumns