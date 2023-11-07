import { useState } from 'react'

const StatisticLine = (prompt) => {
  return (
    <tr><td>{prompt.text}:</td><td>{prompt.value}</td></tr>
  )
}


const Statistics = (prompt) => {
  console.log(prompt)
  const all = prompt.counter.good + prompt.counter.neutral + prompt.counter.bad
  const average = (prompt.counter.good - prompt.counter.bad) / all
  const positive = (prompt.counter.good / all) * 100
  console.log(all)
  if (all == 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <div>No feedback given</div>
    </div>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <StatisticLine text='good' value={prompt.counter.good}/>
        <StatisticLine text='bad' value={prompt.counter.bad}/>
        <StatisticLine text='neutral' value={prompt.counter.neutral}/>
        <StatisticLine text='all' value={all}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const FeedbackButton = (props) => {
  return (
    <button onClick={() => props.onClick({ value: props.value })}>
      {props.value}
    </button>
  );
};


const App = () => {
  // save clicks of each button to its own state
  const [counter, setCounter] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const AddCounter = (value) => {
    console.log("Adding to counter", value.value)
    setCounter({...counter, [value.value]: counter[[value.value]]+1})
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <FeedbackButton value='good' onClick={AddCounter}/>
      <FeedbackButton value='neutral' onClick={AddCounter}/>
      <FeedbackButton value='bad' onClick={AddCounter}/>
      <Statistics counter={counter}/>
    </div>
  )
}

export default App