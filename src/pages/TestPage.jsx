import React from 'react'
import { DynamicForm } from '../components'
import { Row, Col, Card } from 'react-bootstrap'

const Comp = ({ updateForm, deleteForm }) => {
  return (
    <Col xs="3">
      <Card>
        <Card.Body>
          <Row className="mb-2">
            <Col className="mb-2" xs={12}>
              <input onChange={(e) => updateForm(e.target.value)} className="form-control" type="file" />
            </Col>
            <Col>
              <div className="d-flex justify-content-center">
                <button onClick={deleteForm} className="btn btn-danger">Delete</button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>

  )
}

const TestPage = () => {
  const handle = (data) => {
    console.log(data)
  }
  return (
    <div className="my-4 mx-3">
      <Row className="g-2 mb-2">
        <DynamicForm onChange={handle} component={<Comp />} buttonContainerClass={'d-flex justify-content-center'} buttonPosition="top" />
      </Row>
    </div>
  )
}

export default TestPage
