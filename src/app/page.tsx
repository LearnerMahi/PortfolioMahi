import { Hero } from '@/components/home/Hero'
import { About } from '@/components/home/About'
import { Skills } from '@/components/home/Skills'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { Education } from '@/components/home/Education'
import { Contact } from '@/components/home/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Education />
      <Contact />
    </>
  )
}
