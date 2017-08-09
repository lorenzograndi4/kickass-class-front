import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { history } from '../store'
import signIn from '../actions/sign-in'
import Title from './Title'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

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
    this.props.signIn(user)
  }

  render() {
    return (
      <div style={ dialogStyle }>
        <Title content="Sign In" />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <input ref="email" type="text" hintText="teacher@codaisseur.com" />
          </div>
          <div className="input">
            <input ref="password" type="text" hintText="codaisseur1"  />
          </div>
          <button
            style={ buttonStyle }
            onClick={ this.submitForm.bind(this) }
            label="Sign in"
            primary={true} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser
})

export default connect(mapStateToProps, { signIn })(SignIn)
