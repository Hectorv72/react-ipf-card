import React, { useEffect, useState } from 'react'
import { CardView } from '../layouts'
import { useParams } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'

const PageCard = () => {
  const [data, setData] = useState(null)
  const params = useParams()

  const handleGetDataUser = async () => {
    const { dni } = params
    try {
      const response = await fetch(`http://127.0.0.1:4000/students/dni/${dni}`)
      const json = await response.json()
      setData({
        ...json,
        knowledges: JSON.parse(json.knowledges),
        social: JSON.parse(json.social),
        academic: JSON.parse(json.academic)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(handleGetDataUser, [])

  return (
    data &&
    <Container>
      <Card className="my-5 p-3">
        <Card.Body>
          <CardView data={data} />
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PageCard
