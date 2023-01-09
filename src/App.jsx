import { React } from 'react'
import LoginPage from './pages/loginpage'
import PendaftaranPage from './pages/pendaftaranpage'
import RegisterPage from './pages/registerpage'
import DashboardPage from './pages/dashboardpage'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/pendaftaran' element={<PendaftaranPage />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </>
  )
}

export default App
