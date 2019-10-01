import React from 'react';
import './App.css';
import AdderTask from './components/AdderTask';
import TaskList from './components/TaskList';

import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#d4007d',
    themeLighterAlt: '#fdf3f9',
    themeLighter: '#f8d0e8',
    themeLight: '#f2a9d4',
    themeTertiary: '#e55cad',
    themeSecondary: '#d91a8b',
    themeDarkAlt: '#be0070',
    themeDark: '#a1005f',
    themeDarker: '#770046',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#bab8b7',
    neutralSecondary: '#a3a2a0',
    neutralPrimaryAlt: '#8d8b8a',
    neutralPrimary: '#323130',
    neutralDark: '#605e5d',
    black: '#494847',
    white: '#ffffff',
  }
});

export default function ToDoApp() {
    return (
        <div className="App">
        <h1>todos</h1>
        <AdderTask/>
        <TaskList/>
        </div>
    );
}