import React, { useContext } from 'react';
import { Context } from '../context/Context';
import TaskItem from './TaskItem';
import FilterList from './FilterList';

export default function TaskList() {
    return (
        <ul>
            <FilterList />
        </ul>
    );
}