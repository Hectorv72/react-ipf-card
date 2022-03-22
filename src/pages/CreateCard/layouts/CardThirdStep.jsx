
import React, { useEffect, useState } from 'react'
import { Row, Col, Accordion } from 'react-bootstrap'
import { DynamicForm } from '../../../components'
import SocialForm from './SocialForm'
import AcademicForm from './AcademicForm'
// import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const CardThirdStep = ({ data, setData, previousStep, nextStep, nextView, ...props }) => {
  const [tags, setTags] = useState([])

  const handleSetSocialData = (value) => {
    const full = [...value].filter(element => element.label !== '' && element.value !== '')
    setData({ target: { name: 'social', value: [...full] } })
  }

  const handleSetAcademicData = (value) => {
    // console.log(value)
    const full = [...value].filter(element => element.degree !== '' && element.date_of_admission !== '' && element.date_of_graduation !== '')
    // console.log(full)
    setData({ target: { name: 'academic', value: [...full] } })
  }

  const handleChange = (e) => {
    const full = [...e].map(element => element.value)
    setTags([...full])
  }

  useEffect(() => {
    setData({ target: { name: 'knowledges', value: [...tags] } })
  }, [tags])

  return (
    <div className="container-fluid px-1">
      <h4>Cuentanos tus especialidades... (opcional)</h4>
      <Row className="mb-3">
        <Col xs={12} className="mb-3">
          <label htmlFor="knowledges">Habilidades:</label>
          {/* <TagInput id="knowledges" name="knowledges" /> */}
          <CreatableSelect
            isClearable
            isMulti
            closeMenuOnSelect={false}
            onChange={handleChange}
          // options={tags}
          />
        </Col>

        <Col className="mb-3" xs={12}>
          <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Social</Accordion.Header>
              <Accordion.Body>
                <DynamicForm id="social" component={<SocialForm />} onChange={handleSetSocialData} containerClass="mb-2 row gy-2" />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Academico</Accordion.Header>
              <Accordion.Body>
                <DynamicForm id="academic" component={<AcademicForm />} onChange={handleSetAcademicData} containerClass="mb-2 row gy-2" />
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
        <button className="btn btn-primary" onClick={nextView}>Ver tarjeta</button>
      </div>
    </div>
  )
}

export default CardThirdStep
