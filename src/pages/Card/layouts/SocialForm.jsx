import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const SocialForm = ({ setValueForm, ...props }) => {
  const [state, setState] = useState({})
  // useEffect(() => {
  //   setValueForm(state)
  // }, [state])
  const handleSet = (e) => {
    const { value, name } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }
  useEffect(() => {
    setValueForm(state)
  }, [state])
  return (
    <form>
      <Row>
        <Col xs={3}>
          <input type="text" placeholder="label" name="label" onChange={handleSet} value={state.label || ''} className='form-control' />
        </Col>
        <Col>
          <input type="url" name="link" placeholder="link" onChange={handleSet} value={state.link || ''} className='form-control' />
        </Col>
      </Row>
    </form>
  )
}

export default SocialForm
