import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Select from 'react-select'
import { FaTrash } from 'react-icons/fa'
import SocialData from '../data/social.data'

const SocialForm = ({ updateForm, deleteForm, ...props }) => {
  const [state, setState] = useState({ label: '', value: '' })

  const optionsGenerator = () => {
    return SocialData.map(
      element => {
        return {
          value: element.name,
          label: <div className="d-flex justify-content-center"><img style={{ width: '18px' }} src={element.img} /></div>
        }
      }
    )
  }

  const handleSetSelectData = (option) => {
    // console.log(option)
    setState(prev => ({ ...prev, label: option.value }))
  }

  const handleSet = (e) => {
    const { value, name } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    // console.log(state)
    updateForm(state)
  }, [state])

  return (
    <Col xs={12}>
      {/* <form> */}
      <Row className="gx-2">
        <Col xs={4} md={2}>
          <Select onChange={handleSetSelectData} options={optionsGenerator()} />
        </Col>
        <Col xs={6} md={9}>
          <input type="text" name="value" placeholder="Ingrese un link o nombre de usuario" onChange={handleSet} value={state.value || ''} className='form-control' />
        </Col>
        <Col xs={2} md={1}>
          <button type="button" className="btn btn-danger" onClick={deleteForm}><FaTrash /></button>
        </Col>
      </Row>
      {/* </form> */}
    </Col>
  )
}

export default SocialForm
