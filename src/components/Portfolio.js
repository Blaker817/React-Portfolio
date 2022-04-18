import dogAppPic from "../images/image of heroku app.png"
const projects=[{title:"Doggy Day Care Scheduler",image:dogAppPic}]
function Portfolio() {
    return (
      <div className="p-3 row justify-content-between  " >
       {projects.map(project=>{

           return(
               <div>
                   <p>{project.title}</p>
                   <img src={project.image} alt="" />
               </div>
           )
       })}
      </div>
    );
  }
  
  export default Portfolio;