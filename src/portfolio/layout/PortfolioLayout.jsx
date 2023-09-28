import React from 'react'
import { Navbar, Header, MySkillsSection } from '../components'
import { ProjectsSection } from '../components/ProjectsSection'

export const PortfolioLayout = ({ clildren }) => {
  return (
    <div>


        <Navbar />
        <Header />
        <article>
          <MySkillsSection />
          <ProjectsSection />
        </article>


        { clildren }


    </div>
  )
}
