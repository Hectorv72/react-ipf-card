/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const CardSecondStep = ({ nextStep, previousStep, data, setData }) => {
  const sexs = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' },
    { value: 'N', label: 'No binario' }
  ]
  // const [tags, setTags] = useState([])
  return (
    <div className="container">
      <h4>Necesitamos saber más sobre ti...</h4>
      <form>

        <Row className="mb-3">

          <Col xs={6} className="mb-3" >
            <label htmlFor="nombre">Sexo:</label>
            <select defaultValue={data.sex || ''} className="form-select">
              <option disabled readOnly>Seleccione</option>
              {
                sexs.map(
                  ({ value, label }, key) =>
                    <option key={'sex-option-' + key} value={value}>{label}</option>
                )
              }
            </select>
          </Col>

          <Col xs={6} className="mb-3" >
            <label htmlFor="nombre">Telefono:</label>
            <input name="phone" onChange={setData} type="tel" className="form-control" value={data.phone || ''} />
          </Col>

          <Col xs={12} className="mb-3">
            <label htmlFor="about">Sobre mi:</label>
            <textarea id="about" className="form-control" defaultValue={data.about || ''}></textarea>
          </Col>

        </Row>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={previousStep}>Volver</button>
          <button type="button" className="btn btn-primary" onClick={nextStep}>Siguiente</button>
        </div>
      </form>

    </div>
  )
}

export default CardSecondStep