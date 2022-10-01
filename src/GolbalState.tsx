import { useState, } from "react"
import React from "react"
type MusicProviderProps={
  children:React.ReactNode
}
const MusicContext=React.createContext<{ durations: string[], setDurations?: React.Dispatch<React.SetStateAction<string[]>>}|null>(null);
const MusicProvider=({children}:MusicProviderProps)=>{
    const [durations, setDurations] = React.useState<string[]>([]);
    return (
        <MusicContext.Provider
          value={{ durations,setDurations}}>
          {children}
        </MusicContext.Provider> )
}
export{MusicProvider,MusicContext}
