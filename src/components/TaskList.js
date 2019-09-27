import React, {useContext} from 'react';
import { Context } from '../context/Context';
import TaskItem from './TaskItem';
import {  List } from 'office-ui-fabric-react';

export default function TaskList() {
    const {tasks,setTasks} = useContext(Context);
    return (
        <ul>
            {tasks.map(item => {
                const {id, name, checked} = item;
                return(
                    <li key={id}>
                        <TaskItem 
                            id={id} 
                            name={name} 
                            checked={checked} 
                        />
                    </li>
                )
            })}
        </ul>
    );
}