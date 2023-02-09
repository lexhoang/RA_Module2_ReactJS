import React from 'react'

export default function Contact() {
  return (
    <div>
      <div>
        {/*        Content Contact*/}
        <h1>Contact Us</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              website
            </label>
            <input type="password" className="form-control" id="inputPassword6" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
            <p>*Required field</p>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Send message
            </button>
          </div>
        </form>
        {/*        Content Contact*/}
      </div>
    </div>
  )
}
