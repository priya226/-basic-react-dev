import React, { useState,useCallback } from 'react'
function ItemDisplay({item,index, HandleDeleteItem}){
    console.log('todo child render',index, item)
    return <>
    <div key={item}>
        <h3>{item} </h3>
        <span onClick={()=>HandleDeleteItem(index)}>delete</span>
    </div>
    </>
}
MemoizeItemDisplay = React.memo(ItemDisplay);
let count = 0;

function ToDominimizerender() {
    console.log('todo render')
    const [newItem,setnNewItem]=useState('');
    const [todoList,setTodoList]=useState([])
    const [count , setCount] = useState(0);

    const HandleDeleteItem = useCallback((index) => {
        console.log("delete", index, "----", todoList);
        // let data = getTodoList();
        //  data= data.filter((d,i)=> i!=index);
        setTodoList(data=> data.filter((d,i)=> i!=index));
    },[]);
    const HandleAddItem = useCallback((newItem)=>{
        console.log("Adding ",newItem, "  count...", count, "to", todoList);
        // count++;
        // todoList.push(newItem);
        setTodoList(list => [...list, newItem])
        console.log("Added ", newItem, "to", todoList);
    },[])

  return (
    <div>
        {
            <>
            <input type='text' name='itemAddInput' value={newItem} onChange={(e)=>setnNewItem(e.target.value)}/>
            <span>
           <button onClick={()=>{HandleAddItem(newItem);setnNewItem('')}}>add</button></span>
           <button onClick={()=>{setCount(count => count+1)}}>Count</button>
           {count}
            </>
        }
        { todoList.map((item,index)=>{
            console.log(index)
            return (
               <MemoizeItemDisplay key={index} item={item} index={index} HandleDeleteItem={HandleDeleteItem}></MemoizeItemDisplay> 
            )
        })
        }
    </div>
  )
}

export default React.memo(ToDominimizerender)