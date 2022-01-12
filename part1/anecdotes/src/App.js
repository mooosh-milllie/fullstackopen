import React, { useState } from 'react';

const Header = ({text}) => {

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => {

  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const VoteNum = ({votes}) => {

  return (
    <p>has {votes} votes</p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);

  const [voted, setVoted] = useState([0, 0, 0, 0, 0, 0, 0]);

  const max = anecdotes.length;
  const getRandomQuote = (max) => {
    const randomNum = () => {
      const random = Math.floor( Math.random() * max);
      return setSelected(random);
    }
    return randomNum;
  }

  const voteQuote = () => {
    const pollResult = [...voted];

    pollResult[selected] += 1;
    return setVoted(pollResult);
  }
  
  
  
  const voteResult = () => {
    const mostVotes = Math.max(...voted);
    const mostVoted = voted.indexOf(mostVotes);

    return {mostVoted, mostVotes};
  }

  return (
    <div>
      <Header text={'Anecdote of the day'}/>
      {anecdotes[selected]}
      <VoteNum votes={voted[selected]} />

      <Button onClick={voteQuote} text='Vote'/>
      <Button onClick={getRandomQuote(max)} text='Next Anecdote' />

      <Header text={'Anecdote with most votes'} />
      {anecdotes[voteResult().mostVoted]}
      <VoteNum votes={voteResult().mostVotes} />
    </div>
  )
}

export default App