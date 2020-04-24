import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
export default class App extends Component {
  render() {
    return (
      <div>
     <div className="container">
       <div className="row">
        < TodoInput />
         < TodoList />
   
       </div>
     </div>
      </div>
    )
  }
}

