import Profile from '../assets/image.png';
import Style from './About.module.css';

function About() {
  return (
    <div className={Style.Container}>
      <img src={Profile} alt="Usama" className={Style.profileImg} />
      <div className={Style.textcontainer}>
        <h1>About Me</h1>
        <h2>
          Hello! I’m a passionate and motivated MERN stack developer eager to turn ideas into interactive and efficient web applications. I have hands-on experience with MongoDB, Express.js, React.js, and Node.js, and I enjoy crafting clean, responsive, and user-friendly interfaces.

          As a fresher, I bring fresh perspectives, a strong desire to learn, and a problem-solving mindset. I love taking on challenges, exploring new technologies, and building projects that make an impact. My goal is to create web applications that are not just functional, but also engaging and seamless for users.
        </h2>
      </div>
    </div>
  );
}

export default About;
