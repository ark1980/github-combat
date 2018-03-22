import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faHandPaper } from '@fortawesome/fontawesome-free-regular'

const NotMatch = () => {
  return(
    <div>
      <h1 style={{color: "red"}}>404</h1>
      <FontAwesomeIcon icon={faHandPaper} size="10x"/>
      <h2 style={{color: "red"}}>Page Not Found</h2>
    </div>
  )
}

export default NotMatch;