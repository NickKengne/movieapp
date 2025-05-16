import React from "react"
import Image from "next/image"
import { LayoutDashboard } from "lucide-react"
import Link from "next/link"

export const SideBar = () => {

    const navLinks = [
        {
            title: "Home",
            icon: <LayoutDashboard size={32} color="white"/>,
            redirectTo: "/"
        }
    ]

    return (
        <div className="w-[80px] h-[90vh] bg-secondary rounded-md flex flex-col items-center py-4">
                <LogoComponent/>

                <div className="mt-[38px]">
                    {navLinks.map((navItems,index) => (
                        <Link key={index} href={navItems.redirectTo}>
                            {navItems.icon}
                        </Link>
                    ))}
                </div>
        </div>
    )
}


const LogoComponent = () => {
    return (
        <div>
            <Image alt="logo-movie-app" src={"https://cdn-icons-png.flaticon.com/512/3698/3698776.png"} width={40} height={40}/>
        </div>
    )
}