import './App.css'

const Header = (props) => {
  return <h1 className="course-header">{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <div className="part-item">
      <span>{props.part.name}</span>
      <span className="part-units">{props.part.exercises} units</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p className="total-section">
      <strong>
        Number of exercises:{' '}
        {props.course.parts[0].exercises +
          props.course.parts[1].exercises +
          props.course.parts[2].exercises}
      </strong>
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer className="footer-section">
      <p className="footer-text">
        {props.fullName} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
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
  }

  const student = {
    fullName: 'Hanz Ivan Hermosada',
    courseCode: 'CSIT340',
    section: 'G5'
  }

  return (
    <div className="card">
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer 
        fullName={student.fullName} 
        courseCode={student.courseCode} 
        section={student.section} 
      />
    </div>
  )
}

export default App