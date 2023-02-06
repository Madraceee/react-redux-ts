import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';
import type { AppDispatch, RootState } from '../../app/store';
import type { User } from './userSlice';

export function UserView () {

    const user = useSelector((state:RootState) => state.user)
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[]);
    console.log(user)
    return (
        <div>
        <h2>List Of Users</h2>
        {user.loading && <div>Loading...</div>}
        {!user.loading && user.error ? <div>{user.error}</div> : null}
        {!user.loading && user.users.length > 0 ? (
            <ul>
                {
                    user.users.map( (user: User) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        ) : null}
        </div>
    );
}
