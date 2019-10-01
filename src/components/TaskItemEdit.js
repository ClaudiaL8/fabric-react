import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { PrimaryButton, Stack } from 'office-ui-fabric-react';

export default function TaskItemEdit({name}) {
    return (
        <Stack horizontal>
            <SearchBox
                className="border-radius"
                placeholder="Add Task"
                onFocus={() => console.log('onFocus called')}
                onBlur={() => console.log('onBlur called')}
                // onChange={handleChange}
                value={name}
                onKeyPress={({ key }) => {
                    if (key === 'Enter') {
                        // handleClick();
                    }
                }}
            />
            <PrimaryButton
                text="Save"
                className="border-radius"
                // iconProps={{ iconName: 'Add' }}
                // onClick={handleClick}
                allowDisabledFocus
                ariaLabel='Edit task'
            />
        </Stack>
    );
}