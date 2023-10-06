import { styled } from "styled-components";
import MainPage from "@/components/AP";
import SingleQuestion from "@/components/Tips";
import React, { useState } from 'react';
import tips from "./tips";



export default function HomePage(){
  const [tip, setTip] = useState(tips);
const [questions, setQuestion] = useState(tips);
  return(
    <>
    <MainPage/>
    <h3>Questions and answer about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion 
            key={question.id} 
            title={question.title}
            info={question.info} />
          })}
        </section>
    </>
  )
}

  