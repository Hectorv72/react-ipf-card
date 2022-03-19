import React from 'react'
import { DynamicForm } from '../components'
import { Row, Col, Card } from 'react-bootstrap'

const Comp = ({ updateForm, deleteForm }) => {
  return (
    <Col xs="2">
      <Card>
        <Card.Body>
          <Row className="mb-2">
            <Col>
              <input onChange={(e) => updateForm(e.target.value)} className="form-control" type="text" />
              <button onClick={deleteForm} className="btn btn-danger">Delete</button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>

  )
}
const Comp2 = ({ updateForm, deleteForm }) => {
  return (
    <Col xs="12">
      <Card>
        <Card.Body>
          <button onClick={deleteForm} className="btn btn-success">Sexo</button>
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
      <Row className="g-4 mb-2">
        <DynamicForm onChange={handle} initCount={2} component={Comp} />
      </Row>
      <Row className="g-1">
        <DynamicForm initCount={2} component={Comp2} />
      </Row>
    </div>
  )
}

export default TestPage
