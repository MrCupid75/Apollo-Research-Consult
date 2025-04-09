"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, BarChart, PresentationIcon } from "lucide-react"

const processSteps = [
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion of your research needs, objectives, and timeline to develop a clear understanding of your project.",
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Research Planning",
    description:
      "Based on your requirements, We develop a comprehensive research plan including methodology, analysis approach, and deliverables.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Analysis & Development",
    description:
      "We execute the research plan, conducting analyses, developing content, or preparing documentation as required for your project.",
  },
  {
    icon: <PresentationIcon className="h-8 w-8 text-primary" />,
    title: "Review & Refinement",
    description:
      "We review the results together, making any necessary refinements to ensure the final deliverables meet your expectations and research objectives.",
  },
]

export default function Process() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground">Research Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured approach to ensure your research objectives are met
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="mb-2">{step.icon}</div>
                  <CardTitle className="flex items-center">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm mr-2">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
