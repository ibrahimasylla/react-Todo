import React, { Component } from 'react'
import  Item from  './TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <section>
              <h3>hello from Todo List</h3>
        <Item/>
            </section>
        )
    }
}
