
import React ,{ useRef, useState } from 'react';
import './App.css';
// import '../public/style.css';


function App() {

  const [ x , setx] = useState([])

  const inputRef=useRef();

  const add =()=>{
    const value = inputRef.current.value ;
    const newData ={complated :false ,value}

    setx([...x ,newData])
    inputRef.current.value = ''

  }
  const itemDone =(index)=>{
    const newx =[...x]
    // const newx =x.slice()
    newx[index].complated =  !newx[index].complated;
    setx(newx);
  }
 
  const toDelete = (index)=>{
    const newx =[...x]
    newx.splice(index ,1)
    setx(newx)

  }
  return (
    <div className="App">
     
        <ul className='navbar'>
          <li >Day</li>
          <li className='line'></li>
          <li>Week</li>
          <li>Month</li>
          <li>Year</li>
        </ul>
      <div className='divider'></div>
      <div className='hero'>
      <span className='icon-keyboard_arrow_left'></span>
      <div className='hero-text'>
        <h2>Thursday</h2>
        <p>february ,29 2024</p>
      </div>
      <span className='icon-keyboard_arrow_right'></span>
      </div>
      <div className='inpt'>
      <input ref={inputRef}  type="text" placeholder='enter new task' />
      <button onClick={add}> + </button>
      </div>
      <ul>
        {
          x.map(({value , complated},index)=>{
           return <div className='div10'>
            <li className={complated ?"diffstyle" :""} onClick={ ()=>itemDone(index)}>{value}</li>
            <span onClick={() => toDelete(index) } >x</span>
           </div>

          })
        }
      </ul>
    </div>
  );
}

export default App;
