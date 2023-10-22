import { useState } from 'react'

const Hist = (props) => {
  console.log(props.allClicks)
  if (props.allClicks.length == 0) {
    return (
      <div>
        the app is used by pressing the mouse buttons
      </div>
    )
  }
  return (
    <div>
      buttons press history: {props.allClicks.join(', ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const updatedLeft = clicks.left + 1
    setClicks({ ...clicks, left: updatedLeft })
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + clicks.right)
  }
  

  const handleRightClick = () => {
    const updatedRight = clicks.right + 1
    setClicks({ ...clicks, right: updatedRight })
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + updatedRight)
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {clicks.right}
      <Hist allClicks={allClicks} />
      <p>Total clicks: {total}</p>
    </div>
  )
}

export default App