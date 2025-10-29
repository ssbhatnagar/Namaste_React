import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError(); // this hook is provided by react router to let user know about error details
    console.log(err);
  return (
    <div>
        <h1>OOPs!!</h1>
        <h2>Something went wrong</h2>
        <h4>{err.status}: {err.statusText}</h4>
    </div>
  )
}

export default Error