'use client'

import Alert from "@/app/DesignSystem/Alert"
import Card from "@/app/DesignSystem/Card"
import Label from "@/app/DesignSystem/Label"
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
    return (
        <div style={{width: '300px'}}>
        <Card 
            id={10}
            title="Charles Xavier" 
            description="Lorem ipsum dolor sit amet consectetur. Tellus bibendum blandit orci volutpat convallis orci. Ornare id in ac leo non aenean ut sollicitudin." 
            category={{label: 'Psquico', variant:'secondary'}}
            actions={{
                onDelete(id) {
                    console.log('deleta', id)
                },
                onEdit(id) {
                    console.log('edit', id)
                },
            }}
            />
        </div>
    )
}
  