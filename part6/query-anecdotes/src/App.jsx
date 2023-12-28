import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const anecdotesResult = useQuery({
    queryKey: ['anecdotes'],
    queryFn: () => axios.get('http://localhost:3001/anecdotes').then(res => res.data),
    retry: false
  })
  console.log(JSON.parse(JSON.stringify(anecdotesResult)))

  if (anecdotesResult.isLoading) {
    return <div>loading data...</div>
  } else if (!anecdotesResult.isSuccess) {
    return <div>anecdote service not available due to problems in server</div>
  } else {
    console.log(anecdotesResult)
    const anecdotes = anecdotesResult.data
    return (
      <div>
        <h3>Anecdote app</h3>
      
        <Notification />
        <AnecdoteForm />
      
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
