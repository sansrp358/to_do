import React, { useState } from 'react';
import ToDoList from './ToDoList';
const App = () => {
    const[inputList,setInputList] = useState('');

    const [Items , setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };
    const listOfItems = () =>{
        setItems((oldItems)=>{
            return [...oldItems,inputList];
        });
        setInputList("");
    };
    const deleteItems = (id) =>{
      setItems((oldItems)=>{
          return oldItems.filter((arrElement,index)=>{
                return index !== id;
          })
      }) 
    };

    return(
      <>
        
        <div className='main_div'>
        
            <div className='center_div'>
                <h1 className='heading'>ToDo App</h1>
                <br />
                <input type='text' placeholder='Add a item' value={inputList} onChange={itemEvent} required/>
                <button onClick={listOfItems} >+</button>
                <ol>
                    {
                        Items.map((itemval , index) =>{
                          return  <ToDoList 
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect = {deleteItems}
                             />
                        })
                    }
                </ol>
            </div>
        </div>  
        <div className='footer'>
        <h1 className='title'>Made with <span role='img' aria-label="heart">💖</span>by Sans</h1>
        </div>
      </>  
    );
};

export default App;
