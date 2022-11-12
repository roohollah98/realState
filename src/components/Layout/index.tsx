import React,{PropsWithChildren} from 'react'
import Footer from './Footer'
import Header from './Header'
import './layout.css'
const Layout = (props:PropsWithChildren) => {
 
  return (
    <>
    <Header/>
    {props.children}
    <Footer/>
    </>
  )
}

export default Layout