import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import Loginpage from './pages/Loginpage.jsx'
import Homepage from './pages/Homepage.jsx'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>} >
        <Route index element={<Homepage/>} />
        <Route path='/login' element={<Loginpage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
