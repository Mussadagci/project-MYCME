import React, { Component } from "react";
import axios from "axios"

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
          email: "",
          username: "",
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
          username: this.state.username,
          password: this.state.password
        };
        axios.post('/api/user/signup', user).then(res => {
          return res;
        })
      }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChange}/>
                </div>

               <input type="submit" />

        

                
            </form>
        );
    }
}
