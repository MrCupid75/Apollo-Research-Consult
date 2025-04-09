"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Apollo Research <span className="text-gradient">Consultant</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Expert assistance in academic writing, data analysis, grant writing, and research methodology. Elevate your
            research with professional consultation and technical expertise.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg">
              <a href="#contact">Schedule a Consultation</a>
            </Button>
            <a href="#services" className="text-sm font-semibold leading-6 text-foreground">
              Explore Services <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
