import React from 'react'
import { Link } from 'react-router-dom'

const CloseSearchButton = () => {
  return (
    <Link to='/' className="close-search">
        Close
    </Link>
  )
}

export default CloseSearchButton