import React, { Component } from 'react';
import { firebaseApp } from '../firebase';

class SignUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    const { email, password } = this.state;

    console.log('this.state', this.state);

    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })

  }

  render() {
    return (
      <div className="form-inline">
        <h2>Sign Up</h2>

        <div className="form-group">

          <input
            className="form-control"
            type="email"
            placeholder="E-mail"
            onChange={ event => this.setState({ email: event.target.value })}
          />

          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={ event => this.setState({ password: event.target.value })}
          />

          <button
            className="btn btn-primary"
            type="button"
            onClick={ () => this.signUp() }
          >
            Sign Up
          </button>
        </div>

        { this.state.error.message }

      </div>
    );
  }
}

export default SignUp;
