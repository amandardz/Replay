import React from 'react';
import './style.css';

function searchResultsCard (props) {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  )
}

export default searchResultsCard