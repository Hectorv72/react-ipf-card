import React, { useState, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import StepWizard from 'react-step-wizard'
import CardSteps from './layouts/CardSteps'
import FinalView from './layouts/FinalView'
import './css/style.css'
// import user from '../resources/usuario.png'

const CreateCard = () => {
  const [data, setData] = useState({})
  const [alert, setAlert] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state) {
      const list = {
        name: location.state.name,
        dni: location.state.dni,
        degree: 'TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE MULTIPLATAFORMA',
        grade: '1ro',
        year_admission: '2021',
        birth_date: '',
        // another data
        about: '',
        sex: '',
        phone: '',
        knowledges: [],
        social: [],
        academic: []
      }
      setData({ ...list })
    } else {
      navigate('/scanner')
    }
  }, [])

  useEffect(() => {
    // console.log(data)
  }, [data])

  const hadleSaveStudent = async (e) => {
    e.preventDefault()
    try {
      const content = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          knowledges: JSON.stringify(data.knowledges),
          social: JSON.stringify(data.social),
          academic: JSON.stringify(data.academic)
        })
      }
      const response = await fetch('http://127.0.0.1:4000/students', content)
      const json = await response.json()
      if (!response.ok) {
        setAlert(<h3 className="text-center">{json.msg}</h3>)
      } else {
        setAlert(<h3 className="text-center text-success">Usuario creado con exito</h3>)
      }
    } catch (error) {
      setAlert(<h3 className="text-center">Error del servidor</h3>)
    }
  }
  const handleSetData = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <Container className="my-5">
      <Card >
        <Card.Body>
          <StepWizard>
            <CardSteps data={data} setData={handleSetData} />
            <FinalView data={data} saveStudent={hadleSaveStudent} />
          </StepWizard>
          {alert}
        </Card.Body>
      </Card >
    </Container >

  )
}

export default CreateCard
