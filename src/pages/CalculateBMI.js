import { useState, useEffect } from 'react'
import Form from '../components/Form'

export default function CalculateBMI() {
    const [result, setResult] = useState({ height: 0, weight: 0 })
    const [total, setTotal] = useState(0.00)
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (result.weight > 0 || result.height > 0) {
            setTotal(((result.weight / result.height / result.height) * 10000).toFixed(1))
               console.log('total:',total);
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
            <h1>Calculating BMI Using the Metric System</h1>
            <Form addResult={setResult} />

            <h2>Calculation: [{result.weight} (kg) / {result.height} (cm) / {result.height} (cm)] x 10,000 = {total}</h2>            
            <h2>{category}</h2>

            <hr/>
            <h2>BMI Categories</h2>
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
