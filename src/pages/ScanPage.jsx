import React, { useState } from 'react'
// import logo from './logo.svg'
import '../App.css'
import { Scanner } from '../components'

const ScanPage = () => {
  const [state, setState] = useState(['a', 'b'])

  const handleScanQr = (scan) => {
    setState([...state, scan.name])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '400px' }}>
          <Scanner onScan={handleScanQr} />
          <p>{state.toString()}</p>
        </div>
      </header>
    </div>
  )
}

export default ScanPage
