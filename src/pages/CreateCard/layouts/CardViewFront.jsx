import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CardViewFront = ({ data, ...props }) => {
  return (
    <Row className="gy-3">

      <Col xs={12}>
        <label htmlFor="name">Nombre</label>
        <div id="name" className="fw-bold">{data.name || 'Esperando datos'}</div>
      </Col>

      <Col xs={6} lg={2}>
        <label htmlFor="sex">Sexo</label>
        <div id="sex" className="fw-bold">{data.sex || 'Esperando datos'}</div>
      </Col>

      <Col xs={6} lg={3}>
        <label htmlFor="phone">Telefono</label>
        <div id="phone" className="fw-bold">{data.phone || 'Esperando datos'}</div>
      </Col>

      <Col xs={6} lg={3}>
        <label htmlFor="year_entry">Año de ingreso</label>
        <div id="year_entry" className="fw-bold">{data.year_entry || 'Esperando datos'}</div>
      </Col>

      <Col xs={6} lg={3}>
        <label htmlFor="grade">Ciclo lectivo</label>
        <div id="grade" className="fw-bold">{data.grade || 'Esperando datos'}</div>
      </Col>

      <Col xs={12}>
        <label htmlFor="degree">Carrera</label>
        <div id="degree" className="fw-bold">{data.degree || 'Esperando datos'}</div>
      </Col>

    </Row>
  )
}

export default CardViewFront
