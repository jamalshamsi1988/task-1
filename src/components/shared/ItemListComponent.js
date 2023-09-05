

import React, { useState } from 'react';
import { allData } from '../../data';
import { shorten } from './../../function/helper';

const ItemListComponent = ({ data }) => {
 
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

  return (
    <div>
      <div>
        <h3>Add Items</h3>
        <ul>
          {selectedItems.map((id) => {
            const item = data.find((item) => item.id === id);
            return <li key={id}>{item.title}</li>;
          })}
        </ul>
      </div>

      <div>
        <h3>All Items</h3>
        <ul>
          {unselectedItems.map((id) => {
            const item = data.find((item) => item.id === id);
            return <li key={id}>{item.title}</li>;
          })}
        </ul>
      </div>

      <div>
        {allData.map((item) => (
          <div key={item.uniqueId}>
            <input
              type="checkbox"
              id={item.id}
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <label htmlFor={item.id}>{item.created}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListComponent;