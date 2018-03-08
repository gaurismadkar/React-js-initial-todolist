import React, { Component } from 'react';


const ToDoFilter = (props) => {

    return (
        <div className="filters">
            <span>Count : {props.todoList.length} items left</span>
            <span onClick={() => {
                props.updateFilter(null)
            }} >All</span>
            <span onClick={() => {
                props.updateFilter(false)
            }} >Active</span>
            <span onClick={() => {
                props.updateFilter(true)
            }} >Completed</span>
        </div>
    );

}

export default ToDoFilter;
