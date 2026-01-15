import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from "react"
export default function UserCard() {

    const { userDetails} = useContext(UserContext)

  return (
    <div>
      <p>Name : {userDetails.fullName}</p>
      <p>Email : {userDetails.email}</p>
    </div>
  )
}
