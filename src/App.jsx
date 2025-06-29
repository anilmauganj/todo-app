import { useState, useEffect } from 'react';
import styles from './App.module.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Notification from './components/Notification';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
    //console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => [todo, ...prev]);
    setNotification('New to-do added successfully!');
    setTodo('');
  };

  const handleDelete = (indexToDelete) => {
    const confirmDelete = window.confirm('Are you sure to delete this to-do?');
    if (confirmDelete) {
      setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
      setNotification('To-do deleted successfully!');
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h2>To-Do App</h2>
          <Notification message={notification} />
          <TodoForm
            todo={todo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <hr />
        <h3>To-Do List</h3>
        <TodoList todos={todos} handleDelete={handleDelete} />
      </div>
    </>
  );
};

export default App;
