import React, {useContext} from 'react';
import { Context } from '../context/Context';
import TaskItem from './TaskItem';
import {  List } from 'office-ui-fabric-react';

export default function TaskList() {
    const {tasks} = useContext(Context);
    console.log(tasks)
    return (
        <List items= {tasks} onRenderCell={TaskItem}/>
        // <ul>
        //     {tasks.map(item => {
        //         const {id, name, checked} = item;
        //         return(
        //             <li>
        //                 <TaskItem 
        //                     key={id} 
        //                     name={name} 
        //                     checked={checked} 
        //                 />
        //             </li>
        //         )
        //     })}
        // </ul>
    );
}