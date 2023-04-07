'use client'

import Select from "@/app/DesignSystem/Select"
import { OptionType } from "@/app/DesignSystem/Select/types"
import TextField from "@/app/DesignSystem/TextField"
import { useState } from "react"

const options = [
    {
        label: 'Psiquico',
        value: 10
    },
    {
        label: 'Monstro',
        value: 5
    },
    {
        label: 'Atravessar parade',
        value: 1
    },
    {
        label: 'Monstro',
        value: 9
    },
    {
        label: 'Monstro',
        value: 14
    },
    {
        label: 'Monstro',
        value: 53
    },
    {
        label: 'Monstro',
        value: 11
    },
]

export default function HomePage() {
    const [value, setValue] = useState<string>('')
    return (
        <div style={{width: '300px', margin: '0 auto'}}>
            <TextField type="text" name="test" value={value} placeholder="digite o texto" onChange={(event) => setValue(event.target.value)} />
        </div>
    )
}
  