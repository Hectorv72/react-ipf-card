import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CardFirstStep = ({ nextStep, data, setData }) => {
  const handleNextStep = (e) => {
    e.preventDefault()
    nextStep()
  }
  // const deegres = [
  //   'TECNICATURA SUPERIOR EN DESARROLLO DE SOFTWARE MULTIPLATAFORMA',
  //   'TECNICATURA SUPERIOR EN MECATRÓNICA',
  //   'TECNICATURA SUPERIOR EN QUÍMICA INDUSTRIAL'
  // ]

  return (
    <div className="container-fluid px-1">
      <h4>Hola! veo que eres nuevo, vamos a configurar un usuario para tu tarjeta</h4>
      <Row className="mb-2">
        <Col xs={12} sm={8}>
          <label htmlFor="nombre">Nombre:</label>
          <label id="nombre" className='form-control'>{data.name || 'Esperando datos'}</label>
        </Col>
        <Col>
          <label htmlFor="dni">Dni:</label>
          <label id="dni" className='form-control'>{data.dni || 'Esperando datos'}</label>
        </Col>
      </Row>

      <Row className="gx-3 mb-2">
        <Col xs={7} sm={10}>
          <label htmlFor="degree">Carrera:</label>
          {/* <select id="degree" name="degree" onChange={setData} value={data.degree || ''} className="form-select" required>
            <option value='' readOnly disabled>selecciona</option>
            {
              deegres.map(
                (element, key) =>
                  <option key={`option-degree-${key + 1}`} value={element}>{element}</option>
              )
            }
          </select> */}
          <label id="degree" className='form-control' style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}>{data.degree || 'Esperando datos'}</label>
        </Col>
        <Col xs={5} sm={2}>
          <label htmlFor="grade">Ciclo lectivo:</label>
          <select id="grade" className="form-select" name="grade" onChange={setData} value={data.grade || ''} required>
            <option value='' readOnly disabled>selecciona</option>
            <option value={'1ro'}>1ro</option>
            <option value={'2ro'}>2ro</option>
          </select>
        </Col>
      </Row>

      <form onSubmit={handleNextStep}>
        <Row className="mb-2">
          <Col>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" className="form-control" name="password" placeholder="contraseña para el nuevo usuario" onChange={setData} required />
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Siguiente</button>
        </div>
      </form>
    </div >
  )
}

export default CardFirstStep
