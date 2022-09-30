import { useState, } from "react"
import React from "react"
const MusicContext=React.createContext<{ durations: string[], setDurations: React.Dispatch<React.SetStateAction<string[]>>}|null>(null);
const MusicProvider: React.FC<React.ReactNode>=(children:React.ReactNode)=>{
    const [durations, setDurations] = React.useState<string[]>([]);
    return (
        <MusicContext.Provider
          value={{ durations,setDurations}}>
          {children}
        </MusicContext.Provider> )
}
export{MusicProvider,MusicContext}