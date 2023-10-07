import React from 'react'
import { Link } from 'react-router-dom';
const WorkCard = () => {
  return (
    <div className="work-container">
      <Link to = "https://flashcard-generator-alma.vercel.app/">
        <h2>1. Flash-Card Generator</h2>
      </Link>
      <Link to ="https://calc-list.vercel.app/">
        <h2>2.Calc- list </h2>
      </Link>
      <Link to ="">
        <h2>3. Todo-List</h2>
      </Link>
      <Link to ="">
        <h2>4. Chit-Chat APP</h2>
      </Link>
      <Link to ="">
        <h2>5. Book MY Show</h2>
      </Link>
       

      
    </div>
  )
}

export default WorkCard;
