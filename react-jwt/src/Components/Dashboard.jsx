import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import AuthUser from './AuthUser'

const Dashboard = () => {
  const { user } = AuthUser();
  return (
    <div className="container">
      <h4>Name</h4>
      <p>{user.name}</p>
      <h4>Email</h4>
      <p>{user.email}</p>
    </div>
  )
}

export default Dashboard