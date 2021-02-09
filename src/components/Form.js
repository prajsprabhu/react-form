import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            password:"",
            email:""
        }
    }

    handleChange= e => {
        this.setState({
            [e.target.name]:e.target.value
    
        })

    }
    handleSubmit = e => {
        alert(`${this.state.username} ${this.state.password} ${this.state.email}`)
        e.preventDefault()
        
    }

    render() {
        const{username, password, email} = this.state
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
               <label>
                Username
                <input 
                type="text"
                name="username"
                value={username} 
                onChange={this.handleChange}
                />
               </label>
               <br></br>
              
               <label>
                   Password
                   <input
                    type="password"
                    name="password"
                    value={password}
                   onChange={this.handleChange}/>
               </label>
                <br></br>
               <label>
                   Email
                   <input
                   type="email"
                   name="email"
                   value={email}
                   onChange={this.handleChange}/>
                   </label>
                   <br></br>
                  <button type="Submit">Submit</button>
                   <br></br>
                   </div>
                   </form>
                
               
               
               
               
          
        )
    }
}

export default Form
