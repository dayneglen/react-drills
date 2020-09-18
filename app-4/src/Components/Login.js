import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        } 
    }

    updateUsername(e) {
        this.setState({ username: e.target.value });
    }

    updatePassword(e) {
        this.setState({password: e.target.value})
    }

    alertInfo = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input placeholder='Username' value={this.state.username} onChange={(e) => this.updateUsername(e)}/>
                <input type ='password' placeholder='Password' value={this.state.password} onChange={((e) => this.updatePassword(e))} />
                <button onClick={this.alertInfo}>Login</button>
            </div>
        )
    }
}

export default Login;