import React from 'react';

import { allData } from './data'; // داده های مورد استفاده
import ItemListComponent from './components/shared/ItemListComponent';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      
      <h2>All Data</h2>
      {/* <ItemListComponent data={allData} /> */}
      <TodoList data={allData} />
      
    </div>
    </Provider>
  );
};

export default App;