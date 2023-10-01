import React from 'react'

interface Props {
    params: {
        id: number
    }
    searchParams: {
      sortOrder: string;
    } 
}

const UserDetailPage = ({ params: { id }, searchParams: { sortOrder }}: Props) => {
  return (
    <div>UserDetailPage {id} </div>
  )
}

export default UserDetailPage