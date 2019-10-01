import React, { useContext } from 'react';
import { Pivot, PivotItem, Stack, DefaultButton } from 'office-ui-fabric-react';
import { Context } from '../context/Context';
import TaskItem from './TaskItem';

export default function FilterList() {
    const { tasks, setTasks } = useContext(Context);
    let complete = tasks.filter(task => task.checked === true);
    let actives = tasks.filter(task => task.checked === false);
    let activesLength = actives.length;

    const handleClick = (e) => {
        const completeFilter = tasks.filter(task => task.checked === false)
        setTasks(completeFilter)
    }

    return (
        <>
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
            <Stack horizontal verticalAlign='center' >
                <p>{activesLength} items left</p>
                <DefaultButton
                    text="Clear Completed"
                    onClick={handleClick}
                />
            </Stack>
        </>
    );
}