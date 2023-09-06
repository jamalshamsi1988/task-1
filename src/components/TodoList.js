import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from "./TodoList.module.css";


import {  shorten } from '../function/helper';
import { allData } from '../data';
import { addItem, removeItem } from '../redux/listAction';






const TodoList = ({data}) => {
  
  const state = useSelector(state => state.listState);
  const dispatch=useDispatch();
  console.log(removeItem());

  const [selectedItems, setSelectedItems] = useState([]);
  const [unselectedItems, setUnselectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
      setUnselectedItems([...unselectedItems, id]);
    } else {
      setSelectedItems([...selectedItems, id]);
      setUnselectedItems(unselectedItems.filter(item => item !== id));
    }
  };


     
const groupData=allData.reduce((groups , item)=> {
    const {id} = item;
    if(!groups[id] ){
        groups[id] = []
    }
    groups[id].push(item);
    return groups;

},{})


  return (
    <div>
    <div className={styles.container}>
      <button onClick={()=> dispatch(addItem()) }>Add</button>
      <button onClick={()=> dispatch(removeItem())}>Remove</button>
      
      {
        Object.entries(groupData).map(([id , items])=> (
        <div key={id} >
            <div className={styles.mainContainer}>

                <h3>{id}</h3>
               <h3>{allData.filter(data => data.id.includes(id)).length}</h3>
              
               <input
              type="checkbox"
              id={id}
              checked={selectedItems.includes(id)}
              onChange={() => handleCheckboxChange(id)}
            />
            </div>
            <div >
               
            <ul className={styles.list}>
                {items.map((item)=> (
                <li key={item.uniqueId}>
                    <div>#{item.uniqueId}</div>
                    <div>{shorten(item.created)}</div>
                   <input type='checkbox' 
                    checked={selectedItems.includes(id)}
                    onChange={() => handleCheckboxChange(id)} />
                </li>
                ))}
            </ul>
        
            </div>
        
        </div>))
     }
    </div>
    <div className={styles.rightContainer}>
        <h>New item</h>
        
    </div>
    </div>
  )
    }

export default TodoList

