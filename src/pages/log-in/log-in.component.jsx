import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './log-in.styles.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }


    render() {
        return (
            <div className='container'>

                <h1 className='header-login'>LOGIN</h1>
        
                <form action="">

                <FormInput 
                    type="text" 
                    name="username" 
                    value={this.state.username}
                    label="username"
                    handleChange={this.handleChange}
                    required/>
                   
                   <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    label="password"
                    handleChange={this.handleChange}
                    required/>

                    <CustomButton>LOGIN IN</CustomButton>

                </form>

                <p className='prompt'>Use name: Adam, password: 1234</p>
            </div>
        )
    }
}

export default Login;