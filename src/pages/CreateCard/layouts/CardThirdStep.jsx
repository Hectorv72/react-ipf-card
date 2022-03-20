import React from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import { TagInput, DynamicForm } from '../../../components'
import SocialForm from './SocialForm'
import AcademicForm from './AcademicForm'

const CardThirdStep = ({ data, setData, previousStep, nextStep, ...props }) => {
  return (
    <div className="container">
      <h4>Cuentanos tus especialidades... (opcional)</h4>
      <Row className="mb-3">
        <Col xs={12} className="mb-3">
          <label htmlFor="abilities">Habilidades:</label>
          <TagInput id="abilities" />
        </Col>

        <Col className="mb-3" xs={12}>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Social</Accordion.Header>
              <Accordion.Body>
                <DynamicForm id="social" component={<SocialForm />} containerClass="mb-2 row gy-2" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Academico</Accordion.Header>
              <Accordion.Body>
                <DynamicForm id="academic" component={<AcademicForm />} containerClass="mb-2 row gy-2" />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <label htmlFor="social">Social:</label> */}
        </Col>

        {/* <Col xs={12}>
          <label htmlFor="academic">Informacion academica:</label>
        </Col> */}
      </Row>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={previousStep}>Volver</button>
        <button className="btn btn-success" onClick={nextStep}>Finalizar</button>
      </div>
    </div>
  )
}

export default CardThirdStep
