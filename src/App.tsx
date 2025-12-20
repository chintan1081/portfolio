import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import ProjectSection from "./components/ProjectSection"
import ExperienceSection from "./components/ExperienceSection"
import Layout from "./components/Layout"
import Resume from "./components/Resume"
import ScrollManager from './components/ui/ScrollManager'
import ProjectDisplay from "./components/ProjectDisplay"
import MouseFollower from "./components/ui/MouseFollower"

function App() {
  return (
    <BrowserRouter>
    <ScrollManager />
    <MouseFollower />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/projects" element={<ProjectSection />} />
          <Route path="/work" element={<ExperienceSection />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
