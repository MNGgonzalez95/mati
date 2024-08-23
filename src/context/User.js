"use client"
import {createContext,useState} from "react";

export const UserContext=createContext({});

export const UserProvider=({children})=>{

    const [name, setName] = useState("soy Luis desde el context");

    return(
        <UserContext.Provider
            value={({
                name
            })}
        >
            <div>{children}</div>
        </UserContext.Provider>
    )
}


