import './styles.css';

import { Todo, TodoList } from './classes/index'; //si no especificamos nombre busca index.js por defecto
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();


// todoList.todos.forEach( todo => crearTodoHtml( todo ) );

// Es lo mismo, se puede poner así porque solo se envia un argumento
// solo funciona así cuando es 1 ARGUMENTO
todoList.todos.forEach( crearTodoHtml );


console.log( 'todos', todoList.todos );