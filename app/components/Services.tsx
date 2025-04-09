"use client"

import { motion } from "framer-motion"
import { FileText, Database, Award, Brain, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <FileText className="w-12 h-12 mb-4 text-primary" />,
    title: "Academic Writing & Journal Support",
    description:
      "Expert assistance with research papers, journal articles, literature reviews, and manuscript preparation. Comprehensive editing and proofreading services to ensure your work meets the highest academic standards.",
    link: "#contact",
  },
  {
    icon: <Database className="w-12 h-12 mb-4 text-primary" />,
    title: "Data Analysis",
    description:
      "Comprehensive quantitative and qualitative data analysis using advanced statistical methods and software. From experimental design to interpretation of results, get expert guidance at every stage of your research.",
    link: "#contact",
  },
  {
    icon: <Award className="w-12 h-12 mb-4 text-primary" />,
    title: "Grant Writing",
    description:
      "Strategic development of compelling grant proposals for academic research funding. Expertise in addressing funding requirements, crafting research narratives, and developing comprehensive budgets.",
    link: "#contact",
  },
  {
    icon: <Brain className="w-12 h-12 mb-4 text-primary" />,
    title: "AI for Research",
    description:
      "Leverage cutting-edge AI tools and methodologies to enhance your research capabilities. From literature review automation to predictive modeling and data mining, discover how AI can transform your research process.",
    link: "#contact",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Research Services
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/80">{service.description}</CardDescription>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" asChild>
                    <a href={service.link} className="flex items-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
