import { useState } from "react";
import "./App.css";

function App() {
  const [todo,setTodo] = useState([]);
  const [data,setData] = useState('');

  const add = (e)=>{
    e.preventDefault();
    setTodo([...todo,[data,new Date().toLocaleTimeString()]])
    setData('');
  }

  return (
    <>
      <main>
        <section>
          <section>
            <h1>TODO LIST APP</h1>
          </section>
          <section>
            <form onSubmit={add}>
            <input type="text" placeholder="add todo" value={data} onChange={(e)=>{setData(e.target.value)}} />
            <button type="submit">Add</button>
            </form>
          </section>
          <section>
            <table>
             <thead>
             <tr>
                <th>#</th>
                <th>TODO</th>
                <th>Time</th>
              </tr>
             </thead>
              <tbody>
              {todo.map((data,index)=>(
                <tr key={index}>
                <td>{index+1}</td>
                <td>{data[0]}</td>
                <td>{data[1]}</td>
              </tr>
              ))}
              </tbody>
            </table>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
