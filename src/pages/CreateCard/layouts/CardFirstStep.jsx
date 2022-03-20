import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CardFirstStep = ({ nextStep, data, setData }) => {
  const handleNextStep = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="container">
      <h4>Vamos a configurar un nuevo usuario para esta tarjeta</h4>
      <Row className="mb-2">
        <Col>
          <label htmlFor="nombre">Nombre:</label>
          <label id="nombre" className='form-control'>{data.name || 'Esperando datos'}</label>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col>
          <label htmlFor="dni">Dni:</label>
          {/* <input className='form-control' disabled type='text' value={data.dni || 'Esperando datos'} /> */}
          <label id="dni" className='form-control'>{data.dni || 'Esperando datos'}</label>
        </Col>
        <Col>
          <label htmlFor="degree">Carrera:</label>
          <label id="degree" className='form-control'>{data.degree || 'Esperando datos'}</label>
        </Col>
      </Row>

      <form onSubmit={handleNextStep}>
        <Row className="mb-2">
          <Col>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" className="form-control" name="password" placeholder="contraseña para el nuevo usuario" onChange={setData} required />
          </Col>
          <Col>
            <label htmlFor="grade">Ciclo lectivo:</label>
            <select id="grade" className="form-select" name="grade" onChange={setData} value={data.grade || ''} required>
              <option value='' readOnly disabled>selecciona</option>
              <option value={'1ro'}>1ro</option>
              <option value={'2ro'}>2ro</option>
            </select>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Siguiente</button>
        </div>
      </form>
    </div>
  )
}

export default CardFirstStep
