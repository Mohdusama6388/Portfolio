import Pdf from '../assets/Usama.Pdf';
import Profile from '../assets/image.png'; 
import Style from './Home.module.css';

function Home() {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <img src={Profile} alt="Usama" className={Style.profileImg} />
        <div className={Style.textSection}>
          <h1 className={Style.h1}>
            Hi,  <span className={Style.highlight}> I am Usama</span>
            
          </h1>
          <h2 className={Style.h2}>
            A Passionate MERN Stack Developer 
          </h2>
          <h3 className={Style.h3}>I build responsive and user-friendly web applications using MongoDB, Express.js, React.js, and Node.js.
Eager to learn, grow, and contribute to innovative projects with clean and efficient code. </h3>

          <a href={Pdf} download={'Usama resume'}>
            <button className={Style.btn}>Download CV</button>
          </a>
        </div>
      </div>
      
    </div>
  );
  
}

export default Home;

