import React, {useState} from 'react';
const Statistic = (params) => {
  
  return (
      <div>
                      <h3><Stats text="good" value={params.Good} /></h3>
                      
                      <h3><Stats text="bad" value={params.Bad} /></h3>
   
      </div>
  )
}
const App = () => {
    const [Good, setGood] = useState(0)
    const [Neutral, setNeutral] = useState(0)
    const [Bad, setBad] = useState(0)
    return (
        <div>
          <h2>Give Your Feedback</h2>
          <h3>How is your day?</h3>
            <div>
                <Button click={()=> setGood(Good+1)} text="good" />
  
                <Button click={()=> setBad(Bad+1)} text="bad" />                  
            </div>
            <h2>statistics</h2>
            <Statistic Good={Good} Bad ={Bad}  />
        </div>
    )
}
const Stats = (params) => {
  return (
      <p>{params.text} {params.value}</p>
  )
}
const Button = (params) => {
  return (
      <button onClick={params.click}>{params.text}</button>
  )
}
export default App