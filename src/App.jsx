const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const parts = [
    { name: 'CSIT327 - Information Management 2', exercises: 3 },
    { name: 'IT317 - Project Management', exercises: 3 },
    { name: 'IT365 - Data Analytics 1', exercises: 3 },
  ]

  return (
    <div>
      <h1>{course}</h1>
      <Content parts={parts} />
      <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>
    </div>
  )
}

export default App