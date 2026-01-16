"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function DesktopMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-6">
        {/* somos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] 
          data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none font-bold"
          >
            <a
              href="#somos"
              className="text-[#F59F23] hover:text-[#C7C7C7] font-bold text-sm md:text-base"
              aria-label="Navegar para seção Somos"
            >
              Somos
            </a>
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] 
          [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none"
          >
            <NavigationMenuLink asChild>
              <a
                href="#publico-alvo"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Público-alvo"
              >
                Público-alvo
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#por-que"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Por que?"
              >
                Por que?
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#missao"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Missão"
              >
                Missão
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#visao"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Visão"
              >
                Visão
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#valores"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Valores"
              >
                Valores
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* metodologia */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] 
          data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none font-bold"
          >
            <a
              href="#metodologia"
              className="text-[#F59F23] hover:text-[#C7C7C7] font-bold text-sm md:text-base"
              aria-label="Navegar para seção Metodologia"
            >
              Metodologia
            </a>
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] 
          [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none"
          >
            <NavigationMenuLink asChild>
              <a
                href="#cronograma"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Cronograma"
              >
                Cronograma
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#uuka-em-numeros"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Uuka em Números"
              >
                Uuka em Números
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#lideranca"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Liderança e Autoconhecimento"
              >
                Liderança e Autoconhecimento
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#ciclo-virtuoso"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Ciclo Virtuoso"
              >
                Ciclo Virtuoso
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* diretoria */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className="!bg-transparent !text-[#F59F23] hover:!bg-black hover:!text-[#F9c57b] 
          data-[state=open]:!bg-black data-[state=open]:!text-[#F9c57b] focus:!bg-black focus:!text-[#F9c57b] !ring-0 !outline-none font-bold"
          >
            <a
              href="#diretoria"
              className="text-[#F59F23] hover:text-[#C7C7C7] font-bold text-sm md:text-base"
              aria-label="Navegar para seção Diretoria"
            >
              Diretoria
            </a>
          </NavigationMenuTrigger>

          <NavigationMenuContent
            className="!bg-black !text-[#F59F23] px-6 py-4 min-w-[200px] [&_a]:text-[#F59F23] 
          [&_a:hover]:text-[#F9c57b] !border-0 shadow-none rounded-none"
          >
            <NavigationMenuLink asChild>
              <a
                href="#parcerias"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Parcerias"
              >
                Parcerias
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                href="#apoiadores"
                className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base hover:font-bold"
                aria-label="Navegar para seção Apoiadores"
              >
                Apoiadores
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* depoimentos */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="#depoimentos"
              className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base font-bold"
              aria-label="Navegar para seção Depoimentos"
            >
              Depoimentos
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* contatos */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <a
              href="#contatos"
              className="text-[#F59F23] hover:text-[#C7C7C7] hover:bg-black text-sm md:text-base font-bold"
              aria-label="Navegar para seção Contatos"
            >
              Contatos
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
