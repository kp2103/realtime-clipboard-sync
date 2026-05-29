import type { InputHTMLAttributes, ReactNode } from "react";

type InputType = 'text'|'search'|'number'|'checkbox'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
    containerStyle?:object,
    type:InputType
    placeholder:string,
}