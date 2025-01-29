import './App.css';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import TableView from './layouts/tableView/TableView';
import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 10, fullName: "ФИО 1", telephone: "+2222222220", notes: "Заметкa 2" },
    { id: 10, fullName: "ФИО 2", telephone: "+1010101010", notes: "Заметкa 1" },
    { id: 10, fullName: "ФИО 3", telephone: "+1010101010", notes: "Заметкa 1" },
    { id: 10, fullName: "ФИО 4", telephone: "+1010101010", notes: "Заметкa 1" }
  ])
  const appendContact = (fullName, telephone, notes) => {
    const currentId = items.length + 1;
    const temp = {
      id: currentId,
      fullName: fullName,
      telephone: telephone,
      notes: notes
    };
    setItems([...items, temp]);
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
          <TableView data={items} />
          <FormNewItem appendContact={appendContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
