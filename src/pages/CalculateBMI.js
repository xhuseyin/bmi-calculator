import { useState, useEffect } from 'react'
import Form from '../components/Form'

export default function CalculateBMI() {
    const [result, setResult] = useState({ height: 0, weight: 0 })
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(result.weight > 0 || result.height > 0){
        setTotal(((result.weight / result.height / result.height) * 10000).toFixed(1))
        }
        
    }, [result])

    return (
        <>
            <h1>Calculating BMI Using the Metric System</h1>
            <Form addResult={setResult} />
            <p>Calculation: [{result.weight} (kg) / {result.height} (cm) / {result.height} (cm)] x 10,000 = {total}</p>
        </>
    )
}
