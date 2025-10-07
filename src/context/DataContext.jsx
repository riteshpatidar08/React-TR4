//Step1 => import createContext function from the react

import { createContext } from "react";

//Step2 -> call the createContext function and saves its result in the variable you have used to create the file

 export const DataContext = createContext() ;

//step3 create a provider component which provides data to all the app components :
//Step4 define  the data  in  the data provider component which you are going to share across all the application

export const DataProvider = () => {
const userName = 'TEST'
    return (
<DataContext.Provider value={userName} >

</DataContext.Provider>
    )
}