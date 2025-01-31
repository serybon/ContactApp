import './App.css';
import FormNewItem from './layouts/formNewItem/FormNewItem';
import TableView from './layouts/tableView/TableView';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const App = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8082/api/contacts')
      .then(res => {
        const data = [];
        res.data._embedded.contacts.forEach(item => {
          data.push(
            {
              id: item.id,
              fullName: item.fullName,
              telephone: item.telephone,
              notes: item.notes
            }
          )
        })
        setItems(data);
      })
  }, [])

  const appendContact = (fullName, telephone, notes) => {
    // let currentId = 0;
    // const length = items.length;

    // if (length === 0) {
    //   currentId = 1;
    // } else {
    //   currentId = items[items.length - 1].id + 1;
    // }
    const temp = {
      // id: currentId,
      fullName: fullName,
      telephone: telephone,
      notes: notes
    };
    const url = `http://localhost:8082/api/contacts`;
    axios.post(url, temp)
    setItems([...items, temp]);
  }
  const removeContact = (id) => {
    const url = `http://localhost:8082/api/contacts/${id}`;
    axios.delete(url);

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
