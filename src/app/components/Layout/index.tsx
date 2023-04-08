'use client'

import useCheckIsLoggin from "@/app/hook/useCheckIsLoggin";
import { ReactNode, useEffect, useState } from "react";
import Header from "../Header";
export default function Layout({children}: {children: ReactNode}) {
    const { mount, setMount, checkisLoggin } = useCheckIsLoggin()

    useEffect(() => {
        if(!checkisLoggin()) {
            window.location.href = '/login'
        }else {
            setMount(true)
        }
    }, [checkisLoggin])

    if(!mount) {
        return <></>
    }

    return (
        <main>
            {children}
        </main>
    )
}