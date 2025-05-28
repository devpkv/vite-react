import PropTypes from 'prop-types';


//   const handleAlert = (msg) => {
//     alert("You have clicked on "+ msg)
//   }

//   const profile1 = {
//     name:"pankaj",
//     age:25,
//     education:"BCA",
//     certification:["AWS", "JAVA","MongoDB"],
//     handleOnClick:handleAlert
//   }

//    const profile2 = {
//     name:"Amit",
//     age:35,
//     education:"M. Tech",
//     certification:["Salesforce", "Azure","GCP"],
//     handleOnClick:handleAlert
//   }

function Profile({name,age, education, certification, handleOnClick})
{  
    return(
       <div>
            <h3>Name : {name}</h3>
            <h3>Age : {age}</h3>
            <h3>Edducation : {education}</h3>
            <h3>Certification : 

            <ul>
                {
                   
                   certification.map((cert,index)=>{
                       return <li key={index} onClick={() => handleOnClick(cert)}>{cert}</li>;
                    })
                }
            </ul>

            </h3>
       </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}



export default Profile;

