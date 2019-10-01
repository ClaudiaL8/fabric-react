import React, {useState, useContext} from 'react';
import { PrimaryButton, Stack, SearchBox } from 'office-ui-fabric-react';
import { Context } from '../context/Context';

export default function AdderTask() {
    const {tasks, setTasks} = useContext(Context)
    const [value, setValue] = useState('');

    const handleClick = () => {
        const lastIndex = tasks.length - 1;
        let newIndex;
        tasks[lastIndex] ? newIndex= tasks[lastIndex].id +1: newIndex=1;
        const newTask = {
            id: newIndex,
            name:  value ,
            checked: false,
        }
        const newTasks = tasks.concat(newTask)
        setTasks(newTasks)
        setValue('');
    }

    const handleChange = ({target}) => {
        const {value : inputValue} = target;
        setValue(inputValue)
    }
    return (
        <Stack horizontal>
            <SearchBox
                className="border-radius"
                placeholder="Add Task"
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                iconProps={{ iconName: 'Add' }}
                onChange={handleChange}
                value={value}
                onKeyPress={({key}) => {
                    if(key==='Enter'){
                        handleClick();
                    }
                }}
            />
            {/*   checked={checked}  */}
            <PrimaryButton 
                text="Add"
                className="border-radius" 
                // iconProps={{ iconName: 'Add' }}
                onClick={handleClick}
                allowDisabledFocus
                ariaLabel='Add task'
                //disabled
               // checked
                />
        </Stack>
    );
}
