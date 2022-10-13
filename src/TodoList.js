import React from 'react';
import Todo from './Todo';
import { Paper, List, Divider } from '@mui/material';

const TodoList = ({ todos, removeTodo, toggleTodo}) => {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <Todo toggleTodo={toggleTodo}
             id={todo.id} 
            key={todo.id} 
            task={todo.task} 
            completed={todo.completed} 
            removeTodo={removeTodo} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
