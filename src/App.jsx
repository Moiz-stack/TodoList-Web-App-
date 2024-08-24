import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Search from './Search/Search'
import Modal from './Modal/Modal'
import Card from './Card/Card'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

// Function to add a new item to the list
const addItemToList = (item) => {
  setTodoList((prevList) => [...prevList, item]);
};

// Function to update an existing item in the list
const updateItemInList = (item) => {
  const updatedList = todoList.map((todo) => {
    if (todo.id === item.id) {
      return item; 
    }
    return todo; // Keep other items unchanged
  });

  setTodoList(updatedList);
};

// Combined function to save the item (either add or update)
const handleSaveItem = (item) => {
  if (currentItem) {
    updateItemInList(item); 
  } else {
    addItemToList(item);
  }
  setIsModalOpen(false); // Close the modal after saving
  setCurrentItem(null); // Clear the current item
};

// Function to start editing an item
const handleEditItem = (item) => {
  setCurrentItem(item);
  setIsModalOpen(true);
};

// Function to delete an item from the list
const handleDeleteItem = (id) => {
  const filteredList = todoList.filter((todo) => todo.id !== id);
  setTodoList(filteredList);
};

  const filteredTodos = todoList.filter((todo) =>
    todo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <Search onSearch={(query) => setSearchQuery(query)} />

      <div className='flex justify-center mt-3'>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Add Todo
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveItem}
        currentItem={currentItem}
      />

      <div className='flex flex-wrap gap-4'>
        {filteredTodos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            onEdit={() => handleEditItem(todo)}
            onDelete={() => handleDeleteItem(todo.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;