import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to={"/companies"}><button type="button" className="btn btn-primary">Primary</button></Link>
    </div>
  )
}

export default Home
