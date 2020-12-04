import React, { Component } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import FormInput from '../FormInput/FormInput'
import { signInWithGoogle } from '../../Firebase/firebase.utils'
import './SignIn.scss'

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    submitHandler = (e) => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }
    changeHandler = (e) => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        required
                        label="Email"
                        changeHandler={this.changeHandler} />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        label="Password"
                        changeHandler={this.changeHandler} />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
