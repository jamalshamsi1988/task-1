import React, { useState } from 'react'
import styles from "./TodoList.module.css";


import {  shorten } from '../function/helper';
import { allData } from '../data';




const TodoList = () => {
    const [checked , setChecked]=useState(false);
    const [isCheck , setIsCheck]=useState([]);


   
   
  
    
const grupData=allData.reduce((grups , item)=> {
    const {id} = item;
    if(!grups[id] ){
        grups[id] = []
    }
    grups[id].push(item);
    return grups;
},{})

  return (
    <div className={styles.container}>
     {
        Object.entries(grupData).map(([id , items])=> (
        <div key={id} >
            <div className={styles.mainContainer}>
                <h3>{id}</h3>
               <h3>{allData.filter(data => data.id.includes(id)).length}</h3>
                <input type='checkbox' />
            </div>
            <div >
                <button  className={styles.dropDown}>^</button>
            <ul className={styles.list}>
                {items.map((item)=> (
                <li key={item.id}>
                    <div>#{item.uniqueId}</div>
                    <div>{shorten(item.created)}</div>
                   <input type='checkbox'    />
                </li>
                ))}
            </ul>
        
            </div>
        
        </div>))
     }
    </div>
  )
}

export default TodoList
