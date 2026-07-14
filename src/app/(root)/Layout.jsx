import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

const mainLayout = ({children}) => {
  return (
   <>
   <Header/>
   {children}
   <Footer/>
   </>
  )
}

export default mainLayout

//layout.js / layout.jsx / layout.tsx
//page.js / page.jsx / page.tsx
//loading.js
//error.js
//not-found.js
//route.js
//template.js
//default.js

// ei file gulo nest js er in built file, egulo always lower case diye start krte hobe