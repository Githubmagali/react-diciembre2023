import { useState } from 'react';
import Form from './components/Form';
import Stats from './components/Starts';
import PackingList from './components/PackingList';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (

    <div className="app">
  <Form handleAddItems={handleAddItems} />
  <PackingList items={items} handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}handleClearList={handleClearList} />
  <Stats items={items} />
    </div>
  );
}


