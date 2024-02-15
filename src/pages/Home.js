import {resume} from "../documents"
import '../stylesheets/Home.css'

function Home() {
    return (
        <div className="Home">
            <h1>Colin Herbert</h1>
            <h2>Software Engineering Portfolio</h2>
            <p>I create both Frontend and Backend applications and have practical full-stack and embedded development experience.</p>
            <a href={resume} download="Resume-Colin-Herbert">Download My Resume Here</a>
        </div>
    )
}

export default Home;