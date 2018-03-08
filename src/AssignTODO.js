import React, {Component} from 'react';
import TodoAdd from './Add';
import ToDoFilter from './Filter';
import todoList from './List';

class AssignTODO extends React.Component {
    constructor() {
        super();
        this.state = {
            itemList: [],
            selectedFilter: null,
            filteredList: []
        }
    }


    addTodo(text) {
        
        var todoItem = {
            text: text,
            id: this.state.itemList.length,
            status: false
        };

        this.state.itemList.push(todoItem);
        this.updateFilteredList(this.state.itemList);
    }

 

    render() {
        return (
            <div>
                <TodoAdd addTodo={this.addTodo.bind(this)} />
               
            </div>
        );
    }
}

export default AssignTODO;