import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ReactCardFlip from 'react-card-flip'
// import InputImageSelect from '../../components/InputImageSelect'
import CardViewBack from './views/CardViewBack'
import CardViewFront from './views/CardViewFront'

const CardView = ({ data, ...props }) => {
  const [flip, setFlip] = useState()
  // const [viewDni, setViewDni] = useState(true)

  const handleFlipCard = () => {
    setFlip(!flip)
  }

  return (
    <Row className="container">
      <Col xs={12} lg={3} className="mb-2">
        <Row>
          <Col className="d-flex justify-content-center" xs={12}>
            <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' style={{ width: '150px' }} />
          </Col>
          {/* <Col className="text-center mt-2" xs={12}>
            <label htmlFor="dni">Dni</label>
            <div id="dni" className="fw-bold">{viewDni ? data?.dni : data?.dni?.replaceAll(/\d/g, '*') || 'Esperando datos'}</div>
          </Col> */}
          {/* <InputImageSelect /> */}
          {
            (data?.about || data?.knowledges?.length > 0 || data?.social?.length > 0 || data?.academic?.length > 0) &&
            <Col className="mt-2 text-center" xs={12}>
              {/* <button className="btn btn-sm btn-outline-primary me-1" onClick={() => setViewDni(!viewDni)}>{viewDni ? 'Ocultar' : 'Mostrar'} dni</button> */}
              <button className="btn btn-sm btn-outline-primary ms-1" onClick={handleFlipCard}>Voltear</button>
            </Col>
          }
        </Row>
      </Col>
      <Col xs={12} lg={9}>
        <ReactCardFlip isFlipped={flip}>
          <CardViewFront data={data} />
          <CardViewBack data={data} />
        </ReactCardFlip>
      </Col>
    </Row>
  )
}

export default CardView
