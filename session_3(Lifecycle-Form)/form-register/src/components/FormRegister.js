import React, { Component } from 'react'

export default class FormLogin extends Component {
    constructor(props) {
        super(props);
    }
    handleOpenRegister = () => {
        console.log("adda",this.props.isToggle);
    }
    render() {
        return (
            <div className="form-panel two" onClick={() => this.handleOpenRegister()}>
                <div className="form-header">
                    <h1>Register Account</h1>
                </div>
                <div className="form-content">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required="required" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required="required"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input
                                type="password"
                                id="cpassword"
                                name="cpassword"
                                required="required"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required="required" />
                        </div>
                        <div className="form-group">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
