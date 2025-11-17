import { Contact } from "@/types/strapi";
import { ArrowBigRight, Mail } from "lucide-react";
import Image from "next/image";
import LogoUuka from "../../assets/images/logo-uuka.webp";

type FooterProps = {
  contact: Contact;
}

export function Footer({ contact }: FooterProps) {
  return (
    <footer className="bg-black text-[#F59F23] py-10 px-6 md:px-10 lg:px-14">
      <div className="mx-auto flex flex-col gap-6">
        <div className="w-30 h-10 relative">
          <Image
            src={LogoUuka}
            alt="Logo Uuka"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between md:items-start gap-6 md:gap-0 text-sm">
          <div className="flex flex-col gap-2 md:items-start md:text-left order-3 md:order-none">
            <p>©2015 UUKA. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por:{" "}
              <a
                href="https://github.com/flavia-dantas"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F9c57b] transition"
              >
                Flavia Almeida
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-2 md:text-right order-2 md:order-none">
            <a
              href={contact.ButtonLink ? contact.ButtonLink : undefined}
              className="flex gap-2 hover:text-[#F9c57b] transition"
            >
              <ArrowBigRight size={18} />
              <span>Quero fazer parte</span>
            </a>
            <a
              href="mailto:admin@uuka.com.br"
              className="flex gap-2 hover:text-[#F9c57b] transition"
            >
              <Mail size={18} />
              <span>admin@uuka.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
