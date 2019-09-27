import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './ToDoApp';
import { ProviderContext } from './context/Context';
import { initializeIcons } from '@uifabric/icons';
initializeIcons();

ReactDOM.render(
    <ProviderContext>
        <ToDoApp />
    </ProviderContext>
    , document.getElementById('root')
);