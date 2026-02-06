import './App.css'
import { ContentProvider } from './engine/ContentEngine'
import Navbar from './components/Navbar'
import CTAManager from './components/CTAManager'
import AlertBanner from './components/AlertBanner'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Admissions from './pages/Admissions'
import Academics from './pages/Academics'
import Books from './pages/Books'
import Staff from './pages/Staff'
import Gallery from './pages/Gallery'
import News from './pages/News'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
  return (
    <ContentProvider>
      <div className="app-shell">
        <Navbar />
        <AlertBanner />
        <div className="layout">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/books" element={<Books />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <aside>
            <CTAManager />
            <div className="card" style={{marginTop:12}}>
              <h4 style={{marginTop:0}}>Quick Links</h4>
              <ul style={{paddingLeft:18,color:'var(--muted)'}}>
                <li><a href="/admissions">Admissions</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </aside>
        </div>
        <Footer />
      </div>
    </ContentProvider>
  )
}

export default App
