import React from 'react';
import './task1/index'
import './task2/index'
import Task from './task1/index';
import States from './task2/index';

export default class Root extends React.Component {
    render (){
        return (
            <div>
                <Task /> 
                <States />
            </div>
        )
    }
}