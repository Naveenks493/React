import React from 'react'
import { useParams } from 'react-router'

const Dynamic = () => {
    const {id}= useParams()
  return (
    <div>Dynamic -{id}</div>
  )
}

export default Dynamic