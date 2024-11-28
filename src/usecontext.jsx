import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
function UseContext() {
    const [count, setCount]=useState(0)
  return (
    <div>
        <h2>this is another count from component 2</h2>
        <p>{count}</p>
      <button onClick={()=> setCount(count+2)} className="btn btn-primary px-4">+</button>
      <button onClick={()=> setCount(count-2)} className="btn btn-success px-4">-</button>
    </div>
  )
}

export default UseContext
