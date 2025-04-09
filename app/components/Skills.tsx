"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Statistical Software",
    skills: ["R", "SPSS", "Stata", "SAS", "MATLAB"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "MATLAB"],
  },
  {
    title: "Qualitative Analysis",
    skills: ["NVivo", "ATLAS.ti", "MAXQDA", "Dedoose"],
  },
  {
    title: "Data Visualization",
    skills: ["Tableau", "Power BI", "ggplot2", "matplotlib", "seaborn"],
  },
  {
    title: "Document Preparation",
    skills: ["LaTeX", "Overleaf", "Microsoft Word", "Google Docs"],
  },
  {
    title: "Reference Management",
    skills: ["Mendeley", "Zotero", "EndNote", "RefWorks"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
