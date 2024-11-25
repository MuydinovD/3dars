const TodoItem = ({ todo, setTodos }) => {
  const changeStatus = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (id == todo.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id != id);
    });
  };

  return (
    <li
      key={todo.id}
      style={{
        padding: '10px',
        margin: '10px',
        backgroundColor: todo.completed ? '#d4edda' : '#f8d7da',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h4 style={{ margin: 0 }}>{todo.title}</h4>
      <div>
        {!todo.completed && (
          <button
            onClick={() => changeStatus(todo.id)}
            style={{
              marginRight: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Bajarish
          </button>
        )}
        {todo.completed && (
          <button
            onClick={() => changeStatus(todo.id)}
            style={{
              marginRight: '5px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Qaytarish
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
