import React, { useEffect, useState } from 'react';

type ChoreContextType = {
    expiredChores: Chore[],
    expiringChores: Chore[]
    allChores: Chore[],
    resetChore: Function
}

export const defaultChoreContext: ChoreContextType = {
    expiredChores: [],
    expiringChores: [],
    allChores: [],
    resetChore: () => {}
};

export const ChoreContext = React.createContext<ChoreContextType>(defaultChoreContext);

export const ChoreProvider = ({ children }: any) => {
    const [data, setData] = useState(defaultChoreContext);

    useEffect(() => {
        const updatedData: ChoreContextType = {
            ...defaultChoreContext,
            expiredChores: [
                {
                    id: 0,
                    name: 'Clean kitchen',
                    frequency: 5,
                    reminder_time: 'Morning',
                    days_remaining: 0
                },
                {
                    id: 1,
                    name: 'Clean bathroom',
                    frequency: 5,
                    reminder_time: 'Morning',
                    days_remaining: 0
                }
            ],
            expiringChores: [
                {
                    id: 2,
                    name: 'Bath Remy',
                    frequency: 8,
                    reminder_time: 'Evening',
                    days_remaining: 1
                },
                {
                    id: 3,
                    name: 'Dust surfaces',
                    frequency: 5,
                    reminder_time: 'Morning',
                    days_remaining: 1
                }
            ]
        };
        updatedData.allChores = [
            ...updatedData.expiredChores,
            ...updatedData.expiringChores,
            {
                id: 4,
                name: 'Wash clothes',
                frequency: 8,
                reminder_time: 'Evening',
                days_remaining: 5
            },
            {
                id: 5,
                name: 'Wash car',
                frequency: 5,
                reminder_time: 'Morning',
                days_remaining: 3
            }
        ];
        updatedData.resetChore = (id) => {
            const reset = (chore: Chore) => {
                return {
                    ...chore,
                    days_remaining: chore.id === id ? chore.frequency : chore.days_remaining
                };
            };

            setData((oldData) => { return {
                expiredChores: oldData.expiredChores.map(reset),
                expiringChores: oldData.expiringChores.map(reset),
                allChores: oldData.allChores.map(reset),
                resetChore: oldData.resetChore
            }});
        };
        setData(updatedData);

        // const baseUrl = 'http://Teresas-Mac.local:8000';
        // fetch(`${baseUrl}/chores`).then((res) => res.json()).then((resJson) => {
        //     const newData: ChoreContextType = {
        //         showExpired: data.showExpired,
        //         showExpiring: data.showExpiring,
        //         showAll: data.showAll,
        //         expiredChores: data.expiredChores,
        //         expiringChores: data.expiringChores,
        //         allChores: resJson
        //     }
        //     setData(newData);
        // });
        // fetch(`${baseUrl}/chores/expired`).then((res) => res.json()).then((resJson) => {
        //     const newData: ChoreContextType = {
        //         showExpired: data.showExpired,
        //         showExpiring: data.showExpiring,
        //         showAll: data.showAll,
        //         expiredChores: resJson,
        //         expiringChores: data.expiringChores,
        //         allChores: data.allChores
        //     }
        //     setData(newData);
        // });
        // fetch(`${baseUrl}/chores/expiring`).then((res) => res.json()).then((resJson) => {
        //     const newData: ChoreContextType = {
        //         showExpired: data.showExpired,
        //         showExpiring: data.showExpiring,
        //         showAll: data.showAll,
        //         expiredChores: data.expiredChores,
        //         expiringChores: resJson,
        //         allChores: data.allChores
        //     }
        //     setData(newData);
        // });
    }, []);
   
   const { Provider } = ChoreContext;
   return(
       <Provider value={data}>
           {children}
       </Provider>
   )
}
