import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { apiAsync } from '../textApi/CounterSlice'

export default function Counter() {
    const state = useSelector(state => state.counters.data);
    const dispatch = useDispatch();
    console.log("countwe", state)
    return (
        <div>
            <button type='button' onClick={() => { dispatch(apiAsync()) }}>click me</button>
            {
                state.map((cv, index, arr) => {
                    return (
                        <div key={index}>
                            <h1>{cv.userId}{cv.id}{cv.title}</h1>
                            <p>{cv.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
