"use client"

import { Input } from "@/components/ui/input"
import { CloudCog, Search } from "lucide-react"
import React, { useState } from "react"

export const SearchInput = ({
    onChangeValue
}: {
    onChangeValue: (value:string) => void;
}) => {

    const [inputSearchText, setInputSearchText] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTarget = e.target.value;
        setInputSearchText(newTarget)
        onChangeValue(newTarget)
    }

    return (
        <div className="w-[437px] h-[68px] flex flex-row gap-2 items-center justify-center">
            <Search size={20} color="white"/>
            <Input placeholder="Search for movies or TV series" className="border-none text-primary-foreground" value={inputSearchText} onChange={handleChange}/>
        </div>
    )
}