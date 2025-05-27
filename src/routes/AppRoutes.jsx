import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Houses from '../pages/Houses'
import Designs from '../pages/Designs'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import FAQs from '../pages/FAQs'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/houses" element={<Houses />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/faqs" element={<FAQs />} />
    </Routes>
  )
}

export default AppRoutes