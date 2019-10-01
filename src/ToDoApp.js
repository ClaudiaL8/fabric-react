import React from 'react';
import './App.css';
import AdderTask from './components/AdderTask';
import FilterList from './components/FilterList';
import TaskList from './components/TaskList';
import Summary from './components/Summary';

export default function ToDoApp() {
    return (
        <div className="App">
        <h1>todos</h1>
        <AdderTask/>
        <TaskList/>
        <Summary/>
        </div>
    );
}