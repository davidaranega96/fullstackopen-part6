import { useState } from 'react'
import { createLogger } from 'vite';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const WinnerAnecdote = (prompt) => {
  if (prompt.anecdote == "") {
    return (
      <div>
      <h1>Most voted anecdote!</h1>
      <div>Vote at least once...</div>
      </div>
    )
  }
  return (
    <div>
    <h1>Most voted anecdote!</h1>
    <div>{prompt.anecdote}</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(
    anecdotes.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );  
  const [voted_anecdote, setVotedAnecdote] = useState("")

  const GetAnecdotesRandomIndex = () => {
    console.log("Generating a random number...")
    setSelected(getRandomInt(anecdotes.length))
  }

  const GetMostVotedAnecdote = (prompt) => {
    var most_votes = 0
    var most_votes_index = 0
    console.log("initial votes and index", most_votes, most_votes_index)
    console.log("anecdote before: ", voted_anecdote)
    for (const [index, n_votes] of Object.entries(prompt.votes_to_check)) {
      console.log(index, n_votes);
      if (n_votes > most_votes){
        most_votes = n_votes
        most_votes_index = index
      }
    }

    if (most_votes != 0) {
      console.log("Most voted anecdote: ", anecdotes[most_votes_index])
      setVotedAnecdote(anecdotes[most_votes_index])
    }
  }

  const AddVote = () => {
    console.log("Updating the votes ", votes)
    const updated_votes = { ...votes, [selected]: votes[selected] + 1 }
    setVotes(updated_votes);
    GetMostVotedAnecdote({votes_to_check: updated_votes})
  }
  
  return (
    <div>
      {anecdotes[selected]}<br></br>
      <button onClick={GetAnecdotesRandomIndex}>Next anecdote</button>
      <button onClick={AddVote}>Vote</button><br></br>
      <WinnerAnecdote anecdote={voted_anecdote}/>
    </div>
  )
}

export default App