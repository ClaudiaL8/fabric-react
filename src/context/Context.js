import React, { createContext, useState } from 'react';

export const Context = createContext();


export const ProviderContext = props => {
    const [tasks, setTasks] = useState([
            {
              id: 1,
              name: 'Task1',
              checked: true,
            },
            {
              id: 2,
              name: 'Task2',
              checked: true,
            },
            {
              id: 3,
              name: 'Task3',
              checked: false,
            },
    ]);

    return (
        <Context.Provider value={{tasks,setTasks}}>
            {props.children}
        </Context.Provider>
    );
}