import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
// import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./components/TodoItem";
uuidv4(); 
export default class App extends Component {


  state ={
    items:[{
      id:1,title:'wake'
    },{
      id:1,title:'make luche'
    }],
    id: uuidv4(),
    items:'',
    editItem:false
  }
  handleChange=(e)=>{
    
  }
  handleSubmit=(e)=>{
    
  }
  ClearList=()=>{
    
  }
  handleDelet=(id)=>{
    
  }
  handleEdit=(id)=>{
    
  }
  render() {
    console.log(this.state)
    return (
      <div>
     <div className="container">
       <div className="row">
       <div className="col-10 xm-auto col-md-8 mt-5">
         <h3 className="text-capitalize tex-center"></h3>
         <TodoInput items={this.state.items} handleChange={this.state.handleChange}
         handleSubmit={this.that.handleSubmit} handleDelet={this.that.handleSubmit}
         />
         <TodoList items={this.state.items} handleChange={this.state.handleChange}
         handleSubmit={this.that.handleSubmit} handleDelet={this.that.handleSubmit}
         />
       </div>

   
       </div>
     </div>
      </div>
    )
  }
}

