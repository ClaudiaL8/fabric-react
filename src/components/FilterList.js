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
                    <ul>
                        {tasks.map(item => {
                            const { id, name, checked } = item;
                            return (
                                <li className="list__item" key={id}>
                                    <TaskItem
                                        id={id}
                                        name={name}
                                        checked={checked}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </PivotItem>
                <PivotItem headerText="active" >
                    <ul>
                        {actives.map(item => {
                            const { id, name, checked } = item;
                            return (
                                <li className="list__item" key={id}>
                                    <TaskItem
                                        id={id}
                                        name={name}
                                        checked={checked}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </PivotItem>
                <PivotItem headerText="completed">
                    <ul>
                        {complete.map(item => {
                            const { id, name, checked } = item;
                            return (
                                <li className="list__item" key={id}>
                                    <TaskItem
                                        id={id}
                                        name={name}
                                        checked={checked}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </PivotItem>
            </Pivot>
            <Stack horizontal verticalAlign='center' horizontalAlign='space-between'>
                <p>{activesLength} items left</p>
                <DefaultButton
                    text="Clear Completed"
                    onClick={handleClick}
                />
            </Stack>
        </>
    );
}