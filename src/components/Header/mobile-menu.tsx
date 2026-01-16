"use client";

import Logo from "@/assets/images/logo.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Header as HeaderButton } from "@/types/strapi";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

type MobileMenuProps = {
  header: HeaderButton | null;
};

export default function MobileMenu({ header }: MobileMenuProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [isLeadershipOpen, setIsLeadershipOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      {/* Botão de abrir menu */}
      <SheetTrigger
        aria-label="Abrir o menu de navegação"
        className="lg:hidden hover:bg-[#F59F23]/10 p-2 rounded-lg transition-colors cursor-pointer"
      >
        <Menu className="text-[#F59F23] w-6 h-6" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-black border-r-2 border-[#F59F23]/20 w-screen h-screen p-0"
      >
        <div className="flex flex-col h-full">
          {/* Header do Menu Mobile com botão de fechar */}
          <div className="p-6 border-b border-[#F59F23]/20 flex items-center justify-between">
            <Image
              src={Logo}
              alt="Logo EI, UUKAS!"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />

            <SheetTitle className="text-xl font-bold text-[#F59F23]">
              EI, UUKAS!
            </SheetTitle>

            <SheetDescription className="sr-only">
              Menu de navegação
            </SheetDescription>

            <Button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Fechar o menu de navegação"
              className="hover:bg-[#F59F23]/10 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <X className="text-[#F59F23] w-5 h-5" aria-hidden="true" />
            </Button>
          </div>

          {/* Links do Menu Mobile */}
          <nav className="flex-1 overflow-y-auto p-4  custom-scrollbar">
            <div className="space-y-2 ">
              {/* Somos */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger
                  aria-expanded={isAboutOpen}
                  aria-controls="secao-somos"
                  aria-label="Alternar seção Somos"
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] 
                    hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold cursor-pointer"
                >
                  <span>
                    <a
                      href="#somos"
                      onClick={handleLinkClick}
                      className="flex items-center justify-between w-full"
                    >
                      Somos
                    </a>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-4 h-4 transition-transform cursor-pointer ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>

                <CollapsibleContent
                  id="secao-somos"
                  className="mt-1 ml-4 space-y-1"
                >
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
              <Collapsible
                open={isMethodologyOpen}
                onOpenChange={setIsMethodologyOpen}
              >
                <CollapsibleTrigger
                  aria-expanded={isMethodologyOpen}
                  aria-controls="secao-metodologia"
                  aria-label="Alternar seção Metodologia"
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] 
                    hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold cursor-pointer"
                >
                  <span>
                    <a
                      href="#metodologia"
                      onClick={handleLinkClick}
                      className="flex items-center justify-between w-full"
                    >
                      Metodologia
                    </a>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-4 h-4 transition-transform cursor-pointer ${
                      isMethodologyOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>

                <CollapsibleContent
                  id="secao-metodologia"
                  className="mt-1 ml-4 space-y-1"
                >
                  <a
                    href="#cronograma"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Cronograma
                  </a>

                  <a
                    href="#uuka-em-numeros"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Uuka em Números
                  </a>

                  <a
                    href="#lideranca"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Liderança e Autoconhecimento
                  </a>

                  <a
                    href="#ciclo-virtuoso"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 text-[#F59F23] hover:text-[#F9c57b] hover:bg-black rounded-lg transition-colors text-sm"
                  >
                    Ciclo Virtuoso
                  </a>
                </CollapsibleContent>
              </Collapsible>

              {/* Diretoria */}
              <Collapsible
                open={isLeadershipOpen}
                onOpenChange={setIsLeadershipOpen}
              >
                <CollapsibleTrigger
                  aria-expanded={isLeadershipOpen}
                  aria-controls="secao-diretoria"
                  aria-label="Alternar seção Diretoria"
                  className="flex items-center justify-between w-full px-4 py-3 text-[#F59F23] 
                    hover:bg-black hover:text-[#F9c57b] rounded-lg transition-colors font-bold cursor-pointer"
                >
                  <span>
                    <a
                      href="#diretoria"
                      onClick={handleLinkClick}
                      className="flex items-center justify-between w-full"
                    >
                      Diretoria
                    </a>
                  </span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`w-4 h-4 transition-transform cursor-pointer ${
                      isLeadershipOpen ? "rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>

                <CollapsibleContent
                  id="secao-diretoria"
                  className="mt-1 ml-4 space-y-1"
                >
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

            {/* Menu Mobile */}
            <div className="fixed pb-[env(safe-area-inset-bottom)] left-0 min-w-[320px] p-6 bg-black z-50">
              <Button
                asChild
                className="rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-[#F9c57b] transition text-xs md:text-sm font-bold whitespace-nowrap w-full"
              >
                {header?.ButtonLink ? (
                  <a href={header?.ButtonLink} target="_blank" rel="noreferrer">
                    {header?.ButtonLabel}
                  </a>
                ) : (
                  <span>{header?.ButtonLabel}</span>
                )}
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
