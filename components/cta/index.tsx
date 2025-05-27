"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CtaSection() {
  return (
    <section id="cta"
      className="flex justify-center w-full py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary to-primary/70 text-primary-foreground"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>

      <div
        className="absolute inset-0 -z-30 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url('/images/background-cta.png')` }}
      />

      <div className="container px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            A Hovet Lilicão voltou ainda maior para a estética do seu pet!
          </h2>
          <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
            Com o <strong>Hovet Lilicão</strong>, você agenda <strong>banho e tosa</strong> de forma rápida através de <strong>inovação e tecnologia</strong>, acompanha tudo <strong>ao vivo por câmeras</strong> e garante que seu pet receba todo o cuidado de uma <strong>equipe premiada</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="#packages" className="text-lg font-semibold text-primary-foreground hover:underline">
            <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base">
              Conferir os Pacotes
              <ArrowRight className="ml-2 size-4" />
            </Button>
            </a>
          </div>
          <p className="text-[0.55rem] text-primary-foreground/80 mt-4">
            Pacotes com banhos ilimitados, sempre considere a moderação, visando a saúde e o bem-estar do seu pet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
