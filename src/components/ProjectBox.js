import '../stylesheets/ProjectBox.css'
function ProjectBox({id, img, title, description, skills, link}){
    let imgIndex = 0;

    function leftImage(){
        if (imgIndex == 0) {
            imgIndex = img.length - 1;
        }
        else {
            imgIndex -= 1;
        }
        document.getElementById(id).src = img[imgIndex];
        console.log(imgIndex);
    }

    function rightImage(){
        if (imgIndex == img.length - 1) {
            imgIndex = 0;
        }
        else {
            imgIndex += 1;
        }
        document.getElementById(id).src = img[imgIndex];
        console.log(imgIndex);
    }
    
    const skillsArray = skills.map(skill => {
        return <li> 
            {skill}
        </li>
    })
    return (
        <div className="ProjectBox">
            <h2 className="ProjectTitle">{title}</h2>
            <div className="ProjectImageBox">
                { img.length > 1 ? <button onClick={leftImage}>{"<"}</button> : null }
                <img id={id} className="ProjectImage" src={img[imgIndex]}/>
                { img.length > 1 ? <button onClick={rightImage}>{">"}</button> : null }
            </div>
            <p className="ProjectDescription">{description}</p>
            <ul className="ProjectSkills">{skillsArray}</ul>
            { link != null ? <a href={link}>View Source Code</a> : null}
            <br></br>
            <br></br>
        </div>
    );
}

export default ProjectBox;