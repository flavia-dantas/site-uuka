import { Contact } from "@/types/strapi";
import { ArrowBigRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoUuka from "../../assets/images/logo-uuka.webp";

type FooterProps = {
  contact: Contact;
};

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

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-base">
          <div className="flex flex-col gap-2 md:items-start md:text-left">
            <p>© 2026 UUKA. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por:{" "}
              <Link
                href="https://www.linkedin.com/in/flavia-dantas/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F9c57b] transition"
              >
                Flavia Almeida
              </Link>
            </p>
          </div>

          <div className="flex flex-col gap-2 md:items-center md:text-center">
            <Link
              href="https://supportive-oasis-960fc14187.media.strapiapp.com/Politica_de_Privacidade_Uuka_1ebcdd03c6.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F9c57b] transition"
              aria-label="Política de Privacidade"
            >
              Política de Privacidade
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:items-end md:text-right">
            {contact?.ButtonLink ? (
              <Link
                href={contact.ButtonLink}
                className="hover:text-[#F9c57b] transition"
              >
                <div className="grid grid-cols-[24px_1fr] items-center gap-2 md:pr-5">
                  <div className="w-6 flex justify-end">
                    <ArrowBigRight size={18} />
                  </div>
                  <span className="leading-none">Quero fazer parte</span>
                </div>
              </Link>
            ) : (
              <div
                className="grid grid-cols-[24px_1fr] items-center gap-2 md:pr-5"
                aria-hidden
              >
                <div className="w-6 flex justify-end">
                  <ArrowBigRight size={18} />
                </div>
                <span className="leading-none">Quero fazer parte</span>
              </div>
            )}

            <Link
              href="mailto:admin@uuka.com.br"
              className="hover:text-[#F9c57b] transition"
            >
              <div className="grid grid-cols-[24px_1fr] items-center gap-2">
                <div className="w-6 flex justify-end">
                  <Mail size={18} />
                </div>
                <span className="leading-none">admin@uuka.com.br</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
