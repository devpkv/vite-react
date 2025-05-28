function Contact()
{
    const email = "pankaj.kumar@example.com";
    return (
         <section id="contact">
          <h3>Contact</h3>
          <hr />
          <h4>Email : <a href={`mailto:${email}`} style={{color:"black"}}>{email}</a> </h4>
        </section>
    );
}

export default Contact;