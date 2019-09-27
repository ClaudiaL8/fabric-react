import React,{useContext} from 'react';
import {  Stack, Checkbox,IconButton } from 'office-ui-fabric-react';
import { Context } from '../context/Context';


export default function TaskItem({name,checked,id}) {
    const {tasks, setTasks} = useContext(Context);
    const handleEdit = () => {
        console.log('edit');
        
    }

    const handleDelete = e => {
        const eventId =  parseInt(e.currentTarget.getAttribute('data-id'))
        //const newArray = [...tasks]
        const arrayFiltered = tasks.filter(item => item.id !== eventId)
        setTasks(arrayFiltered)
    }

    const handleChecked = ({currentTarget}) => {
        const {id} = currentTarget;
        const newTasks = [...tasks];
        const index = newTasks.findIndex(item => item.id === parseInt(id));
        const selected = newTasks[index];
        selected.checked = !selected.checked;
        setTasks(newTasks);
    }

    return (
        <Stack horizontal horizontalAlign='space-between' verticalAlign='center'>
            <Checkbox 
                label={name}
                onChange={handleChecked}
                checked={checked}
                id={id}
            />
            <Stack horizontal>
                <IconButton 
                    iconProps={{ iconName: 'Edit' }}
                    ariaLabel='Edit'
                    onClick={handleEdit}
                />
                <IconButton 
                    iconProps={{ iconName: 'Cancel' }}
                    ariaLabel='Delete'
                    onClick={handleDelete}
                    data-id={id}
                />
            </Stack>
        </Stack>
    );
  }