import AboutSection from '../components/About/About'
import Hero from '../components/About/Hero'
import Team from '../components/About/Team'
import Testimonials from '../components/About/Testimonials'

const About = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Team />
      <Testimonials />
    </div>
  )
}

export default About