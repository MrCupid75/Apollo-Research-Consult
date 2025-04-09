import Hero from "./components/Hero"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Process from "./components/Process"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Skills />
      <Certifications />
      <Process />
      <Testimonials />
      <About />
      <ContactForm />
    </>
  )
}
