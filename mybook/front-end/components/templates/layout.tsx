import { ReactNode } from "react";
import NavBar from "./header";


interface LayoutProps {
    children?: ReactNode
}

export default function Layout ({children}:LayoutProps) {
    return (
        <>
        <NavBar/>
        <main>{children}</main>
        </>
    )
}