import { useState } from "react"


export const useToggle = ()=>{
    const [toggle,setToggle] = useState(false)

    const changeToggle=()=>{
        setToggle((prev)=> !prev)
    }
    return [toggle,changeToggle]
}