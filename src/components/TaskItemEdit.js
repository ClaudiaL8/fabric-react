import React, {useContext, useState} from 'react';
import { TextField, PrimaryButton, Stack } from 'office-ui-fabric-react';
import { Context } from '../context/Context';

export default function TaskItemEdit({name, id, setIsEditing}) {
    const { tasks, setTasks } = useContext(Context);

    const handleChange = (e) => {
        const getId = parseInt(e.target.id);
        const index = tasks.findIndex(item => item.id === getId);
        const editTasks = [...tasks];
        editTasks[index].name = e.target.value;
        setTasks(editTasks)
    }

    const handleClick = (e) => {
        setIsEditing(false)
    }

    return (
        <Stack horizontal>
             <TextField
                className="border-radius"
                placeholder="Add Task"
                // onFocus={() => console.log('onFocus called')}
                // onBlur={() => console.log('onBlur called')}
                onChange={handleChange}
                value={name}
                // onKeyPress={({ key }) => {
                //     if (key === 'Enter') {
                //         // handleClick();
                //     }
                // }}
                id={id}
            />
            <PrimaryButton
                text="Save"
                className="border-radius"
                // iconProps={{ iconName: 'Add' }}
                onClick={handleClick}
                allowDisabledFocus
                ariaLabel='Edit task'
            />
        </Stack>
    );
}