import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ScanPage, TestPage, CreateCard, PageCard } from './pages'
const Routing = () => {
  // const session = useContext(SessionContext)[0]

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScanPage />} />
        <Route path="/scanner" element={<ScanPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/info/:dni" element={<PageCard />} />
      </Routes>
    </Router>
  )
}

export default Routing
