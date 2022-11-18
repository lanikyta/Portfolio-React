import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Proyectos } from './pages/Proyectos'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
