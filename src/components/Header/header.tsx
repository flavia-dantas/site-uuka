'use client'

import { Button } from "../ui/button"
import DesktopMenu from "./desktop-menu"
import MobileMenu from "./mobile-menu"

export default function Header() {
  return (
    <header className="bg-black text-[#F59F23] px-4 md:px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex justify-between items-center gap-4">
        {/* Left: Hamburger + Title */}
        <div className="flex items-center gap-3">
          <MobileMenu />
          <span className="font-bold text-base md:text-lg whitespace-nowrap">EI, UUKAS!</span>
        </div>

        {/* Center: Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <DesktopMenu />
        </div>

        {/* Right: button */}
        <Button
          className="hidden md:inline-flex rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-[#F9c57b] transition text-xs md:text-sm font-bold whitespace-nowrap"
        >
          Plataforma Mentorar
        </Button>
      </div>
    </header>
  )
}