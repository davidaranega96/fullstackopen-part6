import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const addVote = async (id) => {
    const url = `${baseUrl}/${id}`
    const responseOld = await axios.get(url)
    const votes = responseOld.data.votes + 1
    const newAnecdote = { ...responseOld.data, votes: votes}
    const updatedObject = await axios.put(url, newAnecdote)
    return updatedObject.data
}

export default { getAll, createNew, addVote }