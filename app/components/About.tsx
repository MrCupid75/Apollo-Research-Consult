"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Award, Users, BookMarked } from "lucide-react"

const stats = [
  { icon: <BookOpen className="h-6 w-6" />, value: "50+", label: "Publications" },
  { icon: <Award className="h-6 w-6" />, value: "$5M+", label: "Grants Secured" },
  { icon: <Users className="h-6 w-6" />, value: "200+", label: "Clients" },
  { icon: <BookMarked className="h-6 w-6" />, value: "15+", label: "Years Experience" },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Expert Academic Research Consultant</h3>
            <p className="text-foreground/80 mb-6">
              With a Ph.D. in Research Methodology and over 15 years of experience in academic research, I provide
              comprehensive research support services to academics, graduate students, and research institutions.
            </p>
            <p className="text-foreground/80 mb-6">
              My expertise spans multiple disciplines including social sciences, health sciences, education, and
              environmental studies. I specialize in advanced statistical analysis, research design, grant writing, and
              academic publishing.
            </p>
            <p className="text-foreground/80">
              As a published author with experience in top-tier journals and a track record of successful grant
              applications, I bring both technical expertise and strategic insight to your research projects.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <Card key={index} className="bg-primary/5 border-primary/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
