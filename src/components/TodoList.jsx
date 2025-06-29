import styles from '../App.module.css';

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul className={styles.list}>
      {todos.length === 0 ? (
        <p>No to-do avalaible</p>
      ) : (
        todos.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}{' '}
            <button
              className={styles.deleteBtn}
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
