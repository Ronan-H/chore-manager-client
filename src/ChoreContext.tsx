import React, { useEffect, useState } from 'react';

type ChoreContextType = {
    showExpired: boolean,
    showExpiring: boolean,
    showAll: boolean,
    expiredChores: Chore[],
    expiringChores: Chore[]
    allChores: Chore[]
}

export const defaultChoreContext: ChoreContextType = {
    showExpired: false,
    showExpiring: false,
    showAll: true,
    expiredChores: [],
    expiringChores: [],
    allChores: []
};

export const ChoreContext = React.createContext<ChoreContextType>(defaultChoreContext);

export const ChoreProvider = ({ children }: any) => {
    const [data, setData] = useState(defaultChoreContext);
  
    useEffect(() =>{
        const baseUrl = 'http://Teresas-Mac.local:8000';
        fetch(`${baseUrl}/chores`).then((res) => res.json()).then((resJson) => {
            const newData: ChoreContextType = {
                showExpired: data.showExpired,
                showExpiring: data.showExpiring,
                showAll: data.showAll,
                expiredChores: data.expiredChores,
                expiringChores: data.expiringChores,
                allChores: resJson
            }
            setData(newData);
        });
        fetch(`${baseUrl}/chores/expired`).then((res) => res.json()).then((resJson) => {
            const newData: ChoreContextType = {
                showExpired: data.showExpired,
                showExpiring: data.showExpiring,
                showAll: data.showAll,
                expiredChores: resJson,
                expiringChores: data.expiringChores,
                allChores: data.allChores
            }
            setData(newData);
        });
        fetch(`${baseUrl}/chores/expiring`).then((res) => res.json()).then((resJson) => {
            const newData: ChoreContextType = {
                showExpired: data.showExpired,
                showExpiring: data.showExpiring,
                showAll: data.showAll,
                expiredChores: data.expiredChores,
                expiringChores: resJson,
                allChores: data.allChores
            }
            setData(newData);
        });
    },[]);
   
   const { Provider } = ChoreContext;
   return(
       <Provider value={data}>
           {children}
       </Provider>
   )
}
