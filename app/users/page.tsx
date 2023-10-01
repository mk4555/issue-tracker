import React from 'react'
import UserTable from './new/UserTable'

const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UserTable />
    </>
  )
}

export default UsersPage