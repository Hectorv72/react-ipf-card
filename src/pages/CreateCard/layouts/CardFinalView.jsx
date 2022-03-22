import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
import CardViewBack from './CardViewBack'
import CardViewFront from './CardViewFront'

const CardFinalView = ({ data, setData, previousStep, ...props }) => {
  const [flip, setFlip] = useState()
  const handleFlipCard = () => {
    setFlip(!flip)
  }
  return (
    <>
      <h4 className="text-center mb-4">Esta será tu tarjeta de presentación</h4>
      <Row className="mb-3">
        <Col xs={3}>
          <Row>
            <Col className="d-flex justify-content-center" xs={12}>
              <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' style={{ width: '150px' }} />
            </Col>
            <Col className="text-center" xs={12}>
              <label htmlFor="dni">Dni</label>
              <div id="dni" className="fw-bold">{data.dni || 'Esperando datos'}</div>
            </Col>
            <Col className="text-center mt-2" xs={12}>
              <button className="btn btn-outline-primary" onClick={handleFlipCard}>Flip Card</button>
            </Col>
          </Row>
        </Col>
        <Col xs={9}>
          <ReactCardFlip isFlipped={flip}>
            <CardViewFront data={data} />
            <CardViewBack data={data} />
          </ReactCardFlip>
        </Col>
      </Row>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={previousStep}>Volver</button>
        <button className="btn btn-primary" >Finalizar</button>
      </div>
    </>
  )
}

export default CardFinalView
