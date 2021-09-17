import { useState, useEffect } from 'react'

const initialFormValues = { height:0, weight:0 }

export default function Form({addResult}) {
    const [form, setform] = useState(initialFormValues)   

    const onChangeInput = (e) => {
    setform({...form, [e.target.name]: e.target.value})        
    }

    const onSubmit = (e) => {
        e.preventDefault()            
         addResult(form)
         //clear the input fields
         setform(initialFormValues)
    }

    useEffect(() => {
    }, [form])

    return (
        <form onSubmit={onSubmit}>
            <label>your height(cm)</label>
            <input name="height" value={form.height} onChange={onChangeInput}/>
            <br/><br/>
            <label>your weight(kg)</label>
            <input name="weight" value={form.weight} onChange={onChangeInput}/>
            <br/><br/>
            <button>Calculate</button>
        </form>
    )
}