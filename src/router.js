import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ScanPage, TestPage, CreateCard } from './pages'
const Routing = () => {
  // const session = useContext(SessionContext)[0]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScanPage />} />
        <Route path="/scanner" element={<ScanPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/create" element={<CreateCard />} />
      </Routes>
    </Router>
  )
}

export default Routing
