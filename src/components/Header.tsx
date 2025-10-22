import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoMain from "@/assets/logo-main.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoMain} alt="Elas na Tecnologia" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-600 hover:text-primary-green transition-colors">
              Sobre
            </a>
            <a href="#comunidade" className="text-gray-600 hover:text-primary-green transition-colors">
              Comunidade
            </a>
            <a href="#eventos" className="text-gray-600 hover:text-primary-green transition-colors">
              Eventos
            </a>
            <a href="#contato" className="text-gray-600 hover:text-primary-green transition-colors">
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero">Participar</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <a href="#sobre" className="text-gray-600 hover:text-primary-green transition-colors">
                Sobre
              </a>
              <a href="#comunidade" className="text-gray-600 hover:text-primary-green transition-colors">
                Comunidade
              </a>
              <a href="#eventos" className="text-gray-600 hover:text-primary-green transition-colors">
                Eventos
              </a>
              <a href="#contato" className="text-gray-600 hover:text-primary-green transition-colors">
                Contato
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button variant="outline" className="w-full">Entrar</Button>
                <Button variant="hero" className="w-full">Participar</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};