import React, { useEffect, useState } from 'react'

const DynamicForm = ({ initCount = 1, component: Component, onChange = null }) => {
  const [forms, setForms] = useState([])
  const [updated, setUpdated] = useState(null)
  const [deleted, setDeleted] = useState(null)
  const [data, setData] = useState([])

  const randomString = (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }

  const createObjectForm = () => {
    const id = randomString(8)
    return {
      id,
      state: {},
      form: <Component key={`dynamic-form-${id}`} updateForm={(data) => { setUpdated({ id, data }) }} deleteForm={() => { setDeleted(id) }} />
    }
  }

  // Actualiza el estado del formulario
  const handleUpdateStateForm = ({ id, data }) => {
    const update = [...forms].map(element => {
      if (element.id === id) {
        element.state = typeof data === 'object' ? { ...data } : { [typeof data]: data }
      }
      return element
    })
    setForms([...update])
  }

  // Crea la cantidad de formularios
  const handleSetForms = () => {
    const set = [...Array(initCount).keys()].map(
      _ => createObjectForm()
    )
    setForms([...set])
  }

  // Agrega un nuevo formulario
  const handleAddForm = () => {
    const newForms = [...forms, createObjectForm()]
    setForms([...newForms])
  }

  const handleDeleteForm = (id) => {
    const survivors = []
    forms.forEach(element => { if (element.id !== id) { survivors.push(element) } })
    setForms([...survivors])
  }

  // Actualiza los datos que son devueltos en un objeto
  const handleUpdateData = () => {
    // console.log('data:')
    setData([...forms].map(element => element.state))
  }

  useEffect(() => {
    handleSetForms()
  }, [])

  useEffect(() => {
    if (updated) {
      handleUpdateStateForm(updated)
    }
  }, [updated])

  useEffect(() => {
    if (deleted) {
      if ([...forms].length > 1) {
        handleDeleteForm(deleted)
      }
      setDeleted(null)
    }
  }, [deleted])

  useEffect(() => {
    handleUpdateData()
  }, [forms])

  useEffect(() => {
    if (data.length > 0) {
      if (onChange !== null) {
        onChange(data)
      }
    }
  }, [data])

  return (
    <>
      {
        forms.map(
          element =>
            element.form
        )
      }
      <div>
        <button onClick={handleAddForm} className="btn btn-primary">+</button>
      </div>
    </>
  )
}

export default DynamicForm
