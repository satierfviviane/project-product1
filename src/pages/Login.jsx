import React, { Component } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        validEmail: false,
        validPassword: false,
        disabledBtn: true,
    }
  }

  handleChange = ({ target: { name, value }}) => {
      this.setState({
          [name]: value,
      });
  }

//   validateEmail = (email) => {
//       const REGEX_EMAIL = 
//   }


  render() {
    const { email, password } = this.state;
    console.log(email);
    console.log('pass', password);
    return (
      <div>
          <Input 
            type="text"
            name="email"
            value={ email }
            handleChange={ this.handleChange } 
          />
          <Input
            type="password"
            name="password"
            value={ password }
            handleChange={ this.handleChange }
          />
          <Button />
      </div>
    )
  }
}
