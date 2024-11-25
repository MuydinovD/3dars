import { useState } from 'react';

// components
import TodoList from './components/TodoList';
import FormTodo from './components/FormTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Cleaning rooms',
      completed: false,
    },
    {
      id: 2,
      title: 'Washing dishes',
      completed: true,
    },
  ]);

  const addTodo = (todo) => {
    setTodos((prev) => {
      return [...prev, todo];
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Todo List</h1>
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

// const changeStatus = (id) => {
//   setTodos((prev) => {
//     return prev.map((todo) => {
//       if (id == todo.id) {
//         return { ...todo, completed: !todo.completed };
//       } else {
//         return todo;
//       }
//     });
//   });
// };

// const deleteTodo = (id) => {
//   setTodos((prev) => {
//     return prev.filter((todo) => todo.id != id);
//   });
// };

// return (
//   <>
//     <ul>
//       {todos.map((todo) => {
//         return (
//           <li key={todo.id} className={`${todo.completed ? 'copleted' : ''}`}>
//             <h4>{todo.title}</h4>
//             {!todo.completed && (
//               <button onClick={() => changeStatus(todo.id)}>Bajarish</button>
//             )}
//             {todo.completed && (
//               <button onClick={() => changeStatus(todo.id)}>Qaytarish</button>
//             )}

//             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//           </li>
//         );
//       })}
//       ;
//     </ul>
//   </>
// );

// function App() {
//   const [counter, setCounter] = useState(0);

//   const increment = () => {
//     setCounter(counter + 1);
//   };
//   const decrement = () => {
//     setCounter(counter - 1);
//   };

//   return (
//     <>
//       <h1>{counter}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   );
// }
