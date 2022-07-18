import React from 'react'
import styled from 'styled-components'

export const Form = () => {
  return (
    <div>
      <FormDiv>
      <InputDiv>
        <span> Name</span>
        <input type="text" placeholder='' />
      </InputDiv>

      <InputDiv>
        <span> Email</span>
        <input type="text" placeholder='' />
      </InputDiv>

        
        <select>
          <option value="">Outdoor Setup</option>
          <option value="Indoor">Indoor Setup</option>
        </select>
        <div>

          <select >
            <option value="">Wick system</option>
            <option value="">Deep Water Culture</option>
            <option value=""> Ebb And Flow</option>
            <option value="">Drip Systems</option>
            <option value=""> N.F.T(Nutrient Film Technology)</option>
            <option value= "">Aeroponic System </option>
          </select>

        </div>
      </FormDiv>
    </div>
  )
}

const FormDiv = styled.div`
  width:90%;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  border:1px solid black;
  margin:auto;
  

`

const InputDiv = styled.div`
  width:40%;
  padding:2%;
  & input {
     width:100%;
     padding:3%;
     font-size:15px;
  }
`
