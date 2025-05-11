import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, incrementCounter, incrementCounterByAmount } from "../store/slices/counter";

export default function RecipeCounter() {
  // to read from redux
  const countValue = useSelector(state => state.counter.countVal)
  // to update from redux
  const dispatch = useDispatch()
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="mb-3">🍽️ Recipe Counter</h1>
        <h3 className="text-primary">Recipe Counter: { countValue }</h3>
      </div>

      <div className="d-flex justify-content-center gap-3">
        <button className="btn btn-success" onClick={()=> dispatch(incrementCounter())} >+1</button>
        <button className="btn btn-danger" onClick={()=> dispatch(decreaseCounter())}>-1</button>
        <button className="btn btn-primary" onClick={()=> dispatch(incrementCounterByAmount(5))}>+5</button>
        <button className="btn btn-primary" onClick={()=> dispatch(incrementCounterByAmount(10))}>+10</button>
      </div>
    </div>
  );
}