// import logo from './logo.svg';
import logo from './logo.jpg';
import arrow_down from './arrow-down.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This react site is undergoing development. Please visit Andes github repository below.
          
        </p>
        <a
          className="App-link"
          href="https://github.com/andes2020"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andes Github
        </a>
        <p>
          My linkedin profile and relevant job experience.
        </p>
        <img src={arrow_down} alt="arrow-down" />
      </header>
      <main>
        <p>Name: Andes</p>
        <p>Where abouts: South West London </p>
        <p>Hobbies:</p>
        <ol><li>Golf/ Baseball</li><li>Movies lots of movies..</li><li>Korean music (indie, rock, ballad)</li><li>Christian technical support</li></ol>
        <p>Description: (The boring part.....)</p>
        <p>Experienced Software/DevOps Engineer with a demonstrated history of working in highly agile team and global software industries. Experience working with: </p>
        <p>Cloud infrastructure: Azure, AWS, Redhed linux, Ansible, Kubernetes/ Docker</p>
        <p>Web technologies: Html, CSS, javascript, Json</p>
        <p>open-source contributing</p>
        <p>Programming lang: Java, C, Python, SQL, Bash/Shell scripts</p>
        <p>CICD pipelines, Software Automation, Data Structures and Object-Oriented Programming (OOP), Test Driven Development. Currently working as a DevOps Engineer. Using agile teams we develop and maintain CI/CD pipelines using a combination of technologies namely:</p>
        <p>Ansible, Python, Groovy, Docker, Jenkins, Git, Maven, Nexus, Linux and various other technologies.<br /><br />Never give up, strive, always aiming to be full stack<br />Responsible yet critical on making technology transformation<br />Ready to accept challenges, and build products with great social impact<br /></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/lamandes/">https://www.linkedin.com/in/lamandes/</a><br />Email: lamandes@protonmail.com</p>
        </main>
    </div>
  );
}

export default App;
