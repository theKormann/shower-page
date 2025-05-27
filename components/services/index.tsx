"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Camera, Award, Sparkles, ShowerHead, HeartHandshake, Leaf, PawPrint, Smile } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <ShowerHead className="h-6 w-6 text-blue-500" />,
    title: "Banho Profissional",
    description: "Utilizamos produtos de alta qualidade, específicos para cada tipo de pelagem e pele.",
  },
  {
    icon: <Camera className="h-6 w-6 text-cyan-500" />,
    title: "Monitoramento por Câmeras",
    description: "Acompanhe o banho e tosa do seu pet em tempo real, com total transparência e segurança.",
  },
  {
    icon: <Award className="h-6 w-6 text-amber-500" />,
    title: "Equipe Premiada",
    description: "Nossos banhistas possuem certificações e prêmios reconhecidos nacionalmente no ramo pet.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    title: "Estética Animal",
    description: "Tosas higiênicas, comerciais e de padrão de raça, sempre prezando pelo bem-estar.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    title: "Produtos Naturais",
    description: "Shampoos, condicionadores e cosméticos naturais, hipoalergênicos e ecologicamente corretos.",
  },
  {
    icon: <PawPrint className="h-6 w-6 text-pink-500" />,
    title: "Bem-estar Garantido",
    description: "Ambiente climatizado, seguro e adaptado para proporcionar conforto e menos estresse ao pet.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-red-500" />,
    title: "Atendimento Humanizado",
    description: "Nossa equipe é apaixonada por pets e oferece atendimento carinhoso e personalizado.",
  },
  {
    icon: <Smile className="h-6 w-6 text-yellow-500" />,
    title: "Pós-Banho Feliz",
    description: "Seu pet sai cheiroso, com lacinho, gravatinha ou bandana, além de muita alegria.",
  },
]

export default function GroomingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services"
      className=" flex justify-center w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950"
      ref={ref}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            Banho & Tosa
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Cuidado, Amor e Transparência no Banho e Tosa
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed">
            Nosso diferencial vai além do banho! Aqui você acompanha tudo por câmeras, nossos profissionais
            são premiados e seu pet recebe todo o carinho que merece.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="rounded-full bg-white dark:bg-gray-800 p-3">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
