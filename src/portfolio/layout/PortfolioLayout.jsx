import React from 'react'
import { Navbar, Header, MySkillsSection, JsonProfile, Footer } from '../components'
import { ProjectsSection } from '../components/ProjectsSection'

export const PortfolioLayout = () => {
  return (
    <div>


        <Navbar />
        <Header />
        <article>
        <JsonProfile /> 
          <MySkillsSection />
          <ProjectsSection />
        </article>

        <Footer />





    </div>
  )
}
