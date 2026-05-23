import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
    title?:string
    btnType?:"Primary"|"Secondary"
}