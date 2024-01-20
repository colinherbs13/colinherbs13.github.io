import React from "react"
import ProjectBox from '../components/ProjectBox'
import projectData from "../data/projectData";
import '../stylesheets/Projects.css'

function Projects() {
    const projectElements = projectData.map(project => {
        return <td> <ProjectBox
            {...project}
        />
        </td>
    })
    return (
        <div className="projects">
            <h1>Projects</h1>
            <table className="projectTable">
                <tbody>
                    <tr>
                        {projectElements.slice(0, projectElements.length / 2)}
                    </tr>
                    <tr>
                        {projectElements.slice(projectElements.length / 2, projectElements.length)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Projects;