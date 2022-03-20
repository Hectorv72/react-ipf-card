import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const SocialForm = ({ updateForm, deleteForm, ...props }) => {
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
          <Col xs={3}>
            <input type="text" placeholder="label" name="label" onChange={handleSet} value={state.label || ''} className='form-control' />
          </Col>
          <Col>
            <input type="url" name="link" placeholder="link" onChange={handleSet} value={state.link || ''} className='form-control' />
          </Col>
          <Col xs={2}>
            <button type="button" className="btn btn-danger" onClick={deleteForm}>Delete</button>
          </Col>
        </Row>
      </form>
    </Col>
  )
}

export default SocialForm
