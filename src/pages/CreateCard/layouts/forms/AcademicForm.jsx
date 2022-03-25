import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import YearsData from '../../data/years.data'

const AcademicForm = ({ updateForm, deleteForm, ...props }) => {
  const [state, setState] = useState({})
  const [years, setYears] = useState([])

  const handleSet = (e) => {
    const { value, name } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const years = YearsData()
    setState({ ...state, date_of_admission: years[years.length - 1], date_of_graduation: years[years.length - 1] })
    setYears([...years])
  }, [])

  useEffect(() => {
    const validation = { ...state }
    if (validation.date_of_admission > validation.date_of_graduation) {
      validation.date_of_admission = validation.date_of_graduation
      setState({ ...validation })
    }
  }, [state?.date_of_admission, state?.date_of_graduation])

  useEffect(() => {
    // console.log('entrando')
    updateForm({ ...state, degree: (state?.degree?.trim() || '') })
  }, [state])

  return (
    <Col xs={12}>
      <Row className="gx-2">
        <Col xs={6}>
          <input type="text" placeholder="carrera o titulo" name="degree" onChange={handleSet} value={state.degree || ''} className='form-control' />
        </Col>
        <Col>
          <Row className="gx-1">
            <Col>
              <select className="form-select" name="date_of_admission" onChange={handleSet} value={state.date_of_admission || years[years.length - 1]}>
                {
                  years.map(
                    (year, key) =>
                      <option disabled={state?.date_of_graduation < year} key={`year-option-admission-${key}`} value={year}>{year}</option>
                  )
                }
              </select>
            </Col>
            <Col>
              <select className="form-select" name="date_of_graduation" onChange={handleSet} value={state.date_of_graduation || years[years.length - 1]}>
                {
                  years.map(
                    (year, key) =>
                      <option key={`year-option-graduation-${key}`} value={year}>{year}</option>
                  )
                }
              </select>
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <button type="button" className="btn btn-danger" onClick={deleteForm}>Delete</button>
        </Col>
      </Row>
    </Col>
  )
}

export default AcademicForm
