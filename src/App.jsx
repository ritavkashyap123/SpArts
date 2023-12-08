import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Dashboard from './pages/dashboard/Dashboard'
import AcademyManagement from './pages/academy-management/AcademyManagement'
import Student from './pages/student/Student'
import FeePayment from './pages/fee-payment/FeePayment'
import Enquiries from './pages/enquiries/Enquiries'
import Coaches from './pages/coaches/Coaches'
import Schedule from './pages/schedule/Schedule'
import Settings from './pages/settings/Settings'
import Notification from './pages/notification/Notification'


function App() {

  return (

    <BrowserRouter>
      <Topbar />
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/academy-management' element={<AcademyManagement />} />
          <Route path='/student' element={<Student />} />
          <Route path='/fee-payment' element={<FeePayment />} />
          <Route path='/enquiries' element={<Enquiries />} />
          <Route path='/coaches' element={<Coaches />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default App
