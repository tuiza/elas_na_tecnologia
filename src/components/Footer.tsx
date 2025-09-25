import { Button } from "@/components/ui/button";
import { Heart, Instagram, Linkedin, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
              <span className="font-bold text-xl">TechConnect</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Conectando e fortalecendo mulheres na tecnologia da região Norte do Brasil.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-pink">
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-pink">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-primary-pink">
                <Github size={20} />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Comunidade</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Nossa Missão
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Mentoras
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Histórias de Sucesso
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Recursos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Workshops
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Materiais de Estudo
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Vagas de Emprego
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-2 text-gray-400">
              <p>contato@techconnect.com.br</p>
              <p>+55 (92) 99999-9999</p>
              <p>Manaus - AM</p>
            </div>
            <Button variant="hero" className="w-full">
              Junte-se a Nós
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 TechConnect. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Feito com</span>
              <Heart size={16} className="text-primary-pink" />
              <span>para mulheres na tecnologia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};