import React from 'react';
import {  Stack, Checkbox,IconButton } from 'office-ui-fabric-react';
import { log } from 'util';


export default function TaskItem() {
    const handleEdit = () => {
        console.log('edit');
        
    }

    const handleDelete = () => {
        console.log('delete');
        

    }

    return (
      <Stack horizontal horizontalAlign='space-between' verticalAlign='center'>
        <Checkbox 
            label = 'tarea'
            onChange={(e)=>{console.log(e.target.checked)}}
            checked = {true}
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
            />
        </Stack>
      </Stack>
    );
  }