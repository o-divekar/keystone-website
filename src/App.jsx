import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Team from './pages/Team'
import Catalogue from './pages/Catalogue'
import { About, Industries, Quality, Gallery, Contact } from './pages/InfoPages'

function RouteFrame(){const location=useLocation();return <AnimatePresence mode="wait"><motion.main key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.22}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/products" element={<Products/>}/><Route path="/products/:slug" element={<ProductDetail/>}/><Route path="/team" element={<Team/>}/><Route path="/catalogue" element={<Catalogue/>}/><Route path="/industries" element={<Industries/>}/><Route path="/quality" element={<Quality/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></motion.main></AnimatePresence>}
export default function App(){return <><Navbar/><RouteFrame/><Footer/></>}