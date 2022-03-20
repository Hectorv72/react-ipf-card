import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import StepWizard from 'react-step-wizard'
import CardFirstStep from './layouts/CardFirstStep'
import CardSecondStep from './layouts/CardSecondStep'
import CardThirdStep from './layouts/CardThirdStep'
// import user from '../resources/usuario.png'

const CreateCard = () => {
  const [data, setData] = useState({})

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state) {
      const list = {
        name: location.state.name,
        dni: location.state.dni,
        degree: 'DESARROLLADOR DE SOFTWARE MULTIPLATAFORMA',
        grade: ''
      }
      setData({ ...list })
    } else {
      navigate('/scanner')
    }
  }, [])
  // const hadleSaveStudent = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const content = {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ ...data })
  //     }
  //     const response = await fetch('http://127.0.0.1:4000/students', content)
  //     const json = await response.json()
  //     if (!response.ok) {
  //       setAlert(<h3 className="text-center">{json.msg}</h3>)
  //     } else {
  //       setAlert(<h3 className="text-center text-success">Usuario creado con exito</h3>)
  //     }
  //   } catch (error) {
  //     setAlert(<h3 className="text-center">Error del servidor</h3>)
  //   }
  // }
  const handleSetData = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <Container className="my-2">
      <Card>
        <Card.Body>
          <Row>
            <Col xs={12} md={3} className="d-flex justify-content-center align-items-center">
              {/* <img alt="aa" src={user} style={{ width: '100%' }} /> */}
              <img alt="ipf" src={'https://www.ipf.edu.ar/img/logo_institucional.jpg'} style={{ width: '200px' }} />
            </Col>
            <Col>
              <StepWizard >
                <CardFirstStep data={data} setData={handleSetData} />
                <CardSecondStep data={data} setData={handleSetData} />
                <CardThirdStep data={data} setData={handleSetData} />
              </StepWizard>
            </Col>
          </Row>
          <Col>
          </Col>
        </Card.Body>
      </Card>
    </Container>

  )
}

export default CreateCard
