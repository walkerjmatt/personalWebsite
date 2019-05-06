import React from 'react';
import logo from './logo.svg';
import resume from './resume.png'
import video from './background1.gif'
import profile from './mattCircle.gif'
import riivos from './riivos.png'
import ucsd from './ucsd.jpg'
import link from './in.png'
import git from './GitHub-Mark-120px-plus.png'
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
  if (!document.getElementById('header').className.includes('gif')) {
    document.getElementById('header').classList.add('App-headergif');
  }
  console.log(document.getElementById('header').className);

}

function App() {
  window.addEventListener('scroll', handleScroll)
  return (
    <div className="App" onScroll={handleScroll}>
      <div className="NavBar">
        <div className="Resume">
          <img src={resume} alt="resume" width="25" />
        </div>
        <div className="Resume">
          <a href="https://linkedin.com/in/walkerjmatt" target ="_blank">
            <img src={link} alt="link" width="25" />
          </a>
        </div>
        <div className="Resume">
          <img src={git} alt="git" width="25" />
        </div>
      </div>
      <header id='header' className="App-header">
        <p className='name'>Matthew Walker</p>
      </header>

    <div className="info">
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
        <p className="quote">'Try never to be the smartest person in the room. And if you are, I suggest you invite smarter people…or find a different room.' -Micheal Dell</p>
    </div>
      <div className="middleBar">
        <a className="work">Experience</a>
        &nbsp;<a className="education">& Education</a>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture" src={riivos} alt="riivos" />
        </a>
        <div className="riivosDescription">
          <a className='riivosTitle'>Front End Engineer</a>
          <div className= 'riivosContent'>August 2018 - April 2019 (Full-time)
            <li>Implemented and enhance various chart types for improved data visualization</li>
            <li>Worked closely with product leads to prioritize new features</li>
            <li>Riivos ceased operations in early April</li>
            <p></p>
            June - Sept 2016, June - Sept 2017 (Intern)
            <li>Added various UI and UX improvements to our SaaS platform</li>
            <li>Updated and improved code coverage by adding significant unit tests</li>
            <li>Learned about the inner workins of a startup and how all the various pieces tie together</li>
          </div>
        </div>
      </div>
      <div className="riivos">
        <a className="riivosPic">
          <img className="picture" src={ucsd} alt="ucsd" />
        </a>
        <div className="riivosDescription">
          <a className='riivosTitle'>UC San Diego, Jacobs School of Engineering</a>
          <div className= 'riivosContent'>September 2014 - June 2018
            <li>B.S. Computer Science</li>
            <li>Area Studies in Economics & Mythology</li>
            <li>Intramural Soccer & Basketball</li>
            <li>Member of Phi Gamma Delta</li>
          </div>
        </div>
      </div>
    <div>
</div>
    </div>
  );
}


export default App;
