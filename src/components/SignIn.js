import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../store'
import signIn from '../actions/sign-in'
import Title from './Title'

export class SignIn extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    signIn: PropTypes.func.isRequired,
  }

  componentWillMount() {
    if (this.props.signedIn) {
      history.replace('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn) {
      history.push('/')
    }
  }

  submitForm(event) {
    const user = {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    }
    event.preventDefault()
    this.props.signIn(user)
    console.log(user)
  }

  render() {
    return (
      <div>
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="text" defaultValue="teacher@codaisseur.com" />
          </div>
          <div className="input">
            <input ref="password" type="text" defaultValue="codaisseur1"  />
          </div>
          <button onClick={ this.submitForm.bind(this) } label="Sign in">
            Sign in
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser
})

export default connect(mapStateToProps, { signIn })(SignIn)
