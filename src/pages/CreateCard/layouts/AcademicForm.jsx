import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const AcademicForm = ({ updateForm, deleteForm, ...props }) => {
  const [state, setState] = useState({})

  const handleSet = (e) => {
    const { value, name } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }
  useEffect(() => {
    updateForm(state)
  }, [state])

  return (
    <Col xs={12}>
      <form>
        <Row>
          <Col xs={6}>
            <input type="text" placeholder="carrera o titulo" name="degree" onChange={handleSet} value={state.degree || ''} className='form-control' />
          </Col>
          <Col>
            <Row className="gx-2">
              <Col>
                <input type="url" name="link" placeholder="ingreso" onChange={handleSet} value={state.aaa || ''} className='form-control' />
              </Col>
              <Col>
                <input type="url" name="link" placeholder="egreso" onChange={handleSet} value={state.aaa || ''} className='form-control' />
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <button type="button" className="btn btn-danger" onClick={deleteForm}>Delete</button>
          </Col>
        </Row>
      </form>
    </Col>
  )
}

export default AcademicForm
