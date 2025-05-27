'use client';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Badge, Check } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export function PricesSection() {
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
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" >
        Planos
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simples, Transparente e Sem Surpresas</h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Escolha o plano ideal para o seu negócio de estética. Todos os planos incluem 14 dias grátis, sem compromisso.
      </p>
    </motion.div>

    <div className="mx-auto max-w-5xl">
      <Tabs defaultValue="monthly" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="rounded-full p-1">
            <TabsTrigger value="monthly" className="rounded-full px-6">
              Mensal
            </TabsTrigger>
            <TabsTrigger value="annually" className="rounded-full px-6">
              Anual (Economize 20%)
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Mensal */}
        <TabsContent value="monthly">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: "Essencial",
                price: "R$ 39",
                description: "Perfeito para profissionais autônomos começando sua jornada.",
                features: [
                  "Agenda online ilimitada",
                  "Gestão de clientes",
                  "Relatórios básicos",
                  "Suporte por e-mail",
                ],
                cta: "Testar Grátis",
              },
              {
                name: "Profissional",
                price: "R$ 99",
                description: "Ideal para clínicas e salões em crescimento.",
                features: [
                  "Agenda ilimitada",
                  "Gestão financeira",
                  "Dashboard de performance",
                  "Até 5 colaboradores",
                  "Suporte prioritário",
                  "Integração com WhatsApp",
                ],
                cta: "Testar Grátis",
                popular: true,
              },
              {
                name: "Premium",
                price: "R$ 249",
                description: "Para negócios que precisam de máxima eficiência.",
                features: [
                  "Colaboradores ilimitados",
                  "Gestão completa de estoque",
                  "Relatórios avançados",
                  "Integração com API",
                  "Suporte 24/7 (WhatsApp + Telefone)",
                  "Treinamento personalizado",
                ],
                cta: "Falar com Vendas",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden h-full ${
                    plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                  } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Mais Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                    <ul className="space-y-3 my-6 flex-grow">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="mr-2 size-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-auto rounded-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        {/* Anual */}
        <TabsContent value="annually">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: "Essencial",
                price: "R$ 31",
                description: "Perfeito para profissionais autônomos começando sua jornada.",
                features: [
                  "Agenda online ilimitada",
                  "Gestão de clientes",
                  "Relatórios básicos",
                  "Suporte por e-mail",
                ],
                cta: "Testar Grátis",
              },
              {
                name: "Profissional",
                price: "R$ 79",
                description: "Ideal para clínicas e salões em crescimento.",
                features: [
                  "Agenda ilimitada",
                  "Gestão financeira",
                  "Dashboard de performance",
                  "Até 5 colaboradores",
                  "Suporte prioritário",
                  "Integração com WhatsApp",
                ],
                cta: "Testar Grátis",
                popular: true,
              },
              {
                name: "Premium",
                price: "R$ 199",
                description: "Para negócios que precisam de máxima eficiência.",
                features: [
                  "Colaboradores ilimitados",
                  "Gestão completa de estoque",
                  "Relatórios avançados",
                  "Integração com API",
                  "Suporte 24/7 (WhatsApp + Telefone)",
                  "Treinamento personalizado",
                ],
                cta: "Falar com Vendas",
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className={`relative overflow-hidden h-full ${
                    plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"
                  } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                      Mais Popular
                    </div>
                  )}
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">/mês</span>
                    </div>
                    <p className="text-muted-foreground mt-2">{plan.description}</p>
                    <ul className="space-y-3 my-6 flex-grow">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          <Check className="mr-2 size-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full mt-auto rounded-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/80"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</section>
  );
}