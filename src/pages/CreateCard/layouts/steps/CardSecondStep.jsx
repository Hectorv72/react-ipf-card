import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CardSecondStep = ({ nextStep, previousStep, data, setData }) => {
  const sexs = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Femenino' }
  ]

  const handleSubmitForm = (e) => {
    e.preventDefault()
    nextStep()
  }
  // const [tags, setTags] = useState([])
  return (
    <div className="container-fluid px-1">
      <h4>Necesitamos saber más sobre ti...</h4>
      <form onSubmit={handleSubmitForm}>

        <Row className="mb-3 gy-3">

          <Col xs={4} >
            <label htmlFor="sex">Sexo:</label>
            <select name="sex" value={data?.sex || ''} onChange={setData} className="form-select" required>
              <option disabled readOnly value=''>Seleccione</option>
              {
                sexs.map(
                  ({ value, label }, key) =>
                    <option key={'sex-option-' + key} value={value}>{label}</option>
                )
              }
            </select>
          </Col>

          <Col xs={4} >
            <label htmlFor="birth_date">Fecha de nacimiento:</label>
            <input name="birth_date" onChange={setData} type="date" className="form-control" value={data?.birth_date || ''} required />
          </Col>

          <Col xs={4} >
            <label htmlFor="phone">Telefono:(opcional)</label>
            <input name="phone" placeholder="+54 **********" onChange={setData} type="tel" className="form-control" value={data?.phone || ''} />
          </Col>

          <Col xs={12}>
            <label htmlFor="about">Sobre mi:(opcional)</label>
            <textarea id="about" name="about" onChange={setData} placeholder="Soy bueno en..." className="form-control" value={data?.about || ''}></textarea>
          </Col>

        </Row>

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-primary" onClick={previousStep}>Volver</button>
          <button type="submit" className="btn btn-primary">Siguiente</button>
        </div>
      </form>

    </div>
  )
}

export default CardSecondStep
