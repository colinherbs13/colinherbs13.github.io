import '../stylesheets/ProjectBox.css'
function ProjectBox({img, title, description, skills}){
    let imgIndex = 0;

    function leftImage(){
        if (imgIndex == 0) {
            imgIndex = img.length - 1;
        }
        else {
            imgIndex -= 1;
        }
        document.getElementById("projectImage").src = img[imgIndex];
        console.log(imgIndex);
    }

    function rightImage(){
        if (imgIndex == img.length - 1) {
            imgIndex = 0;
        }
        else {
            imgIndex += 1;
        }
        document.getElementById("projectImage").src = img[imgIndex];
        console.log(imgIndex);
    }
    
    return (
        <div className="ProjectBox">
            <h2 className="ProjectTitle">{title}</h2>
            <div className="ProjectImageBox">
                { img.length > 1 ? <button onClick={leftImage}>Left</button> : null }
                { img.length > 1 ? <button onClick={rightImage}>Right</button> : null }
                <br></br>
                <img id="projectImage" className="ProjectImage" src={img[imgIndex]}/>
            </div>
            <p className="ProjectDescription">{description}</p>
            <p className="ProjectSkills">{skills}</p>
        </div>
    );
}

export default ProjectBox;