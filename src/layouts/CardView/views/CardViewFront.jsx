import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CardViewFront = ({ data, ...props }) => {
  return (
    <Row className="gy-3 card p-2">

      <Col xs={12} className="mt-0">
        <label htmlFor="name">Nombre</label>
        <div id="name" className="fw-bold">{data.name || 'Esperando datos'}</div>
      </Col>

      <Col xs={12}>
        <Row>
          <Col xs={3} lg={4}>
            <label htmlFor="sex">Sexo</label>
            <div id="sex" className="fw-bold">{data.sex || 'Esperando datos'}</div>
          </Col>

          <Col xs={5} lg={4}>
            <label htmlFor="birth_date">Fecha de nacimiento</label>
            <div id="birth_date" className="fw-bold">{data.birth_date || 'Esperando datos'}</div>
          </Col>

          {
            data?.phone &&
            <Col xs={4} lg={4}>
              <label htmlFor="phone">Telefono</label>
              <div id="phone" className="fw-bold">{data.phone || 'Esperando datos'}</div>
            </Col>
          }
        </Row>
      </Col>

      <Col xs={12}>
        <Row>
          <Col xs={8} lg={4}>
            <label htmlFor="year_admission">Año de ingreso</label>
            <div id="year_admission" className="fw-bold">{data.year_admission || 'Esperando datos'}</div>
          </Col>

          <Col xs={4} lg={6}>
            <label htmlFor="grade">Ciclo lectivo</label>
            <div id="grade" className="fw-bold">{data.grade || 'Esperando datos'}</div>
          </Col>
        </Row>
      </Col>

      <Col xs={12}>
        <label htmlFor="degree">Carrera</label>
        <div id="degree" className="fw-bold">{data.degree || 'Esperando datos'}</div>
      </Col>

    </Row>
  )
}

export default CardViewFront
