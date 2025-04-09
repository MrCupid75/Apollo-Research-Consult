"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Meta-Analysis of Climate Change Effects on Marine Ecosystems",
    description:
      "Conducted a comprehensive meta-analysis of 150+ studies examining climate change impacts on marine biodiversity.",
    category: "Data Analysis",
    tags: ["Meta-Analysis", "R", "Environmental Science", "Statistics"],
    outcome: "Published in Nature Climate Change with 200+ citations",
  },
  {
    id: 2,
    title: "Machine Learning for Early Disease Detection",
    description:
      "Developed predictive models using patient data to identify early markers of neurodegenerative diseases.",
    category: "AI for Research",
    tags: ["Machine Learning", "Python", "Healthcare", "Neural Networks"],
    outcome: "Achieved 92% accuracy in early detection, leading to clinical trial",
  },
  {
    id: 3,
    title: "NIH R01 Grant Proposal Development",
    description:
      "Assisted research team in developing a comprehensive grant proposal for innovative cancer treatment research.",
    category: "Grant Writing",
    tags: ["NIH", "Medical Research", "Funding", "Proposal Development"],
    outcome: "$2.5M in funding secured for 5-year research program",
  },
  {
    id: 4,
    title: "Qualitative Analysis of Patient Experience in Telehealth",
    description:
      "Conducted thematic analysis of interview data from 50+ patients regarding telehealth experiences during the pandemic.",
    category: "Qualitative Research",
    tags: ["NVivo", "Healthcare", "Interviews", "Thematic Analysis"],
    outcome: "Findings implemented in hospital telehealth policy",
  },
  {
    id: 5,
    title: "Systematic Review of Educational Interventions",
    description:
      "Performed systematic review and analysis of educational interventions for students with learning disabilities.",
    category: "Academic Writing",
    tags: ["Systematic Review", "Education", "PRISMA", "Literature Analysis"],
    outcome: "Published in Review of Educational Research",
  },
  {
    id: 6,
    title: "Economic Impact Analysis of Policy Changes",
    description: "Analyzed longitudinal data to assess economic impacts of policy changes on regional development.",
    category: "Data Analysis",
    tags: ["Econometrics", "Stata", "Policy Analysis", "Longitudinal Data"],
    outcome: "Presented to policymakers and cited in legislation",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground">Research Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of past research projects and academic collaborations
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <Badge className="self-start mb-2">{project.category}</Badge>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/80 mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-primary">{project.outcome}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full">
                      Request Case Study
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
