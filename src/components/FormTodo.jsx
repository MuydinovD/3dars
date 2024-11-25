import { useState } from 'react';
import { toast } from 'sonner';

const FormTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.warning('Please, fill all fields');
      return;
    }

    addTodo({
      id: Math.random(),
      title: title,
      completed: false,
    });
    setTitle('');
  };

  return (
    <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
      <label>
        <span
          style={{
            fontSize: '20px',
            color: 'blue',
          }}
        >
          Title:
        </span>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>{' '}
      <br />
      <button
        style={{
          backgroundColor: 'blue',
          border: 'none',
          color: 'white',
          padding: '8px 18px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: '16px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormTodo;
