import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Show from './components/Show';

import phonebookServices from './services/phonebook';
import UpdateForm from './components/Update';

const Notification = ({notification}) => {

  const notif = {
 
    color: 'blue',
    background: 'lightgrey',
    fontSize: 15,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10
  }

  if (notification === null) {
    return null
  }

  return (
    <div style={notif}>
      <p>{notification}</p>
    </div>
  ) 
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [idToUpdate, setIdToUpdate] = useState();
  const [message, setMessage] = useState(null);
  useEffect(() => {
    phonebookServices.getAll()
    .then(requestedValue => setPersons(requestedValue));
  }, [])

  const handleChange = (e) => {
    setNewName(e.target.value);
  }
  const handlePhone = (e) => {
    setNewNumber(e.target.value);
  }
  
  const addName = (e) => {
    e.preventDefault();
    
    let newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };
    console.log(newPerson);
    const existingNames = [];
    const existingNumbers = [];
    const dataCheck = () => {
      persons.map(person => existingNames.push(person.name));
      persons.map(person => existingNumbers.push(person.number));

      const getIdToUpdate = persons.find(person => person.name === newName);

      if (existingNames.includes(newName) && existingNumbers.includes(newNumber)) {

       if (window.confirm(`${newName} already exists in the phonebook, do you want to update the number`)) {
         setUpUpdateENV();
         setIdToUpdate(getIdToUpdate.id);
         return

       } else {
         return
       }

      } else if(existingNames.includes(newName) || existingNumbers.includes(newNumber)) {

        if (window.confirm(`${newName} or ${newNumber} already exists in the phonebook,do you want to update the number?`)) {
          setUpUpdateENV();
          setIdToUpdate(getIdToUpdate.id);
          return
 
        } else {
          return
        }
      }

      phonebookServices.create(newPerson)
      .then(returnedData => {
        setPersons(persons.concat(returnedData));
        setMessage(`added ${newName}`);
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        setNewName('');
        setNewNumber('');
        document.getElementById('input-name').value = '';
        document.getElementById('input-num').value = '';
      })

    }
    dataCheck();

  }
  const setUpUpdateENV = () => {
    document.getElementById('add-name-div').style.display = 'none';
    document.getElementById('update-name-div').style.display = '';

    document.getElementById('update-input-name').value = newName;
    document.getElementById('update-input-num').value = newNumber;

    document.getElementById('input-name').value = '';
    document.getElementById('input-num').value = '';
  }

  const updateName = (e) => {
    e.preventDefault();
    const personToUpdate = persons.find(person => person.id === idToUpdate);
    const personNewObject = {...personToUpdate, number: newNumber, name: newName};
    

      phonebookServices.update(idToUpdate, personNewObject)
      .then(returnedData => {
        const personToSet = persons.filter(person => person.id !== idToUpdate);
        setPersons(personToSet.concat(returnedData));
        setMessage(`Number ${newName} updated successfully!`);
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        handleUpdate();

      })

  }

  const handleUpdate = () => {

    document.getElementById('add-name-div').style.display = '';
    document.getElementById('update-name-div').style.display = 'none';
  }

  const filterPhonebook = (e) => {

    const ul = document.getElementById('number-list');

    const li = ul.getElementsByTagName("li");
    
    Array.from(li).forEach( i => {

      const details = i;

      const input = e.target.value;
      const newDetails = details.textContent.toUpperCase();

      if (newDetails.indexOf(input.toUpperCase()) > -1) {

        details.style.display = "";

      } else {

        details.style.display = 'none';
      }
    })
    
    
    
  }

  const deleteDetails = (id) => {
    phonebookServices.remove(id)
    .then(deletedInfo => {
      console.log('delete successful')
      const recentResult = persons.filter(person => person.id !== id)
      setPersons(recentResult)
    })
    .catch(errors => {
      setMessage(`Information ${newName} has already been removed from server`);
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    })
  }

  
  return (
    <div>
      <Header />
      <Notification notification={message} />
      <Form 
        addName={addName}
        handleChange={handleChange}
        handlePhone={handlePhone}
        filterPhonebook={filterPhonebook}
      />
      <UpdateForm
        updateName={updateName}
        handleChange={handleChange}
        handlePhone={handlePhone}
      />
      <Show
        persons={persons}
        onClick={deleteDetails}
      />
    </div>
  )
}

export default App;
