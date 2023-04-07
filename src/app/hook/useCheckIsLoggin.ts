import { useCallback, useState } from "react";

export default function useCheckIsLoggin() {
    const [mount, setMount] = useState(false)

    const checkisLoggin = useCallback(() => {
        const isLoggin =  Boolean(sessionStorage.getItem("isLoggin"))
        return isLoggin
    }, [])

    return {
        mount,
        setMount,
        checkisLoggin
    }
}