import React, { useState } from 'react'

function ToDo({todoList,HandleAddItem,HandleDeleteItem}) {
    console.log('todo child render')
    
    const [newItem,setnNewItem]=useState('');
  return (
    <div>
        { todoList.map((item,index)=>{
            return (
                <div key={item}>
                    <h3>{item} </h3>
                    <span onClick={()=>HandleDeleteItem(index)}>delete</span>
                </div>
            )
        })
        }
        {
            <>
            <input type='text' name='itemAddInput' value={newItem} onChange={(e)=>setnNewItem(e.target.value)}/>
            <span>
           <button onClick={()=>{HandleAddItem(newItem);setnNewItem('')}}>add</button></span>
            </>
        }
        {
            <>
            <br/>
            buttons functionality will call setTodoList which updates parent component, and then both child component re-render as result count also rereunder,
             To avoid this useCallback is given to AddList deleteList function and inform their dependencies
             hence child compoent will not rerender
            </>
        }
    </div>
  )
}

export default React.memo(ToDo)