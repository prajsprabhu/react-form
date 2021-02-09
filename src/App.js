import React, { Component } from 'react'
import Form from './components/Form'
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';

 
class App extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn: false
        }
    }
    responseFacebook=(response)=>{
        console.log(response);
        this.setState({
            isLoggedIn: true
        })
    }
    responseGoogle=(response)=> {
        console.log(response)
        console.log(response.profileObj);
       
       }
       
    render() {
        return (
            this.state.isLoggedIn ? 'Home' :
            <div className="App">
                <GoogleLogin
                clientId="676551334787-a6h59fbo2v1vvjgr75nllt3uk3ugj6ej.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
                <FacebookLogin
    appId="209557620907440"
    autoLoad={true}
    fields="name,email,picture"
    
    callback={this.responseFacebook} />,
                <Form/>
            </div>
          

                
        
        )
    }
}

export default App




