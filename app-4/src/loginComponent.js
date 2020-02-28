import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
         }
         this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange(val) { this.setState({ username: val }) }
    handlePasswordChange(val) { this.setState({ password: val }) }
    handleLogin () { alert(`Username: ${this.state.username} Password: ${this.state.password}`) }

    render() { 
        return ( 
            <div>
             <input onChange={e => this.handleUsernameChange(e.target.value)} type='text'/>
             <input onChange={e => this.handlePasswordChange(e.target.value)} type='text'/>
             <button onClick={this.handleLogin}>Login</button>
            </div>
         );
    }
}
 
export default Login;