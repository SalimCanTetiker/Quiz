import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Dropdown from '../../components/Dropdown/Dropdown'

import './Home.css'

const Home = () => {
  const difficulty = ["easy", "medium", "hard"]
  const [difficultyData, setDifficultyData] = useState('')
  const navigate = useNavigate()
  const totalQuestion = 10

  const startQuiz = () => {
    if(difficultyData){
    navigate(`/quiz/${difficultyData}/${totalQuestion}`)
    }
  }
  return (
    <div className='home'>
      <div className='home-container'>
      <img src='https://media.istockphoto.com/id/1186386668/vector/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design.jpg?s=612x612&w=0&k=20&c=mBQMqQ6kZuC9ZyuV5_uCm80QspqSJ7vRm0MfwL3KLZY='/>
      <Dropdown data={difficulty} setDifficultyData={setDifficultyData} />
      <div onClick={startQuiz} className='home-button'>START</div>      
      </div>
    </div>
  )
}

export default Home