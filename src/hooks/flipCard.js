import { useState, useEffect } from "react"
import axios from "axios"

const useFlip = (initialState = true) => {
    const [isFlipped, setFlipped] = useState(initialState)

    const flip = () => {
        setFlipped(isUp => !isUp)
    }

    return [isFlipped, flip]
}

// const useAxios = (baseUrl) => {

// }

export default useFlip