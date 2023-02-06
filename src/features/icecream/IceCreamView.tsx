import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { ordered,restocked } from './iceCreamSlice';



export function IceCreamView () {
    const numOfIceCream:number = useSelector((state: RootState)=>state.icecream.numOfIceCream)
    const dispatch = useDispatch();
    return (
        <div>
        <h2>Number of Ice Creams - {numOfIceCream}</h2>
        <button onClick={()=>dispatch(ordered())}>Order Ice Cream</button>
        <button onClick={()=>dispatch(restocked(2))}>Restock IceCream</button>
        </div>
    );
}
