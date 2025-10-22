import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, BookOpen, Trophy, Coffee } from "lucide-react";

export const CommunitySection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Networking Ativo",
      description:
        "Conecte-se com profissionais de toda a região Norte e expanda sua rede de contatos.",
    },
    {
      icon: BookOpen,
      title: "Aprendizado Contínuo",
      description:
        "Workshops, webinars e cursos focados nas tecnologias mais demandadas do mercado.",
    },
    {
      icon: Trophy,
      title: "Reconhecimento",
      description:
        "Celebramos conquistas e criamos oportunidades para você brilhar na sua área.",
    },
    {
      icon: Coffee,
      title: "Encontros Presenciais",
      description:
        "Meetups regulares nas principais cidades para fortalecer laços e trocar experiências.",
    },
  ];

  return (
    <section id="comunidade" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Nossa Comunidade
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um espaço seguro e inclusivo onde mulheres da tecnologia se
            conectam, crescem juntas e transformam o cenário tech da região
            Norte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-soft hover:shadow-green transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-green rounded-full">
                  <feature.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
