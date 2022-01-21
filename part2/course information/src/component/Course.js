import React from "react";



const Header = ({course}) => {

  return (
    <h2>{course.name}</h2>
  )
}


const Part = ({part}) => {

  return (
    <p> {part.name}: {part.exercises} </p>
  )
}

const Content = ({part}) => {

  return (
    <div>
      {part.parts.map(p => <Part key={p.id} part={p} /> )}
    </div>
  )
}

const Total = ({total}) => {
  const totalNum = [];

  total.map(exe => totalNum.push(exe.exercises));

  const sum = totalNum.reduce((a, b) => a + b, 0);
  return (
    <p>Total of {sum} exercises</p>
  )
}



const Course = ({course}) => {
  
  return (
    <div>
      <Header key={course.id} course={course}  />
      <Content part={course} />
      <Total total={course.parts}/>
    </div>
  )
}



export default Course;