import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, Heart } from "lucide-react";
import logoSubmarca from "@/assets/logo-submarca.png";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 bg-soft-pink relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Conectando
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Mulheres do Norte
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Fortalecendo a presença feminina na tecnologia através de conexões, 
                mentoria e oportunidades de crescimento profissional.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="gap-2">
                Participar da Comunidade
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="xl">
                Saiba Mais
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-3">
                  <Users className="w-6 h-6 text-primary-green" />
                </div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Mulheres</div>
              </div>
            {/*   <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-3">
                  <Code className="w-6 h-6 text-primary-green" />
                </div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Eventos</div>
              </div> */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-primary-green" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src={logoSubmarca}
              alt="Elas na Tecnologia - Logo"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};