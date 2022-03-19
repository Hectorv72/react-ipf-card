import React, { useEffect, useState } from 'react'
import { QrReader } from 'react-qr-reader'

const Scanner = ({ onScan = null, ...props }) => {
  const [scan, setScan] = useState(null)
  const FormatString = (str) => {
    const regex = /\D/g
    const formated = str.replace(regex, '')
    return formated
  }

  const handleFormatScan = (read) => {
    if (read) {
      const splited = read.text.split('\n')

      const format = {
        name: splited[0].trim(),
        dni: FormatString(splited[1])
      }

      if (onScan !== null) {
        onScan(format)
      }
    }
  }

  useEffect(() => {
    if (scan) {
      handleFormatScan(scan)
    }
  }, [scan])

  return (
    <QrReader
      scanDelay={300}
      onResult={setScan}
      className={'d-flex justify-content-center'}
      // containerStyle={{ width: scanWidth }}
      // containerStyle={{ width: '60%' }}
      videoContainerStyle={{ width: '100%' }}
    />
  )
}

export default Scanner
