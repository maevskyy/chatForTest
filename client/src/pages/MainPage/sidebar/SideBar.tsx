import React from 'react'
import Header from './Header'
import UserList from './UserList'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <nav className='w-3/12 flex flex-col gap-2'>
        <Header/>
        <UserList/>
    </nav>
  )
}

export default SideBar