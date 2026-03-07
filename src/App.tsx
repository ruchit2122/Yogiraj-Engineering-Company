 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import CaseStudy from './Pages/CaseStudy'
import Contact from './Pages/Contact'
import NewsGallery from './Pages/NewsGallery'
import Products from './Pages/Products'
import ProductCategory from './Pages/ProductCategory'
import QltTstCrt from './Pages/QltTstCrt'
import Services from './Pages/Services'
import Sustainability from './Pages/Sustainability'
import { useLenis } from './hooks/useLenis'

function App() {
  // Initialize Lenis smooth scrolling
  useLenis()


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-gallery" element={<NewsGallery />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/quality-test-certificate" element={<QltTstCrt />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sustainability" element={<Sustainability />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
