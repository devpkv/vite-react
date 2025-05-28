function Header()
{
    const name = "Pankaj Kumar"
    const profession = "Full Stack Developer"
    return(
        <header className='header'>
          <h1>{name}</h1>
          <p>{profession}</p>
          <hr />
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a> 
          </nav>
          <hr />
        </header>
    );
}

export default Header;