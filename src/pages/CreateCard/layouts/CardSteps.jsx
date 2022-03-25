import React from 'react'
import { Row, Col } from 'react-bootstrap'
import StepWizard from 'react-step-wizard'
import CardFirstStep from './steps/CardFirstStep'
import CardSecondStep from './steps/CardSecondStep'
import CardThirdStep from './steps/CardThirdStep'

const CardSteps = ({ data, setData, nextStep }) => {
  return (
    <Row>
      <Col xs={12} lg={3} className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <img alt="ipf" src={'https://www.ipf.edu.ar/img/logo_institucional.jpg'} style={{ width: '200px' }} />
          {/* <img alt="ipf" src={'https://www.ipf.edu.ar/img/logo.png'} style={{ width: '200px' }} /> */}
        </div>
      </Col>
      <Col>
        <StepWizard >
          <CardFirstStep data={data} setData={setData} />
          <CardSecondStep data={data} setData={setData} />
          <CardThirdStep data={data} setData={setData} nextView={nextStep} />
        </StepWizard>
      </Col>
    </Row>
  )
}

export default CardSteps
