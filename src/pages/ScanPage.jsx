import React from 'react'
import { useNavigate } from 'react-router-dom'
// import logo from './logo.svg'
import '../App.css'
import { Scanner } from '../components'

const ScanPage = () => {
  const navigate = useNavigate()
  // const [state, setState] = useState(['a', 'b'])

  const handleOnScanQr = async (scan) => {
    // setState([...state, scan.name])
    try {
      const response = await fetch(`http://127.0.0.1:4000/students/dni/${scan.dni}`)
      const json = await response.json()
      console.log(response)
      console.log(json)
      if (response.ok) {
        navigate(`/info/${scan.dni}`)
      } else if (response.status === 400) {
        navigate('/create', { state: { ...scan } })
      }
    } catch (error) {
      console.log(error)
    }

    // console.log(scan)
    // navigate(`/info/${scan.dni}`, { state: { ...scan } })

    // navigate('/create', { state: { ...scan } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '600px' }}>
          <Scanner onScan={handleOnScanQr} />
          {/* <p>{state.toString()}</p> */}
        </div>
      </header>
    </div>
  )
}

export default ScanPage
