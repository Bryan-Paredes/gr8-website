import {
  WhatsAppIcon,
  FaceBookIcon,
  InstagramIcon,
} from "@/components/ui/icons";
import { menuItems } from "@/data/site";
import Image from "next/image";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-transparent text-gray-300 py-8">
      <div className="container mx-auto px-4 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="Logo"
              loading={"lazy"}
              width={100}
              height={40}
            />
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/tunumero"
              className="hover:text-primary hover:scale-110 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={30} />
            </a>
            <a
              href="https://instagram.com/tuusuario"
              className="hover:text-primary hover:scale-110 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={30} />
            </a>
            <a
              href="https://facebook.com/tupagina"
              className="hover:text-primary hover:scale-110 transition-colors"
              aria-label="Facebook"
            >
              <FaceBookIcon size={30} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center mb-10">
          <p>&copy; {currentYear} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
