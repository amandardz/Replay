import React from 'react';

function Container (props) {
  return (
    <div id='container' className={props.className}>
      {props.children}
    </div>
  )
}

export default Container;