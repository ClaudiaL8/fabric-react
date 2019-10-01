import React, { useContext }  from 'react';
import { Context } from '../context/Context';
import { Stack, DefaultButton } from 'office-ui-fabric-react';

export default function Summary() {
    const { tasks, setTasks } = useContext(Context);
    let actives = tasks.filter(task => task.checked === false);
    let activesLength = actives.length;

    const handleClick = (e) => {
        const completeFilter = tasks.filter(task => task.checked === false)
        setTasks(completeFilter)
    }

    return (
        <Stack horizontal verticalAlign='center' >
            <p>{activesLength} items left</p>
            <DefaultButton
                text="Clear Completed"
                onClick={handleClick}
            />
        </Stack>
    );
}