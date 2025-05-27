'use client';

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, HeartPulse, Shield } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="mt-[100px] w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 overflow-hidden">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-block rounded-full bg-blue-200/70 dark:bg-blue-800/70 px-4 py-1 text-sm font-medium text-blue-700 dark:text-blue-200">
              Banho & Tosa Premium
            </div>

            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              O Espaço de banho do seu{" "}
              <span className="text-blue-600 dark:text-blue-300">Melhor amigo</span>
            </motion.h1>

            <motion.p
              className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Cuidamos do seu pet com produtos premium e profissionais especializados para deixá-lo limpo, cheiroso e feliz.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white">
                Conheça os nossos pacotes de banho
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/50">
                Nossos Serviços
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {[
                { icon: <HeartPulse className="h-4 w-4 text-blue-600 dark:text-blue-300" />, text: "Cuidado Especializado" },
                { icon: <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-300" />, text: "Agendamento Flexível" },
                { icon: <Shield className="h-4 w-4 text-blue-600 dark:text-blue-300" />, text: "Profissionais Certificados" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            className="relative mx-auto lg:ml-auto w-full max-w-md sm:max-w-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -top-16 -right-16 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-200 to-green-200 blur-3xl opacity-20 dark:opacity-10"></div>

            <div className="relative z-20 overflow-hidden rounded-3xl border border-blue-200/50 dark:border-blue-700/50 bg-white dark:bg-gray-900 shadow-2xl">
              <div className="aspect-square overflow-hidden">
                <Image
                  src="/Images/hero-image.png"
                  alt="Cachorro sendo cuidado no pet shop"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <h3 className="text-lg font-semibold">Equipe Profissional</h3>
                <p className="text-sm opacity-80">Dedicada ao bem-estar do seu pet</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-10 rounded-xl border border-blue-200/50 dark:border-blue-700/50 bg-white dark:bg-gray-900 p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-sm font-semibold">98% Satisfação</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Baseado em 1000+ avaliações</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
