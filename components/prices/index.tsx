'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge, Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function PricesSection() {
  const plansData = {
    Mini: [
      {
        name: "Pacote cães mini (até 3kg)",
        price: "R$ 120,00",
        description: "Ideal para pets bem pequenos que adoram brincar na chuva!",
        features: [
          "Sorteio",
          "Agendamento online",
          "Monitoramento por câmeras",
          "Produtos premium",
        ],
        cta: "Assinar Pacote",
        popular: false,
      },
    ],
    Pequeno: [
      {
        name: "Pacote cães pequenos (até 5kg)",
        price: "R$ 160,00",
        description: "Ideal para pets pequenos que gostam de um bom banho!",
        features: [
          "Sorteio",
          "Agendamento online",
          "Monitoramento por câmeras",
          "Produtos premium",
          "Acompanhamento",
        ],
        cta: "Assinar Pacote",
        popular: true,
      },
    ],
    Médio: [
      {
        name: "Pacote cães médios (até 10kg)",
        price: "R$ 300,00",
        description: "Ideal para pets de médio porte, com muito amor e cuidado!",
        features: [
          "Sorteio",
          "Agendamento online",
          "Monitoramento por câmeras",
          "Produtos premium",
          "Acompanhamento veterinário",
        ],
        cta: "Assinar Pacote",
        popular: true,
      },
    ],
    Grande: [
      {
        name: "Pacote cães grandes (até 25kg)",
        price: "R$ 400,00",
        description: "Perfeito para os grandões que exigem mais dedicação!",
        features: [
          "Sorteio",
          "Agendamento online",
          "Monitoramento por câmeras",
          "Produtos premium",
          "Escovação",
        ],
        cta: "Assinar Pacote",
        popular: false,
      },
    ],
    "Muito Grande": [
      {
        name: "Pacote cães muito grandes (acima de 25kg)",
        price: "R$ 500,00",
        description: "Para os gigantes peludos, com carinho e estrutura adequada!",
        features: [
          "Sorteio",
          "Agendamento online",
          "Monitoramento por câmeras",
          "Produtos premium",
          "Escovação especial",
          "Transporte incluso",
        ],
        cta: "Assinar Pacote",
        popular: false,
      },
    ],
  };

  return (
    <section id="packages" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium">Planos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simples, Transparente e Sem Surpresas
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Escolha o plano ideal para o seu negócio de estética. Todos os planos incluem 14 dias grátis, sem compromisso.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="Médio" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto scrollbar-none">
              <TabsList className="rounded-full p-1 min-w-max">
                {Object.keys(plansData).map((key) => (
                  <TabsTrigger key={key} value={key} className="rounded-full px-4 sm:px-6 text-sm sm:text-base whitespace-nowrap">
                    {key}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {Object.entries(plansData).map(([size, plans]) => (
              <TabsContent key={size} value={size}>
                <div className="grid gap-6 lg:grid-cols-1 lg:gap-8 justify-center">
                  {plans.map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card className={`relative overflow-hidden h-full ${
                        plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                      } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}>
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                            Mais Popular
                          </div>
                        )}
                        <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                          <h3 className="text-xl sm:text-2xl font-bold">{plan.name}</h3>
                          <div className="flex items-baseline mt-4">
                            <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground ml-1">/mês</span>
                          </div>
                          <p className="text-muted-foreground mt-2">{plan.description}</p>
                          <ul className="space-y-3 my-6 flex-grow text-sm sm:text-base">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <Check className="mr-2 size-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://wa.me/551128351614?text=${encodeURIComponent(`Olá, gostaria de assinar o plano ${plan.name}`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mt-auto block"
                          >
                            <Button
                              className={`
                                w-full 
                                text-sm sm:text-base
                                px-4 py-2 
                                cursor-pointer 
                                rounded-full 
                                ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"}
                              `}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
