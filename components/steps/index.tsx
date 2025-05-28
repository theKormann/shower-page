'use client';

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import React from "react";

export function Steps(){
    return(
        <section id="steps"
        className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
  <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

  <div className="container px-4 md:px-6 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
    >
      <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
        Como Funciona
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        A estética do seu pet nunca foi tão fácil e rápida!
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Com poucos passos, você agenda o banho e tosa do seu pet, personaliza seu espaço e começa a atender de onde estiver. É simples assim!
        <strong> Hovet Lilicão</strong> traz inovação e tecnologia para a estética do seu pet, garantindo agilidade e qualidade no atendimento.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

      {[
        {
          step: "01",
          title: "Escolha seu Plano",
          description:
            "Selecione o plano com benefícios que melhor se adapta às necessidades e estéticas do seu pet.",
        },
        {
          step: "02",
          title: "Aguarde a confirmação da assinatura",
          description:
            "Logo após o pagamento, nossa equipe entrará em contato para confirmar a assinatura e personalizar seu espaço.",
        },
        {
          step: "03",
          title: "Traga seu Pet",
          description:
            "Agende o banho e tosa do seu pet de forma rápida e fácil, de formas ilimitadas, sempre com o moderação e carinho que ele merece. ",	
        },
      ].map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative z-10 flex flex-col items-center text-center space-y-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
            {step.step}
          </div>
          <h3 className="text-xl font-bold">{step.title}</h3>
          <p className="text-muted-foreground">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    );
}