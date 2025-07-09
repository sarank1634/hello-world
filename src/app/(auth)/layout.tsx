"use client"

import { link } from "fs"
import Link from "next/link"
import {usePathname} from 'next/navigation'
import "./style.css"


const navLinks= [
  {name: "Register", href: "/register"},
  {name: 'Login', href: '/login'},
  {name: 'Forget Password', href: '/forget-password'}
]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (pathname.startsWith(link.href)&& link.href !=="/")
        return(
        <Link className={isActive ? "font-bold mr-4": "text-blue-500 mr-4"}
         href={link.href}
          key={link.name}
          >
            {link.name}
          </Link>
        );
      })}  
      {children}
    </div>
  )
}