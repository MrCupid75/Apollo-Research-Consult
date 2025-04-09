import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@researchpro.com" className="hover:text-primary">
                  contact@researchpro.com
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+1234567890" className="hover:text-primary">
                  (+233) 242-835-458 
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Academic Research Center, University District</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Academic Writing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Grant Writing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  AI Simulation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">
                Subscribe to my newsletter for research tips and updates on academic trends.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Academic Research Consultant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
