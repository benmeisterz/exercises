
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

//direct solution 1
// function SkillList() {
//   return (
//     <ul className='skill-list'>
//       {skills.map(skill => (
//         <li style={{ background: skill.color }}> {skill.skill} {skill.level} { } </li>))}
//     </ul>
//   )
// }
function SkillList() {
  return (
    <ul className='skill-list'>
      {skills.map(skill => (
        <Skill skillobj={skill} key={skill.skill} />))}
    </ul>
  )
}

function Skill({ skillobj }) {
  return <div className='skill' style={{ background: skillobj.color }}>
    <li style={{ background: skillobj.color }}> {skillobj.skill} {skillobj.level} </li></div>
}

export default App
