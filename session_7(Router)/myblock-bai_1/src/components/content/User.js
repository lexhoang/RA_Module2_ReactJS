import React from 'react'
import { NavLink } from 'react-router-dom';

export default function User(props) {
  return (
    <div>
      {/*        Content User*/}
      <h1>User Page</h1>
      <div className="row d-flex justify-content-around">
        {
          props.listUsers.map((element, index) => {
            return (
              <div className="col-3 card my-4" key={index}>
                <img
                  src="https://sm.mashable.com/t/mashable_in/news/c/constantly/constantly-stressed-at-work-it-might-actually-be-changing-yo_cqv3.1200.jpg"
                  className="card-img-top"
                  alt="Csdvd"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Usename : {element.name} </li>
                  <li className="list-group-item">Email: {element.email} </li>
                  <li className="list-group-item">Phone: {element.phone} </li>
                </ul>
                <div className="card-body">
                  <NavLink to={element.id} className="btn btn-primary">Show more details</NavLink>
                </div>
              </div>
            )
          })
        }
      </div>
      {/*        Content User*/}
    </div>
  )
}
