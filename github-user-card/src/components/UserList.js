import React from 'react'

import UserCard from './UserCard'


const UserList = (props) => {
    console.log('Userlist props', props)



    return(
        <div>
            {props.followerList.data === undefined ? <p>Hold yer' hoarses</p> : props.followerList.data.map(
                users => {
                    return(
                        <UserCard data={users} key={users.id} />
                    )
                }
            )}
        </div>
    )
}

export default UserList