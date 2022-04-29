import React, { Component } from 'react';

export default class FormLogin extends Component {
  render() {
    const { name, type, handleChange } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { `Type your ${name}: ` }
          <input 
            type={type}
            name={ name }
            onChange={ handleChange }
          />
        </label>
      </div>
    )
  }
}
