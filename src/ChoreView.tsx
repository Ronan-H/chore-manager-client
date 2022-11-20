import React, { useContext, useState } from 'react';
import './App.css';
import { ChoreContext } from './ChoreContext';
import ChoreElement from './ChoreElement';

function ChoreView() {
    const choreContext = useContext(ChoreContext);

    let shownChores: Chore[] = [];
    
    if (choreContext.showAll) {
        shownChores = choreContext.allChores;
    } else {
        if (choreContext.showExpired) {
            shownChores = [...choreContext.expiredChores];
        }
        if (choreContext.showExpiring) {
            shownChores = [...choreContext.expiringChores];
        }
    }

    console.log('Re-render chore view')

    return (
        <div className='chore-view'>
            {shownChores.map(chore => <ChoreElement chore={chore} />)}
        </div>
    );
}

export default ChoreView;
