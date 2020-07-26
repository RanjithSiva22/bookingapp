
import React from 'react';

function C_TextInput(props) {
  let { type, name } = props;
  return (
    <input type={`${type}`} class="form-control" name={`${name}`} required />
  );
}


export default C_TextInput;