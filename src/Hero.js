import "./Hero.css";
import selfie from "./images/dev/IMG_2397-removebg-preview.png";

function Hero() {
  return (
    <div className="Hero container" id="about">
      <div className="row">
        <div className="col-8">
          <h1>
            <i className="fa-solid fa-terminal"></i> Adri(ana) Díaz
          </h1>
          <h2 className="mb-5 job">Software Developer</h2>
          <h4>
            Specialized in front-end web development and focused on delivering
            simple yet user-friendly digital products.
          </h4>
          <br />
          <h5 className="desc desc-sm">
            I am a bilingual (English and Spanish) professional with a
            background in Advertising and Marketing that has always enjoyed
            creating and learning new things. My interest in programming began
            with Myspace back in the early 2000's but it wasn't until I met my
            partner that my curiosity grew.
            <br /> My adventurous spirit has led me to explore, & deepen my
            knowledge while loving creating things.
          </h5>

          <h6>
            Based in Barcelona, Spain <br /> & the internet ⌨️
          </h6>
        </div>
        <div className="col-4">
          <img src={selfie} alt="Adriana Díaz - Web Developer"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
