import React from 'react';
import './../styles/Loading.scss'

export default (props) => {
  if (props.error) {
    return (<div>Error! <button onClick={ props.retry }>Retry</button></div>)
  } else if (!props.pastDelay) {
    return (
      <h2 id="loading">Loading...</h2>
    )
  } else {
    return null;
  }
}