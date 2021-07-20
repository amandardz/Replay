import React from 'react'

function Wrapper(props) {
  return (
    <div id='wrapper' className={props.className}>
      {props.children}
    </div>
  )
}

export default Wrapper;