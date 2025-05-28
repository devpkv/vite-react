function Projects()
{
     const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with HTML, CSS, and JavaScript"
    },
    {
      title: "Task Manager App",
      description: "A web application for organizing daily tasks with drag-and-drop functionality"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application displaying forecasts from public API data"
    },
    {
      title: "Recipe Finder",
      description: "Search engine for recipes based on available ingredients"
    },
    {
      title: "Expense Tracker",
      description: "Application for monitoring personal expenses with visual charts"
    }
  ]

    return(
        <section id="projects">
            <h3>Projects</h3>
            <hr />
            <div className='project-list'>
               {projects.map((project, index) => {
                  return  <div key={index} className={`project-item-${index}`}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                          </div>
            })}
            </div> 
        </section>
    );
}

export default Projects;