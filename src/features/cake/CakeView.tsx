import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../app/store';
import { ordered,restocked } from './cakeSlice';

export function CakeView () {

    const numOfCakes:number = useSelector(( state:RootState )=>state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock cake</button>
        </div>
    );
}
