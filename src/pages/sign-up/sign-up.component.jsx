import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirm: ''
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }


    render() {
        return (
            <div className='container'>

                <h1 className='header-login'>SIGN UP</h1>
        
                <form action="">

                <FormInput 
                    type="text" 
                    name="username" 
                    value={this.state.username}
                    label="username"
                    handleChange={this.handleChange}
                    required/>

                <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email}
                    label="email"
                    handleChange={this.handleChange}
                    required/>    
                   
                <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password}
                    label="password"
                    handleChange={this.handleChange}
                    required/>

                <FormInput 
                    type="password" 
                    name="confirm password" 
                    value={this.state.confirm}
                    label="confirm"
                    handleChange={this.handleChange}
                    required/>

                    <CustomButton>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;