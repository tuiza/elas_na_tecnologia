import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import communityEvent from "@/assets/community-event.jpg";

export const EventsSection = () => {
  const events = [
    {
      title: "Elas Talks - 2ª Edição",
      date: "22 de Outubro",
      time: "18:30 - 22:00",
      location: " Faculdade Faci Wyden Belém - PA",
      type: "Meetup",
      color: "pink",
    },
  ];

  return (
    <section id="eventos" className="py-20 bg-soft-green">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                Participe dos Nossos
                <span className="block text-primary-green">Eventos</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Encontros regulares para aprender, conectar e crescer juntas. 
                Eventos presenciais e online para todas as mulheres interessadas em tecnologia.
              </p>
            </div>

            <div className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.color === 'pink' 
                              ? 'bg-soft-pink text-primary-pink' 
                              : 'bg-soft-green text-primary-green'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {event.title}
                        </h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={16} />
                            <span className="text-sm">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={16} />
                            <span className="text-sm">{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} />
                            <span className="text-sm">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary-green hover:text-primary-green">
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="green" size="xl" className="w-full md:w-auto">
              Ver Todos os Eventos
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={communityEvent}
                alt="Eventos e networking da comunidade"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-pink rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-green rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};