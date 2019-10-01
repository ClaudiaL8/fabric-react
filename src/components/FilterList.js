import React, { useContext } from 'react';
import { Pivot, PivotItem } from 'office-ui-fabric-react';
import { Context } from '../context/Context';
import TaskItem from './TaskItem';

export default function FilterList() {
    const { tasks } = useContext(Context);
    let complete = tasks.filter(task => task.checked === true);
    let actives = tasks.filter(task => task.checked === false);

    return (
        <Pivot>
            <PivotItem headerText="all">
                {tasks.map(item => {
                    const { id, name, checked } = item;
                    return (
                        <li key={id}>
                            <TaskItem
                                id={id}
                                name={name}
                                checked={checked}
                            />
                        </li>
                    )
                })}
            </PivotItem>
            <PivotItem headerText="active" >
                {actives.map(item => {
                    const { id, name, checked } = item;
                    return (
                        <li key={id}>
                            <TaskItem
                                id={id}
                                name={name}
                                checked={checked}
                            />
                        </li>
                    )
                })}
            </PivotItem>
            <PivotItem headerText="completed">
                {complete.map(item => {
                    const { id, name, checked } = item;
                    return (
                        <li key={id}>
                            <TaskItem
                                id={id}
                                name={name}
                                checked={checked}
                            />
                        </li>
                    )
                })}
            </PivotItem>
        </Pivot>
    );
}