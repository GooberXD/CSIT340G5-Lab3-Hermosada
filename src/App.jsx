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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <strong>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</strong>
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
  const parts = [
    {
      name: 'CSIT327 - Information Management 2',
      exercises: 3
    },
    {
      name: 'IT317 - Project Management',
      exercises: 3
    },
    {
      name: 'IT365 - Data Analytics 1',
      exercises: 3
    }
  ]

  const student = {
    fullName: 'Hanz Ivan Hermosada',
    courseCode: 'CSIT340',
    section: 'G5'
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer 
        fullName={student.fullName} 
        courseCode={student.courseCode} 
        section={student.section} 
      />
    </div>
  )
}

export default App