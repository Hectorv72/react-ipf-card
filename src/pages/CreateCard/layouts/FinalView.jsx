import React from 'react'
import { CardView } from '../../../layouts'

const FinalView = ({ previousStep, data, saveStudent, ...props }) => {
  return (
    <>
      <h4 className="text-center mb-4">Esta será tu tarjeta de presentación</h4>
      <CardView data={data} />
      <div className="mt-2 d-flex justify-content-between">
        <button className="btn btn-primary" onClick={previousStep}>Volver</button>
        <button className="btn btn-primary" onClick={saveStudent}>Finalizar</button>
      </div>
    </>
  )
}

export default FinalView
