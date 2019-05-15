import React from 'react';
import logo from './logo.svg';
import resume from './resume.png'
import video from './background1.gif'
import profile from './mattCircle.gif'
import riivos from './riivos.png'
import ucsd from './ucsd.jpg'
import link from './in.png'
import git from './GitHub-Mark-120px-plus.png'
import walker from './MattWalkerResume.pdf'
import neu from './logo.png'
import email from './email.png'
import cse from './cse.jpg'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function handleScroll() {
  console.log(document.getElementById('header').className);
  if (!document.getElementById('resume').className.includes('show')) {
    document.getElementById('resume').classList.add('show');
    document.getElementById('linkedin').classList.add('show');
    document.getElementById('email').classList.add('show');
  }
  console.log(document.getElementById('header').className);

}

function App() {
  window.addEventListener('scroll', handleScroll)
  return (
    <div className="App" onScroll={handleScroll}>
      <div className="NavBar">
        <div id="resume" className="Resume">
          <a href={walker} target ="_blank">
            <img src={resume} alt="resume" width="25" />
          </a>
            </div>
        <div id="linkedin" className="Resume">
          <a href="https://linkedin.com/in/walkerjmatt" target ="_blank">
            <img src={link} alt="link" width="25" />
          </a>
        </div>
        <div id="email" className="Resume">
          <a href="mailto:walkerjmatt@gmail.com" target ="">
            <img src={email} alt="email" width="25" />
            </a>
        </div>
      </div>
      <header id='header' className="App-headergif">
        <p className='name'>Matthew Walker</p>
      </header>

    <div className="info">
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <p className="quote">'Try never to be the smartest person in the room. And if you are, I suggest you invite smarter people…or find a different room.' -Michael Dell</p>
    </div>
      <div className="middleBar">
        <a className="work">Experience</a>
        <a className="education">, Education</a>
        <a className="education"> & Projects</a>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture" src={riivos} alt="riivos" />
        </a>
        <div className="riivosDescription">
          <a className='riivosTitle'>Software Engineer (former intern)</a>
          <div className= 'riivosContent'>June 2016 - April 2019
            <li>Added the ability to organize and stack data on charts, increasing the number of data visualizations by 3x</li>
            <li>Designed and built release notifications that increased usage rates of new features by 60% in their first week</li>
            <li>Designed and built a proof of concept to incorporate push notifications into chat</li>
            <li>Implemented mobile compatibility for sidebar navigation</li>
            <li>Increased code coverage to >80% on automated unit tests</li>
            <li>Documented on-boarding process to reduce new engineer’s startup time by 5+ hours</li>
          </div>
        </div>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture" src={cse} alt="cse" />
        </a>
        <div className="ucsdDescription">
          <a className='riivosTitle'>Computer Science Tutor</a>
          <div className= 'riivosContent'>December - June 2017
            <li>Explained key programming concepts to students</li>
            <li>Helped multiple students go from below a 2.5 GPA to >3.5 the following quarter</li>
            <li>Provided real-life examples of concepts to deepen understanding</li>
            <li>Taught students about time management and project prioritization techniques</li>
          </div>
        </div>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture" src={ucsd} alt="ucsd" />
        </a>
        <div className="ucsdDescription">
          <a className='riivosTitle'>UC San Diego, Jacobs School of Engineering</a>
          <div className= 'riivosContent'>September 2014 - June 2018
            <li>B.S. Computer Science</li>
            <li>Concentration in Economics</li>
            <li>Concentration in Mythology</li>
            <li>Intramural Basketball & Soccer, Phi Gamma Delta</li>
          </div>
        </div>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture neuPic" src={neu} alt="neu" />
        </a>
        <div className="neuDescription">
          <a className='riivosTitle'>Neufarms</a>
          <div className= 'riivosContent'>Helps provide local & sustainable produce straight to consumers
            <li>Built in Next.JS & React</li>
            <li>Designed and developed branding, UX, and UI for the client</li>
            <li>Worked with Founder to develop a business plan for the company</li>
            <li>Worked on developing product and distribution channels to sell to investors</li>
          </div>
        </div>
      </div>
    <div>
</div>
    </div>
  );
}


export default App;
