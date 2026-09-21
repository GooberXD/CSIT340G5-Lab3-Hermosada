const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>Number of exercises {props.total}</strong>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  const part1 = {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  }
  const part2 = {
    name: 'IT317 - Project Management',
    exercises: 3
  }
  const part3 = {
    name: 'IT365 - Data Analytics 1',
    exercises: 3
  }

  const student = {
    fullName: 'Hanz Ivan Hermosada',
    courseCode: 'CSIT340',
    section: 'G5'
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer 
        fullName={student.fullName} 
        courseCode={student.courseCode} 
        section={student.section} 
      />
    </div>
  )
}

export default App