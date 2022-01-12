import React from 'react';


const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
    <div>
      <h3>{props.part1}</h3>
      <p>Number of exercises: {props.exercises1}</p>

      <h3>{props.part2}</h3>
      <p>Number of exercises: {props.exercises2}</p>

      <h3>{props.part3}</h3>
      <p>Number of exercises: {props.exercises3}</p>
    </div>
  )
}

const Total = (props) => {

  return (
    <p>Total number of exercises {props.total} </p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
const parts = course.parts;
console.log(parts)
  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
        />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
