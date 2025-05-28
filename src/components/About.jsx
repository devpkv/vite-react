function About()
{
    const about = "I’m a passionate front-end developer (or full-stack developer, if applicable) who loves building interactive, user-friendly web applications. My projects focus on solving real-world problems, from productivity tools like the Task Manager App to data-driven applications like the Weather Dashboard."


    return (
        <section id="about">

            <div>
              <h3>About</h3>
              <hr />
              <p>{about}</p>
            </div>
        </section>

    );
}

export default About;
