
import './App.css'

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
    <div className='skill-list'>
      <Skill skill="js" emoji="💪" color="blue" />
      <Skill skill="react" emoji="👶" color="green" />
      <Skill skill="css" emoji="😅" color="yellow" />
    </div>
  )
}

function Skill({ skill, emoji, color }) {
  return <div className='skill' style={{ background: color }}>{skill} {emoji}</div>
}

export default App
