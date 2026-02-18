import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function About() {
  const[n1,setN1]=useState(0)
  const[n2,setN2]=useState(0)
  const[ans,setAns]=useState(0)
  
  let setn1=(e)=>{setN1(e.target.value)}
  let setn2=(e)=>{setN2(e.target.value)}
  let add=()=>{
   let num1=Number(n1)
   let num2=Number(n2)
   setAns(num1+num2)
  }

  return (
    <>
   <h1>This is About Page</h1>
     <Form.Control type="number" onChange={setn1} placeholder="Enter Number one: " />
      <br />
      <Form.Control type="number" onChange={setn2} placeholder="Enter Number two: " />
      <br />
   <Button variant="danger" onClick={add}>Success</Button>
      <h1>{ans}</h1>
    </>
  )
}
