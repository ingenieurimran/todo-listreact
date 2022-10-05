import React, { useState } from 'react'
import ToDoItem from './ToDoItem'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function App() {
  const [textInput, setTextInput] = useState('')
  const [items, setItems] = useState([])
  const [isToggleSubmit, setIsToggleSubmit] = useState(true)
  const [isNeuItemId, setIsNeuItemId] = useState(null)
  function handleChange(params) {
    const newTextInput = params.target.value
    setTextInput(newTextInput)
  }
  function handleClick(params) {
    const textInputNew = {
      id: new Date().getTime().toString(),
      name: textInput,
    }
    if (!textInput) {
    } else if (textInput && !isToggleSubmit) {
      setItems((preValue) => {
        return preValue.map((item) => {
          if (item.id === isNeuItemId) {
            return { ...item, name: textInput }
          } else {
            return item
          }
        })
      })
      setIsToggleSubmit(true)
      setTextInput('')
      setIsNeuItemId(null)
    } else {
      setItems((preValue) => {
        return [...preValue, textInputNew]
      })
    }

    setTextInput('')
  }

  function handleDelete(id) {
    setItems((preItems) => {
      return preItems.filter((item) => {
        return item.id !== id
      })
    })
  }

  function handleEdit(id) {
    let newTextInput = items.find((item) => {
      return item.id === id
    })
    setIsToggleSubmit(false)
    setTextInput(newTextInput.name)
    setIsNeuItemId(id)
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>React JS</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={textInput} type="text" />
        {isToggleSubmit ? (
          <AddCircleOutlineOutlinedIcon onClick={handleClick} style={{fontSize:'2.5rem'}}/>
        ) : (
          <EditOutlinedIcon
            title="Add Item"
            onClick={handleClick} />
        )}
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <ToDoItem
              key={toDoItem.id}
              id={toDoItem.id}
              text={toDoItem.name}
              onClickedDelete={handleDelete}
              onClickedEdit={handleEdit}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
