import React from 'react';
import './style.css';

function Container (props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default Container;