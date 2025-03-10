
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import PageHome from './components/PageHome'
import PageContacto from './components/PageContacto'


function App() {

  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="content p-3">
            <Routes>
              <Route path="/" element={<PageHome />} />
              <Route path="/contacto" element={<PageContacto />} />
            </Routes>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
