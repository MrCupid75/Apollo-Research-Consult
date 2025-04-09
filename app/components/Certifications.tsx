"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink } from "lucide-react"

const certifications = [
  {
    id: 1,
    title: "Meta Data Analyst",
    organization: "Meta (formerly facebook)",
    date: "2024",
    description: "Professional certification in statistical analysis, machine learning, and data visualization techniques.",
    skills: [ "Python", "Machine Learning", "Statistical Analysis"],
    credentialId: "TJE9CHY3ITEH",
    credentialUrl: "https://coursera.org/verify/professional-cert/TJE9CHY3ITEH",
  },
  {
    id: 2,
    title: "IBM Back-end JavaScript Developer Specialization",
    organization: "International Business Machines Corporation (IBM)",
    date: "2024",
    description: "Design, develop, use, and integrate REST APIs in back-end applications to communicate with client-side technologies.",
    skills: ["Computer Programming", "Leadership and Management", "Software Architecture", "Software Engineering"],
    credentialId: "LP6LXPSZNGZ9",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/LP6LXPSZNGZ9",
  },
  {
    id: 3,
    title: "Python Data Analytics",
    organization: "Meta (formerly facebook)",
    date: "2024",
    description: "Modelling and interpreting data using Python and ploting scicentific visualizations.",
    skills: ["Proposal Development", "Budget Planning", "Project Management", "Technical Writing"],
    credentialId: "IRVCV9DZVV8N",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/IRVCV9DZVV8N",
  },
  {
    id: 4,
    title: "Data Analysis with Spreadsheets and SQL",
    organization: "Meta (formerly facebook)",
    date: "2024",
    description: "Create charts in Google Sheets and use Tableau to visualize data and use dashboards to create data visualizations",
    skills: ["Tableau Software", "SQL", "Spreadsheet", "Interview Coding"],
    credentialId: "IJBTTHFPDO3A",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/IJBTTHFPDO3A",
  },
  {
    id: 5,
    title: "Application Development using Microservices and Serverless",
    organization: "International Business Machines Corporation (IBM)",
    date: "2024",
    description: "Create, and deploy microservices using Docker containers and serverless technologies like IBM Code Engine",
    skills: ["AI", "Machine Learning", "Cloud Applications", "Research Automation"],
    credentialId: "7SCDJWB0PRWQ",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/7SCDJWB0PRWQ",
  },
  {
    id: 6,
    title: "Statistics Foundations",
    organization: "Meta (formerly facebook)",
    date: "2024",
    description: "Use statistical analyses to make data-driven decisions and to formulate and test hypotheses and take action based on the outcome",
    skills: ["Data Analysis", "Linear Regression", "Statistical Hypothesis Testing", "Statistical Analysis"],
    credentialId: "E1WKQFYBEYYC",
    credentialUrl: "https://www.coursera.org/account/accomplishments/records/E1WKQFYBEYYC",
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
