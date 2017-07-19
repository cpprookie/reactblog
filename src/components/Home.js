import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => (
  <section className="home">
    <div className="home-menu">
      
    </div>
    <div className="home-heading">
      <div className="home-logo">R&B</div>
      <div className="home-tag">reflection & break point for lifes.&nbsp;&nbsp; <Link to="/signup">create your zone.</Link></div>
    </div>
  </section>
)

export default Home