'use client'

import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contatos"
      className="pt-[72px] w-full bg-[#F59F23] text-black"
    >
      <div className="h-[calc(100vh-72px)] w-full flex flex-col justify-between p-6 md:p-12 lg:p-16 pb-8 gap-8 md:gap-4">

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 flex-1 justify-center lg:justify-between items-center">

          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-black" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                  admin@uuka.com.br
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Instagram className="w-6 h-6 text-black" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                  Instagram
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-black" />
                <span className="text-sm sm:text-base md:text-lg lg:text-xl text-black">
                  LinkedIn
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end">
            <div className="bg-[#f9c57b] rounded-2xl p-6 sm:p-8 lg:p-10 w-full lg:max-w-xl text-center flex flex-col justify-center gap-y-6">
              <p className="text-sm sm:text-base md:text-lg font-medium text-black">
                Quero fazer parte como voluntário!
              </p>
              <Button
                className="rounded-xl bg-[#F59F23] text-black px-3 md:px-4 py-2 hover:bg-white transition text-xs md:text-sm font-bold whitespace-nowrap w-full"
              >
                CADASTRAR
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black">
          contatos
        </h2>
      </div>
    </section>
  );
}
