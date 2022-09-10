import React from 'react'
import {NavLink} from "react-router-dom"

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet,
               consectetur adipisicing elit. Ad,
                explicabo? Nemo eos magnam placeat?
               Cumque vitae quae molestias odio eum,
              exercitationem, quasi quis quas tenetur magnam eaque nihil beatae explicabo porro iste hic! Voluptates tempore sunt, vero,
               laboriosam voluptatum neque dignissimos ullam iste blanditiis officiis cum beatae velit maxime nam. Praesentium debitis magnam ex illo facilis quaerat aut esse,
                 officiis eum doloribus! Autem numquam similique animi blanditiis natus maxime ab odit eligendi, illum voluptate iusto earum sequi necessitatibus ad, magni ipsa cum facere eos, cupiditate suscipit?
                 Pariatur quod mollitia repellendus cupiditate harum quos saepe expedita quis, facilis, itaque voluptates inventore!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img src="https://www.dreamhost.com/blog/wp-content/uploads/2018/06/dh-website-builders-6.jpg" alt="About Us" height="400px" width="400px" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
