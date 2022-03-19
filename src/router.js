import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ScanPage, TestPage } from './pages'
const Routing = () => {
  // const session = useContext(SessionContext)[0]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScanPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  )
}

export default Routing
