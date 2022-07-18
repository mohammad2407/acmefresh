import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { eachProduct, getData, isChecked } from '../../Redux/Actions/Action'
import { Form } from './Form'
import "./Hydroponic.css"
export const Farmsetup = () => {
    const hydroData = useSelector((store) => store.hydroPonicStore.hydroponicProducts)

    // const [ischecked, setChecked] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())


        return () => { console.log("good") }
    }, [])
    console.log(hydroData)

    // const display = (event) =>{
    //     // if ( event.target.checked){
    //     //     setChecked(true)
    //     // }
    //     // else{
    //     //     setChecked(false)
    //     // }
    //     console.log(event)
    //     // var savebtn = document.getElementById("savebtn");
    //     // if (event.target.checked == true){
    //     //   savebtn.style.display = "block";
    //     // } else {
    //     //    savebtn.style.display = "none";
    //     // }
    // }

    return (
        <div style={{marginTop:"140px"}}>
               <div style={{marginTop:"15%"}}>
          <h2>Things You should know Before buying.</h2>
        </div>
            {
                hydroData.map((product) => {
                    const { images, title, description1, description2, id } = product;
                    return (
                        <>

                            <Link to={`/setup-kit/Farm-setup/${id}`} style = {{textDecoration:"none"}} 
                              onClick = {() => dispatch(eachProduct(id))}
                            >
                            <Card key={title}>
                            
                                <Title>
                             
                                        {title}
                                
                                </Title>
                                
                                <FlexDiv>
                                    <ImageDiv>

                                    <img src={images} alt="" />
                                    </ImageDiv>
                                    <Description>
                                        {description1}
                                    </Description> 
                                    <br /> <br />
                                </FlexDiv>
                                <button > More </button>
                            </Card>
                            </Link>
                         
                           
                        </>
                    )
                })
            }

            <Form />
        </div>
    )
}

const Card = styled.div`
    
    width:80%;
    margin: auto;
    box-shadow:2px 2px 6px gray;
    margin-bottom:30px;
    padding:2%;

`

const Savebtn = styled.button`
    margin-left: 20%;
    position:absolute;
    display:"none"
`

const Title = styled.div`
    float:left;
    margin-left:40px;
    float:left;
    margin-left:10px;
    font-size:29px;
    font-weight:700;
    color: #0d2d57;
    width:100%;
    padding:2%;
    text-align:left;

`

const Description = styled.div`
     word-spacing:2px;
        font-size:19px;
        font-family:Montserrat,sans-serif;
        line-height:30px;
        text-align:left;
        word-spacing: auto ;
        margin-top:0px;
        color:#2c2929;
        font-weight:500;
        width:50%;
        margin-left:5%;
`
const ImageDiv  = styled.div`
    width:40%;
    & img {
        width:100%
    }

`
const FlexDiv = styled.div`
    display:flex;
    width:100%;

`