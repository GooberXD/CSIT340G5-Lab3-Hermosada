const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  const part1 = 'CSIT327 - Information Management 2'
  const exercises1 = 3
  const part2 = 'IT317 - Project Management'
  const exercises2 = 3
  const part3 = 'IT365 - Data Analytics 1'
  const exercises3 = 3

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App