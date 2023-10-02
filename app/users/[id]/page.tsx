import { notFound } from 'next/navigation';
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
  if(id > 10) notFound();
  return (
    <div>UserDetailPage {id} </div>
  )
}

export default UserDetailPage