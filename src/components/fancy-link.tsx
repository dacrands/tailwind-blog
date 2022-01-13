import React from "react"

type Props = {
  href: string;
  children: JSX.Element | string;
}

export const FancyLink = ({ children, href }: Props) => (
  <a className="
          tracking-wide
          underline 
          underline-offset-4
          decoration-2
          text-zinc-700
          dark:text-white
          decoration-yellow-400 
          dark:decoration-yellow-500    
          hover:decoration-wavy                                  
          font-bold"
    target={"_blank"}
    rel={"noreferrer"}
    href={href}
  >
    {children}
  </a>
)