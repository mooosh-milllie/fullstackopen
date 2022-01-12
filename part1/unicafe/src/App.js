import './App.css';
import { useState } from 'react';


const Header = () => {

  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  )
}

const Botton = ({onClick, text}) => {

  return (
    <button onClick={onClick}>{text}</button>
  );
}

const StatisticLine = ({text, value}) => {

  return (

    <tr>
      <th>{text}</th>
      <td>{value}</td>
    </tr>
    
  )
}
const Statistics = ({good, neutral, bad, all, average, positive}) => {

  return (
    <div>
      <h3>Statistics</h3>

      <table>
        <tbody>
            <StatisticLine text='Good'  value={good} />
            <StatisticLine text={'Neutral'}  value={neutral} />
            <StatisticLine text={'Bad'}  value={bad} />
            <StatisticLine text={'All'}  value={all} />
            <StatisticLine text={'Average'}  value={average} />
            <StatisticLine text={'Positive'}  value={positive} />
        </tbody>
      </table>
      
      
    </div>
  )
}





function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const goodReview = () => {
    setGood(good + 1);
  }

  const neutralReview = () => {
    setNeutral(neutral + 1);
  }

  const badReview = () => {
    setBad(bad + 1);
  }
  const average = good + bad + neutral / 3;
  
  const all = good + bad + neutral;


  const positive = () => {
    if (good + bad + neutral === 0) {
      return 0
    }
    return good/all * 100 + '%';
  }


  return (
    <div>
      <Header />
      <Botton onClick={goodReview} text='Good'/>
      <Botton onClick={neutralReview} text='Neutral'/>
      <Botton onClick={badReview} text='Bad'/>

      <Statistics good={good} neutral={neutral} bad={bad} all={all}  average={average} positive={positive()}/>
    </div>
    
  );
}

export default App;
