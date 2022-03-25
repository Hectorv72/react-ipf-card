import React, { useEffect, useState } from 'react'

const InputImageSelect = () => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  // Generador de string
  const randomString = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const handleSetFile = (e) => {
    const { files } = e.target
    if (files.length > 0) {
      setFile(files[0])
    } else {
      setFile(null)
    }
  }

  const selectId = randomString(5)

  useEffect(() => {
    if (file) {
      // create the preview
      // const reader = new FileReader()
      // const url = reader.readAsDataURL(file[0])
      // console.log(url)
      const prev = URL.createObjectURL(file)
      setPreview(prev)
    }
  }, [file])

  return (
    <div className="d-flex justify-content-center">
      <input type="file" hidden onChange={handleSetFile} id={`input-image-select-${selectId}`}></input>
      <label htmlFor={`input-image-select-${selectId}`} style={{ width: '150px', height: '150px' }}>
        <img className="rounded-circle w-100 h-100" src={preview || ''} alt={`image-${selectId}`} />
      </label>
    </div>
  )
}

export default InputImageSelect
