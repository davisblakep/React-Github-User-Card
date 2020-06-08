import React from 'react'

import UserCard from './UserCard';
import Grid from '@material-ui/core/Grid'


const UserList = (props) => {
    console.log('Userlist props', props)



    return(
        <div style={{marginTop: "4%"}}>
            <Grid container spacing={6} display='flex' justify='space-evenly' align='center'>
            {props.followerList.data === undefined ? <p>Hold yer' hoarses</p> : props.followerList.data.map(
                users => {
                    return(
                        <Grid item xs>
                        <UserCard data={users} key={users.id} />
                        </Grid>
                    )
                }
            )}
            </Grid>
        </div>
    )
}

export default UserList