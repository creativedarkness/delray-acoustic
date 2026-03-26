import { Routes, Route } from 'react-router'
import Navbar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
// import Music from './pages/Music.jsx'
import Schedule from './pages/Schedule.jsx'
import About from './pages/About.jsx'
import './App.css'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/music" element={<Music />} /> */}
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
