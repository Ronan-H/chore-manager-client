import React, { useContext, useState } from 'react';
import { prototype } from 'stream';
import './App.css';
import { ChoreContext } from './ChoreContext';
import { baseUrl } from './config';

type ChoreElementProps = {
    chore: Chore,
    resetChore: Function
}

function ChoreElement(props: ChoreElementProps) {
    const chore = props.chore;

    const onClick = () => {
        props.resetChore();
        // fetch(`${baseUrl}/chores/${chore.id}`, {
        //     method: 'PATCH'
        // });
    };

    return (
        <tr className='chore-row' onClick={onClick}>
            <th className="chore-header">{chore.name}</th>
            <td><i><b>{chore.days_remaining}</b> days remaining</i></td>
        </tr>
    );
}

export default ChoreElement;
