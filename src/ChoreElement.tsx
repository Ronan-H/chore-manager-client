import React, { useContext, useState } from 'react';
import './App.css';
import { ChoreContext } from './ChoreContext';

type ChoreElementProps = {
    chore: Chore
}

function ChoreElement(props: ChoreElementProps) {
    const chore = props.chore;

    return (
        <div className='chore'>
            <span>{chore.name} - <i><b>{chore.days_remaining}</b> days remaining</i></span>
        </div>
    );
}

export default ChoreElement;
