"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Certified Data Scientist",
    organization: "American Statistical Association",
    date: "2022",
    description: "Advanced certification in statistical analysis, machine learning, and data visualization techniques.",
    skills: ["R", "Python", "Machine Learning", "Statistical Analysis"],
    credentialId: "ASA-CDS-2022-1089",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Research Methodology Expert",
    organization: "International Research Council",
    date: "2021",
    description: "Specialized certification in advanced research methodologies, experimental design, and analysis.",
    skills: ["Research Design", "Mixed Methods", "Experimental Methods", "Meta-Analysis"],
    credentialId: "IRC-RME-2021-4567",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Grant Writing Professional",
    organization: "Grant Professionals Association",
    date: "2020",
    description: "Certification in developing compelling grant proposals for academic and research funding.",
    skills: ["Proposal Development", "Budget Planning", "Project Management", "Technical Writing"],
    credentialId: "GPA-GWP-2020-7823",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Advanced NVivo Specialist",
    organization: "QSR International",
    date: "2019",
    description: "Expert-level certification in qualitative data analysis using NVivo software.",
    skills: ["Qualitative Analysis", "NVivo", "Thematic Analysis", "Interview Coding"],
    credentialId: "QSR-ANS-2019-3421",
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Scientific Writing and Publishing",
    organization: "Nature Masterclass",
    date: "2018",
    description: "Advanced training in scientific writing, journal selection, and the peer review process.",
    skills: ["Academic Writing", "Journal Publication", "Peer Review", "Research Communication"],
    credentialId: "NM-SWP-2018-9087",
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "AI in Research Applications",
    organization: "MIT Professional Education",
    date: "2023",
    description: "Specialized training in applying artificial intelligence techniques to enhance research processes.",
    skills: ["AI", "Machine Learning", "Natural Language Processing", "Research Automation"],
    credentialId: "MIT-AIRA-2023-5632",
    credentialUrl: "#",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground">Certifications & Credentials</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional qualifications that validate my expertise in research methodologies and data analysis
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="mb-2 bg-primary/5 text-primary border-primary/20">
                      <Award className="h-3 w-3 mr-1" /> Certified
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {cert.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <CardDescription className="text-foreground/70">Issued by {cert.organization}</CardDescription>
                </CardHeader>
                <CardContent className="py-2 flex-grow">
                  <p className="text-foreground/80 mb-4 text-sm">{cert.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Credential ID: {cert.credentialId}</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Verify Credential <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
