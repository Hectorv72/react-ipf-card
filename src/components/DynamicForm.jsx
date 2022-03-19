import React, { useEffect, useState } from 'react'

const DynamicForm = (props) => {
  let {
    initCount = 1,
    min = 1,
    max = null,
    component: Component, // componente que se duplicará
    onChange = null, // retorna la lista de objetos de con los atributos de cada formulario
    buttonClass = 'btn btn-primary',
    buttonText = '+'
  } = props

  const [forms, setForms] = useState([])
  const [updated, setUpdated] = useState(null)
  const [deleted, setDeleted] = useState(null)
  const [data, setData] = useState([])

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

  // Funcion para crear un form
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
        // Verifica si el dato entrante es un objeto, de lo contrario crea un objeto con atributo del tipo de dato entrante
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
    // Verifica si existe un maximo y si la cantidad de formularios no excede el limite
    if (max && [...forms].length >= max) {
      return
    }
    const newForms = [...forms, createObjectForm()]
    setForms([...newForms])
  }

  // Elimina el formulario seleccionado
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

  // Inicio del componente
  useEffect(() => {
    // verifica que la cantidad de inicio no sea menor que el minimo
    initCount = initCount < min && min
    handleSetForms()
  }, [])

  // Se realiza cuando un formulario es actualizado con la funcion updateForm
  useEffect(() => {
    if (updated) {
      handleUpdateStateForm(updated)
    }
  }, [updated])

  // Se realiza cuando un formulario es eliminado con la funcion deleteForm
  useEffect(() => {
    if (deleted) {
      if ([...forms].length > min) {
        handleDeleteForm(deleted)
      }
      setDeleted(null)
    }
  }, [deleted])

  // Actualiza la lista de objetos del formulario
  useEffect(() => {
    handleUpdateData()
  }, [forms])

  // Ejecuta la acción de envio de datos
  useEffect(() => {
    if (data.length > 1) {
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
        <button onClick={handleAddForm} className={buttonClass}>{buttonText}</button>
      </div>
    </>
  )
}

export default DynamicForm
