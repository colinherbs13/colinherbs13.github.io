import {arizona, computer, baseball, hockey, philly, football, aviation, games, kitchen} from "../images"
import "../stylesheets/About.css"
function AboutMe() {
    return (
        <div className="About">
            <h1>About Me</h1>
            <h2>Education</h2>
            <ul>
                <li><img id="arizona" className="img--left" src={arizona}></img>University of Arizona Class of 2023</li>
                <li>Major: Electrical and Computer Engineering<img id="computer" className="img--right" src={computer}></img></li>
                <li>Minor: Computer Science</li>
            </ul>
            <h2>Interests</h2>
            <ul>
                <li><img id="philly" className="img--left" src={philly}></img>Philadelphia Sports</li>
                <li>Baseball<img id="baseball" className="img--right" src={baseball}></img></li>
                <li><img id="hockey" className="img--left" src={hockey}></img>Hockey</li>
                <li>Football<img id="football" className="img--right" src={football}></img></li>
                <li><img id="aviation" className="img--left" src={aviation}></img>Aviation</li>
                <li>Video Games<img id="videogames" className="img--right" src={games}></img></li>
                <li><img id="kitchen" className="img--left" src={kitchen}></img>Cooking</li>
            </ul>
        </div>
    )
}

export default AboutMe;