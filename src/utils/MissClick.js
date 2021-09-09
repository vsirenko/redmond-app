import { useEffect, useRef } from "react"

export default function useClickOutside(initialIsVisible, cb, exception = false) {
    let ref = useRef(null)

    const handleClickOutside = event => {
        if (event && event.target && ref && ref.current  && !ref.current.contains(event.target) && !event.target.parentElement.classList.contains(exception)) {
                cb()
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
        
    })

    return  ref 
}