import { useState, useEffect } from 'react'
import Form from '../components/Form'
import styled from 'styled-components'

const BiggerTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const BigTitle = styled(BiggerTitle)`
  font-size: 1em;  
`;

export default function CalculateBMI() {
    const [result, setResult] = useState({ height: 0, weight: 0 })
    const [total, setTotal] = useState(0.00)
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (result.weight > 0 || result.height > 0) {
            setTotal(((result.weight / result.height / result.height) * 10000).toFixed(1))
                if(total < 18.5)
                    setCategory('Underweight')                    
                else if(total >= 18.5 && total <= 24.9)
                    setCategory('Normal weight')                    
                else if(total >= 25 && total <= 29.9)
                    setCategory('Overweight')                    
                else if(total >= 30)
                    setCategory('Obesity')                               
        }

    }, [result,total])

    return (
        <>
            <BiggerTitle>Calculating BMI Using the Metric System</BiggerTitle>
            <Form addResult={setResult} />
            <BigTitle>Calculation: [{result.weight} (kg) / {result.height} (cm) / {result.height} (cm)] x 10,000 = {total}</BigTitle>            
            <BigTitle>{category}</BigTitle>
            <hr/>
            <BigTitle>BMI Categories</BigTitle>
            <pre>
            {`
            Underweight =< 18.5
            Normal weight = 18.5–24.9
            Overweight = 25–29.9
            Obesity = BMI of 30 or greater`}
            </pre>
        </>
    )
}
