import React from "react"
import ProjectBox from '../components/ProjectBox'
import projectData from "../data/projectData";
import '../stylesheets/Projects.css'

function Projects() {
    const projectElements = projectData.map((project, index, array) => {
        return  index % 2 === 0 ? <tr>
            <td> <ProjectBox {...project}/>
            </td>
            <td>
                { array[index + 1] ? <ProjectBox {...array[index + 1]}/> : null }
            </td>
        </tr> : null 
    })
    return (
        <div className="projects">
            <h1>Projects</h1>
            <table className="projectTable">
                <tbody>
                    {projectElements}
                </tbody>
            </table>
        </div>
    )
}

export default Projects;