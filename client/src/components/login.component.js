import React, { Component } from "react";
import axios from "axios"

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          password: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
        const user = {
          email: this.state.email,
          password: this.state.password
        };
        axios.post('/api/user/signup', user).then(res => {
          console.log(res);
        })
      }
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                </div>

               <input type="submit" onSubmit={this.onSubmit}/>

        

                
            </form>
        );
    }
}