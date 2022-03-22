/* eslint-disable no-unused-vars */
import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'
import SocialData from '../data/social.data'

const CardViewBack = ({ data, ...props }) => {
  return (
    <Row className="gy-3">
      {
        data.about &&
        <Col xs={12}>
          <label htmlFor="about" className="fw-bold">Sobre mi</label>
          <div id="about">{data.about || 'Esperando datos'}</div>
        </Col>
      }

      {
        data?.knowledges?.length > 0 &&
        <Col xs={12}>
          <label htmlFor="about" className="fw-bold">Conocimientos</label>
          <div id="about">
            {
              data.knowledges.map(
                (element, key) =>
                  <span key={`badge-knowledge-${key + 1}`} className="badge bg-primary me-1">{element}</span>
              )
            }
          </div>
        </Col>
      }
      {

        (data?.social?.length > 0 || data?.academic?.length > 0) &&
        <Accordion defaultActiveKey='0'>
          {
            data?.academic?.length > 0 &&
            <Accordion.Item eventKey='0'>
              <Accordion.Header><span className="fw-bold">Academico</span></Accordion.Header>
              <Accordion.Body>
                <Row className="gy-3">
                  {
                    data.academic.map(
                      (element, key) =>
                        <Col xs={12} key={`academic-item-${key + 1}`}>
                          <Row>
                            <Col>
                              <div htmlFor={`degree-item-degree-${key + 1}`} className="fw-bold">Titulo/Carrera</div>
                              <label id={`degree-item-degree-${key + 1}`} className="me-2">{element.degree}</label>
                            </Col>
                            <Col className="text-center">
                              <div htmlFor={`degree-item-date-${key + 1}`} className="fw-bold">Ingreso/Egreso</div>
                              <label id={`degree-item-date-${key + 1}`} >{element.date_of_admission}/{element.date_of_graduation}</label>
                            </Col>
                          </Row>
                        </Col>
                    )
                  }
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          }
          {
            data?.social?.length > 0 &&
            <Accordion.Item eventKey='1'>
              <Accordion.Header><span className="fw-bold">Social</span></Accordion.Header>
              <Accordion.Body>
                <Row className="gy-2">
                  {
                    data.social.map(
                      (element, key) =>
                        <Col xs={12} key={`social-item-${key + 1}`}>
                          <div className="form-control">
                            {
                              <img style={{ width: '15px' }} src={(SocialData.find(social => social.name === element.label))?.img} />
                            }
                            <label className="ms-2">{element.value}</label>
                          </div>
                        </Col>
                    )
                  }
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          }
        </Accordion>

      }
    </Row >
  )
}

export default CardViewBack
