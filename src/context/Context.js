import React, { createContext, useState } from 'react';

export const Context = createContext();


export const ProviderContext = props => {
    const [tasks, setTasks] = useState([]);
    return (
        <Context.Provider value={{tasks,setTasks}}>
            {props.children}
        </Context.Provider>
    );
}