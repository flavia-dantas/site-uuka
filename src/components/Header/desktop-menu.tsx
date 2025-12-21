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
              className="text-[#F59F23] hover:text-[#F9c57b] font-bold text-sm md:text-base"
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
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Público-alvo
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#por-que"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Por que?
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#missao"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Missão
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#visao"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Visão
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#valores"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
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
              className="text-[#F59F23] hover:text-[#F9c57b] font-bold text-sm md:text-base"
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
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Cronograma
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#lideranca"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Liderança e Autoconhecimento
              </a>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <a
                href="#ciclo-virtuoso"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
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
              className="text-[#F59F23] hover:text-[#F9c57b] font-bold text-sm md:text-base"
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
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
              >
                Parcerias
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                href="#apoiadores"
                className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base hover:font-bold"
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
              className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base font-bold"
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
              className="text-[#F59F23] hover:text-[#F9c57b] hover:bg-black text-sm md:text-base font-bold"
            >
              Contatos
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
