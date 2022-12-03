import React, { useContext, useState } from 'react';
import './App.css';
import { ChoreContext } from './ChoreContext';
import ChoreElement from './ChoreElement';

type ChoreViewProps = {
    showExpired: boolean,
    showExpiring: boolean
}

function ChoreView(props: ChoreViewProps) {
    const choreContext = useContext(ChoreContext);
    let shownChores: Chore[] = [
        ...(props.showExpired ? choreContext.expiredChores : []),
        ...(props.showExpiring ? choreContext.expiringChores : []),
    ];

    if (!props.showExpired && !props.showExpiring && shownChores.length === 0) {
        shownChores = choreContext.allChores;
    }

    shownChores.sort((a, b) => a.days_remaining - b.days_remaining);

    return (
        <div className='chore-view'>
            {shownChores.map(chore => <ChoreElement chore={chore} resetChore={() => {choreContext.resetChore(chore.id)}} />)}
        </div>
    );
}

export default ChoreView;
