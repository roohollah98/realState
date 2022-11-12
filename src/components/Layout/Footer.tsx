import React,{useContext} from 'react'
import { ThemeContext } from '../context/themeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <footer className={`${darkMode &&"dark"}`}>all rights reserved.</footer>
  )
}

export default Footer