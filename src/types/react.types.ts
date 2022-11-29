import {
  ButtonHTMLAttributes,
  Dispatch,
  FormHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SVGAttributes,
  SetStateAction
} from 'react'

export type TSetState<State> = Dispatch<SetStateAction<State>>
export type TFormProps = FormHTMLAttributes<HTMLFormElement>
export type TInputProps = InputHTMLAttributes<HTMLInputElement>
export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
export type TAnchorProps = ButtonHTMLAttributes<HTMLAnchorElement>
export type TSVGProps = SVGAttributes<SVGElement>
export type TTimer = string | number | NodeJS.Timeout | undefined

export interface IChildrenProps {
  children?: ReactNode
}
