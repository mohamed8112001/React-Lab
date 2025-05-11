import { createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name:'counter',
    initialState:{
        countVal:0,
        maxCounter:200,
    },
    reducers:{
        incrementCounter:(state) =>{
            state.countVal = state.countVal + 1
        }
,
        decreaseCounter:(state) =>{
            state.countVal = state.countVal - 1
        }
        ,
        incrementCounterByAmount:(state,action) =>{
            state.countVal = state.countVal + action.payload
        }
    }
})

export const {
    incrementCounter,
    decreaseCounter,
    incrementCounterByAmount
} =counterSlice.actions


export default counterSlice.reducer ;