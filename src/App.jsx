import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import NotFound from './views/NotFound'
import NewsArticle from './views/NewsArticle'
import DetailedArticle from './views/DetailedArticle'

function App() {

  return (    
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<NewsArticle />} />
        <Route path='/news/:id' element={<DetailedArticle/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>    
     </BrowserRouter>    
  )
}

export default App
