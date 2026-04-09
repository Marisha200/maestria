/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sparkles, 
  Wind, 
  Sun, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Flame,
  Heart,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  const temario = [
    { title: "Raíces y Fundamentos", items: ["Historia de Reiki", "Filosofía y aspectos religiosos", "Linaje Tradicional japonés", "Linaje Tradicional Occidental"] },
    { title: "El Espíritu de Reiki", items: ["El verdadero espíritu de Reiki: Anshin Ritsumei", "Purificación", "Trabajo interior para el desarrollo personal", "La importancia de los principios de Reiki"] },
    { title: "Herramientas de Crecimiento", items: ["Herramientas de trabajo y crecimiento interior", "Simbología: Qué es y cómo se aplica"] },
    { title: "Práctica y Maestría", items: ["Derribando mitos sobre el trabajo con energía", "Diferencias entre Reiki Occidental y el Reiki más puro", "La iniciación: Importancia, formato y protocolo", "Ética profesional", "Prácticas"] },
    { title: "Emprendimiento Holístico", items: ["Cómo comenzar tu emprendimiento holístico", "Dinámica grupal", "Cómo organizar cada taller / curso / seminario", "Recomendaciones y pauta publicitaria"] }
  ];

  return (
    <div className="min-h-screen selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#fdfdfb]">
        <div className="absolute inset-0 opacity-70">
          <img 
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Zen Garden" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-background"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary uppercase tracking-[0.2em] px-4 py-1 bg-white/50 backdrop-blur-sm">
              Formación 2026
            </Badge>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-6 text-foreground drop-shadow-sm">
              Maestría de Reiki <br />
              <span className="italic text-primary">Tradicional Japonés</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Un viaje sagrado hacia el despertar espiritual, la autosanación profunda y el arte de transmitir la luz.
            </p>
            <div className="flex items-center justify-center">
              <Button asChild size="lg" className="rounded-full px-12 h-14 text-lg bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20">
                <a href="#intro">Comenzar el camino</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <Sparkles className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Una Práctica Sagrada</h2>
            <p className="text-xl text-muted-foreground leading-relaxed italic">
              "Reiki es una práctica sagrada, digna de veneración y profundo respeto. 
              No sólo aumenta nuestra capacidad de autosanación, sino que nos da una brújula para una vida más plena."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000" 
                  alt="Meditation" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h3 className="text-3xl font-serif">El Despertar Espiritual</h3>
              <p className="text-muted-foreground leading-relaxed">
                El trabajo con Reiki y su naturaleza ilimitada nos permite crear incalculables oportunidades de crecimiento en todos los aspectos posibles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trabajar en nosotros mismos nos permite hacernos dueños y responsables de nuestra historia para siempre. Y una vez que lo vemos, ya no podemos volver atrás.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Autoconocimiento profundo",
                  "Responsabilidad de tu propia historia",
                  "Despertar del potencial creativo",
                  "Conexión con la verdad histórica"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mastery Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">La Maestría</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Abierta tanto a quienes buscan profundizar en su interior como a quienes sienten la imperiosa necesidad de transmitir este arte.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:bg-secondary/30 hover:shadow-xl transition-all duration-500 cursor-default">
              <Flame className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-serif mb-4">Avivar la Llama</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No es solo un protocolo. Es conocer las raíces filosóficas y religiosas para que la chispa de la sintonización se convierta en una llama eterna.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:bg-secondary/30 hover:shadow-xl transition-all duration-500 cursor-default">
              <Heart className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-serif mb-4">Pasión y Experiencia</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Formamos maestros motivados por su propia pasión, capaces de ayudar a quien llegue ante su presencia buscando la enseñanza.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="bg-background p-8 rounded-3xl border border-border/50 hover:border-primary/30 hover:bg-secondary/30 hover:shadow-xl transition-all duration-500 cursor-default">
              <Compass className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-serif mb-4">Tu Mejor Versión</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Incluso si no planeas enseñar ahora, el trabajo interior de la maestría te permite sacar la mejor versión de ti mismo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-4xl font-serif mb-12">Beneficios Exclusivos</h2>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Podrás repetir clases de Maestría y niveles sin cargo.",
                "Vas a poder participar de niveles para tomar apuntes y ver dinámicas.",
                "Vas a acompañarnos en los Reijus y dar temas en los cursos.",
                "Daremos asesoramiento para tu propio emprendimiento holístico.",
                "Podrás recuperar clases en caso de inasistencia.",
                "Si te falta algún nivel, te damos un descuento del 50% en el nivel faltante."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-secondary/20 border border-transparent hover:border-primary/20 transition-all duration-300">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground font-medium leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Temario Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <BookOpen className="w-10 h-10 text-primary/40 mx-auto mb-6" />
            <h2 className="text-4xl font-serif mb-4">Temario de la Formación</h2>
            <p className="text-muted-foreground">Un recorrido integral desde la historia hasta la ética profesional.</p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {temario.map((section, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="border border-primary/20 rounded-2xl px-6 bg-secondary/30 hover:bg-secondary/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-lg font-serif py-7 hover:no-underline hover:text-primary transition-colors group">
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-sans font-bold text-primary/40 group-hover:text-primary/60 transition-colors">0{idx + 1}</span>
                      {section.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="h-px w-full bg-primary/10 mb-6" />
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground/90 text-sm leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/30 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeIn} className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif">Detalles de la Formación 2026</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Duración y Horarios</h5>
                    <p className="text-muted-foreground text-sm">
                      8 meses (Mayo a Diciembre). <br />
                      Clases el segundo sábado de cada mes, de 15:30 a 19:30 hs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Modalidad</h5>
                    <p className="text-muted-foreground text-sm">
                      Presencial y encuentros virtuales (Webinars). <br />
                      Material para trabajar todo el mes a tu ritmo.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Sun className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium mb-1">Requisitos</h5>
                    <p className="text-muted-foreground text-sm">
                      Mínimo Nivel I. <br />
                      Niveles faltantes (II o III) al 50% de su valor.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground border-none rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20">
                <CardContent className="p-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-primary-foreground/70 uppercase tracking-widest text-xs font-bold">Inversión Mensual</span>
                    <Badge variant="secondary" className="bg-white/20 text-white border-none">Cupos Limitados</Badge>
                  </div>
                  <div className="text-6xl font-serif mb-2">$45.000</div>
                  <p className="text-primary-foreground/80 text-sm mb-8 leading-relaxed">
                    Incluye material, clases presenciales, webinars y la posibilidad de repetir clases sin cargo una vez concluida la formación.
                  </p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-white/95 hover:text-primary rounded-full h-14 font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-sm">
                    <a href="https://wa.me/5491149801624" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                      Reservar mi lugar
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Zen Stones" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-background p-8 rounded-[2rem] shadow-2xl border border-primary/10 max-w-xs hidden md:block">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  "Los futuros maestros serán iniciados entre Agosto y Septiembre, pudiendo comenzar a iniciar a otros desde ese momento."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-32 px-4 bg-[#2d2d2a] text-[#fafaf8]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-serif mb-8">¿Sentís el llamado?</h2>
            <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto font-light">
              No es solo ganas, es la necesidad de difundir algo que nos ha cambiado la forma de ver la vida.
            </p>
            <Button asChild size="lg" className="rounded-full px-12 h-16 text-xl bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-105">
              <a href="https://wa.me/5491149801624" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Quiero Más info <ChevronRight className="w-6 h-6" />
              </a>
            </Button>
            
            <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-left">
                <h4 className="font-serif text-2xl mb-2">Rincón Zen</h4>
                <p className="text-white/40 text-sm tracking-widest uppercase">Formación de Maestros 2026</p>
              </div>
              <div className="flex gap-8">
                <a href="https://www.instagram.com/rinconzen_reiki/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Instagram</a>
                <a href="https://wa.me/5491149801624" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">WhatsApp</a>
                <a href="mailto:info@rinconzen.com.ar" className="text-white/60 hover:text-white transition-colors text-sm font-medium">Email</a>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
