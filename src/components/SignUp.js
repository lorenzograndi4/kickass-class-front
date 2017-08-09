import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signUp from '../actions/sign-up'
import Title from '../components/Title'

export class SignUp extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        email: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      }
      this.props.signUp(user)
    }
    return false
  }

  signIn() {
    this.props.push('/sign-in')
  }

  validateAll() {
    return this.validateEmail() &&
      this.validatePassword()
  }

  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password } = this.refs

    if (password.getValue().length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.getValue().match(/[a-zA-Z]+/) && password.getValue().match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  render() {
    return (
      <div>
        <Title content="Sign Up" level={2} />

        <form onSubmit={this.submitForm.bind(this)}>

          <div className="input">
            <input ref="email" type="email" hintText="Email address"
              onChange={this.validateEmail.bind(this)}
              errorText={ this.state.emailError} />
          </div>
          <div className="input">
            <input ref="password" type="password" hintText="Password"
              onChange={this.validatePassword.bind(this)}
              errorText={ this.state.passwordError} />
          </div>

          <button onClick={ this.submitForm.bind(this) }>
            Sign up 
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp, push })(SignUp)
