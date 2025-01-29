import './App.css';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import TableView from './layouts/tableView/TableView';
import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, fullName: "ФИО 1", telephone: "+2222222220", notes: "Заметкa 1" },
    { id: 2, fullName: "ФИО 2", telephone: "+1010101010", notes: "Заметкa 2" },
    { id: 3, fullName: "ФИО 3", telephone: "+1010101010", notes: "Заметкa 3" },
    { id: 4, fullName: "ФИО 4", telephone: "+1010101010", notes: "Заметкa 4" }
  ])
  const appendContact = (fullName, telephone, notes) => {
    let currentId = 0;
    const length = items.length;

    if (length === 0) {
      currentId = 1;
    } else {
      currentId = items[items.length - 1].id + 1;
    }
    const temp = {
      id: currentId,
      fullName: fullName,
      telephone: telephone,
      notes: notes
    };
    setItems([...items, temp]);
  }
  const removeContact = (id) => {
    setItems(items.filter(item => item.id !== id));

  }
  return (
    <div className='container mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h1>
            Список контактов
          </h1>
        </div>
        <div className='card-body'>
          <TableView data={items} removeContact={removeContact} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
