const Header = (props) => {
  console.log(props)
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Content = (promps) => {
  console.log(promps)
  return (
    <div>
      <Part name={promps.parts[0].name} exercises={promps.parts[0].exercises}/>
      <Part name={promps.parts[1].name} exercises={promps.parts[1].exercises}/>
      <Part name={promps.parts[2].name} exercises={promps.parts[2].exercises}/>
    </div>
  )
}

const Summary = (part) => {
  console.log(part)
  return (
    <div>
      Number of exercises {part.parts[0].exercises + part.parts[1].exercises + part.parts[2].exercises}
    </div>
  )
}

const Part = (promps) => {
  console.log(promps)
  return (
    <div>
      {promps.name} {promps.exercises}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7},
      {name: 'State of a component', exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Summary parts={course.parts}/>
    </div>
  )
}

export default App