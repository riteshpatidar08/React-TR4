import { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {}
  };
  return (
    <ApiContext.Provider value={{ fetchData, todos }}>
      {children}
    </ApiContext.Provider>
  );
};
