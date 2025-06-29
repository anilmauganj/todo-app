import styles from '../App.module.css';

const TodoForm = ({ todo, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.inputBox}
        type="text"
        name="todo"
        value={todo}
        onChange={handleChange}
        placeholder="Enter todo"
        required
      />
      <br /> <br />
      <button className={styles.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
