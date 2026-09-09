import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import Events from './pages/Events'
import Crews from './pages/Crews'
import Gallery from './pages/Gallery'
import Partners from './pages/Partners'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novyny" element={<News />} />
          <Route path="/podiyi" element={<Events />} />
          <Route path="/ekipazhi" element={<Crews />} />
          <Route path="/galereya" element={<Gallery />} />
          <Route path="/partnery" element={<Partners />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
