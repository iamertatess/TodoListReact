import { useReducer } from "react"
import reducer from "../reducers/counterReducer";


const Counter = () => {
   
   const [state,dispatch] = useReducer(reducer,10);


  return (
    <div className="d-flex gap-4 align-items-center">
        <button   onClick={()=> dispatch('SIFIRLA')}>Sifirla</button>
      <button onClick={() => dispatch('AZALT')} >-</button>
      <span className="fs-1 lead">0</span>
      <button onClick={() => dispatch('ARTTIR')} >+</button>
    </div>
  );
};

export default Counter
 