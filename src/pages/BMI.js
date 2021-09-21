import styled from 'styled-components'

const BiggerTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


export default function BMI() {
    return (
        <>
        <BiggerTitle>What is the body mass index (BMI)?</BiggerTitle>
         <p>
         The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
         The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.
         </p>
        </>
    )
}
