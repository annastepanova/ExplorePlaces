import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {

  const USERS = [
    {
      id: 'u1',
      name: 'Anna Stepanova',
      image: 'https://indrej.com/wp-content/uploads/2018/01/Cambridge2520Mass_0.jpg',
      places: 3
    }
  ]


  return (
    <UsersList items={USERS}/>
  )
}

export default Users
