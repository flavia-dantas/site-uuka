'use client'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [somosOpen, setSomosOpen] = useState(false)
  const [metodologiaOpen, setMetodologiaOpen] = useState(false)
  const [diretoriaOpen, setDiretoriaOpen] = useState(false)

  const handleLinkClick = () => {
    setMobileOpen(false)
  }

  return (
    <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
      <SheetTrigger className="md:hidden hover:bg-[#F59F23]/10 p-2 rounded-lg transition-colors">
        <Menu className="text-[#F59F23] w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black border-r-2 border-[#F59F23]/20 w-screen h-screen p-0">
        <div className="flex flex-col h-full">
          {/* Header do Menu Mobile com botão de fechar */}
          <div className="p-6 border-b border-[#F59F23]/20 flex items-center justify-between">
            <SheetTitle className="text-xl font-bold text-[#F59F23]">EI, UUKAS!</SheetTitle>
            <SheetDescription className="sr-only">
              Menu de Navegação
            </SheetDescription>

            <Button
              onClick={() => setMobileOpen(false)}
              className="hover:bg-[#F59F23]/10 p-2 rounded-lg transition-colors"
            >
              <X className="text-[#F59F23] w-5 h-5" />
            </Button>
          </div>

          {/* Links do Menu Mobile */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {/* Somos */}
              <Collapsible open={somosOpen} onOpenChange={setSomosOpen}>
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold">
                  <span>Somos</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${somosOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 ml-4 space-y-1">
                  <a
                    href="#publico-alvo"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Público-Alvo
                  </a>
                  <a
                    href="#por-que"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Por que?
                  </a>
                  <a
                    href="#missao"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Missão
                  </a>
                  <a
                    href="#visao"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Visão
                  </a>
                  <a
                    href="#valores"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Valores
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Metodologia */}
              <Collapsible open={metodologiaOpen} onOpenChange={setMetodologiaOpen}>
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold">
                  <span>Metodologia</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${metodologiaOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 ml-4 space-y-1">
                  <a
                    href="#cronograma"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Cronograma
                  </a>
                  <a
                    href="#lideranca"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Liderança e Autoconhecimento
                  </a>
                  <a
                    href="#ciclo-virtuo"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Ciclo Virtuoso
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Diretoria */}
              <Collapsible open={diretoriaOpen} onOpenChange={setDiretoriaOpen}>
                <CollapsibleTrigger
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold">
                  <span>Diretoria</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${diretoriaOpen ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-1 ml-4 space-y-1">
                  <a
                    href="#parcerias"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Parcerias
                  </a>
                  <a
                    href="#apoiadores"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Apoiadores
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Depoimentos */}
              <a
                href="#depoimentos"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-[#F59F23] hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold"
              >
                Depoimentos
              </a>

              {/* Contatos */}
              <a
                href="#contatos"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-[#F59F23] hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold"
              >
                Contatos
              </a>
            </div>
          </nav>

          {/* Menu Mobile */}
          <div className="p-4 border-t border-[#F59F23]/20">
            <Button
              className="rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-[#F9c57b] transition text-xs md:text-sm font-bold whitespace-nowrap w-full"
            >
              Plataforma Mentorar
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}