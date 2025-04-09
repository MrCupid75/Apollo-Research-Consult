"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The statistical analysis provided was exceptional. The consultant's expertise in mixed methods research significantly strengthened our findings and helped us secure publication in a top-tier journal.",
    author: "Sarah Boateng",
    position: "PhD Candidate, University of Ghana",
    initials: "SB",
  },
  {
    quote:
      "Working with this research consultant transformed our grant proposal. Their attention to detail and understanding of funding requirements was instrumental in our success securing a major NIH grant.",
    author: "Jesse Williams",
    position: "Research Assistant, KNUST",
    initials: "JW",
  },
  {
    quote:
      "The AI simulation for my methodology developed for our research team saved us countless hours and uncovered critical connections we had missed. Truly innovative approach to research.",
    author: "Maya Patel",
    position: "Post Grad, University of Ghana",
    initials: "MP",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Client Testimonials
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <p className="text-foreground/80 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
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
