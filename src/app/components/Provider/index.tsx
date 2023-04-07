'use client'
import { GlobalStyle } from "@/app/styles/guide";
import { ReactNode } from "react";

export default function Proveider({children}: {children: ReactNode}) {

    return (
        <>
            <GlobalStyle />
            {children}
        </>
    )
}