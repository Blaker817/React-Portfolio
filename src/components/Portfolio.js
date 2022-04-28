import dogAppPic from "../images/image of heroku app.png"
import PWA from "../images/pwa.png"
const projects = [
    { title: "Doggy Day Care Scheduler", image: dogAppPic },
    { title: "PWA", image:PWA }
]
function Portfolio() {
    return (
        <div className="p-3 row justify-content-between  " >
            {projects.map(project => {

                return (
                    <div className="portfolios mt-3">
                        <p>{project.title}</p>
                        <img src={project.image} alt="" />
                    </div>
                )
            })}
        </div>
    );
}

export default Portfolio;