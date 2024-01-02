import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const orderAnecdotes = ( anecdotes ) => {
  return anecdotes.sort((a, b) => b.votes - a.votes)
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote (state, action) {
      const id = action.payload
      const anToChange = state.find(n => n.id === id)
      const changedAn = {
        ...anToChange, votes: anToChange.votes + 1
      }
      return orderAnecdotes(state.map(note => note.id === id ? changedAn : note))
    },
    addAnecdote (state, action) {
      const newAnecdote = asObject(action.payload)
      return orderAnecdotes([ ...state, newAnecdote ])
    },
    appendAnecdote (state, action) {
      state.push(action.payload)
    },
    setAnecdotes (state, action) {
      return orderAnecdotes(action.payload)
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote = (id) => {
  return async dispatch => {
    await anecdoteService.addVote(id)
    dispatch(voteAnecdote(id))
  }
}

export const { voteAnecdote, addAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer