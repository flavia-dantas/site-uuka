'use client'

import { Header as HeaderButton } from "@/types/strapi"
import { Button } from "../ui/button"
import DesktopMenu from "./desktop-menu"
import MobileMenu from "./mobile-menu"

type HeaderProps = {
  header: HeaderButton;
}
export function Header({ header }: HeaderProps) {
  return (
    <header className="bg-black text-[#F59F23] px-4 md:px-6 fixed top-0 left-0 right-0 z-50 shadow-lg h-[72px]">
      <div className="flex justify-between items-center gap-4 h-full">
        <div className="flex items-center gap-3">
          <MobileMenu />
          <span className="font-bold text-base md:text-lg whitespace-nowrap">EI, UUKAS!</span>
        </div>

        <div className="hidden lg:flex flex-1 justify-center">
          <DesktopMenu />
        </div>

        <Button
          asChild
          className="hidden lg:inline-flex rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-[#F9c57b] transition text-xs md:text-sm font-bold whitespace-nowrap"
        >
          {header.ButtonLink ? (
            <a href={header.ButtonLink} target="_blank" rel="noreferrer">{header.ButtonLabel}</a>
          ) : (
            <span>{header.ButtonLabel}</span>
          )}
        </Button>
      </div>
    </header>
  )
}