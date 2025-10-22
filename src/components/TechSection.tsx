import { Button } from "@/components/ui/button";
import { Sparkles, Target, Zap } from "lucide-react";
import heroWomen from "@/assets/hero-women.jpg";

export const TechSection = () => {
  return (
    <section className="py-20 bg-gradient-pink relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={heroWomen}
              alt="Mulheres profissionais conectadas em tecnologia"
              className="w-full h-auto rounded-2xl shadow-soft"
            />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
          </div>

          <div className="space-y-8 text-white">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                A Tecnologia é um espaço para 
                <span className="block">todas nós</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Capacitamos mulheres do Norte do Brasil para liderar na tecnologia, 
                oferecendo suporte, conhecimento e uma rede de apoio forte.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mentoria Personalizada</h3>
                  <p className="opacity-90">Conectamos você com profissionais experientes para acelerar sua carreira.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Oportunidades Reais</h3>
                  <p className="opacity-90">Parcerias com empresas oferecem vagas exclusivas para nossa comunidade.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Crescimento Acelerado</h3>
                  <p className="opacity-90">Workshops, cursos e eventos para desenvolver suas habilidades técnicas.</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary-pink">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};