
import './App.css'

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  )
}

function Avatar() {
  return <img src="./download.jpeg" alt="" />
}

function Intro() {
  return (
    <div>
      <h1>Perbin M. Naldoza</h1>
      <p>Webdev</p>
    </div>
  )
}

function SkillList() {
  return (
    <ul className='skill-list'>
      {skills.map(skill => (
        <li style={{ background: skill.color }}> {skill.skill} {skill.level} { } </li>))}
      {/* <Skill skill="js" emoji="💪" color="blue" />
      <Skill skill="react" emoji="👶" color="green" />
      <Skill skill="css" emoji="😅" color="yellow" /> */}
    </ul>
  )
}

// function Skill({ skill, emoji, color }) {
//   return <div className='skill' style={{ background: color }}>{skill} {emoji}</div>
// }

export default App
