import React from 'react';
import './App.css';
import AdderTask from './components/AdderTask';
import FilterList from './components/FilterList';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';
import TaskItemEdit from './components/TaskItemEdit';
import Summary from './components/Summary';
import { Context } from './context/Context';

export default function ToDoApp() {
    return (
        <div className="App">
        <h1>todos</h1>
        <AdderTask/>
        <FilterList/>
        <TaskList/>
        <TaskItemEdit/>
        <Summary/>
        </div>
    );
}