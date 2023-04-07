'use client'

import Alert from "@/app/DesignSystem/Alert"
import Card from "@/app/DesignSystem/Card"
import Label from "@/app/DesignSystem/Label"
import LinkHref from "@/app/DesignSystem/LinkHref"
import Select from "@/app/DesignSystem/Select"
import { OptionType } from "@/app/DesignSystem/Select/types"
import TextField from "@/app/DesignSystem/TextField"
import { useState } from "react"
import Layout from "../../Layout"

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
        <Layout>
            <div style={{width: '300px'}}>
            <LinkHref href={() => console.log('clicked')}>acessar link</LinkHref>
            </div>
        </Layout>
    )
}
  