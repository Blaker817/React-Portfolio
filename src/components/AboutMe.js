import portfolioPic from "../images/portfolio.jpg"
function AboutMe() {
    return (
     <div>
          <div class="image-container">
        <img class="img-me" src={portfolioPic} alt="my portfolio pic"/>
    </div>

    <div id="about-me" class="content">
        <h2>About Me</h2>
        <p>Hello my name is Blake Elliott I am a 39 year old Realtor currently living in Fort Worth Tx excited for a new
            carreer in web development. I was raised in Texas lived in Colorado, Califorina and Tennesse. I am married
            to a lovely women named Samantha with whom I share 3 children with.
        </p>
    </div>
     </div>
    );
  }
  
  export default AboutMe;