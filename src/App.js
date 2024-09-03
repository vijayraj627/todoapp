import { useState } from "react";
function App() {

  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData([...data, inputData]);
  } 

  const remove = (i) => {
    const rem = data.filter((_,ind)=>(
        ind !== i
    ))
    setData(rem)
  }

  return (
    <div className="App">
      <h1>My ToDo App</h1>
      <div className="main">
        <input type="text" placeholder="Add Your ToDo List" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
        <button onClick={handleClick}>+</button>
      </div>
      <div className="allList">
        {data.map((item,i)=>{
          return <p key={i}>{item}<span onClick={()=>remove(i)}>Remove</span></p>
        })}
          
      </div>
      
    </div>
  );
}

export default App;
