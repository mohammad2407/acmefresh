import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { eachProduct } from '../../Redux/Actions/Action'
import ReactPlayer from 'react-player'

export const SingleHydroComponent = () => {
    const SingleProductList = useSelector((store) => store.hydroPonicStore.eachProduct)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(eachProduct(id))
    }, [])

    const listData = SingleProductList.requirements;
    const { title, description1, description2, setupImg, video, requirementsDesc, reqImg } = SingleProductList;
    console.log(SingleProductList)

    return (
        <Body>
            <Title>
                {title} :
            </Title>
            <Image>
                <img src={setupImg} alt="" />
                <p > <i> image explanation</i></p>
            </Image>

            <Description>
                {description1}
            </Description>
            <br /><br />

            <Description>
                {description2}
            </Description>

            <Video>
                <h1>Video for better explanation</h1>
                <ReactPlayer style={{ boxShadow: "1px 2px 3px gray" }} url={video} controls={true}></ReactPlayer>

            </Video>
            <Requireheading>
                {requirementsDesc}
            </Requireheading>

            <Requirements >
                {
                    !listData ? <div>...Loading</div> :
                        listData.map((item) => {
                            return <>
                                <div>
                                    <ul>
                                        <Li>

                                            <div> <h3>{item.step}</h3></div>
                                            <RequirementImg>
                                                <img src={item.reqImg} alt="" />
                                            </RequirementImg>
                                            {item.description}

                                        </Li>
                                    </ul>
                                </div>
                            </>
                        })
                }

            </Requirements>

        </Body>
    )
}
const Title = styled.div`
    float:left;
    margin-left:10px;
    font-size:29px;
    font-weight:700;
    color: #5a880f;
    width:100%;
    padding:2%;
    text-align:left;
`

const Body = styled.div`
    width:80%;
    margin:auto;

`
const Description = styled.div`
    width:100%;
    word-spacing:2px;
        font-size:21px;
        font-family:Montserrat,sans-serif;
        line-height:28px;
        text-align:left;
        word-spacing: auto ;
        margin-top:0px;
        color:#413f3f;
        font-weight:500;
       

`
const Requireheading = styled.div`
     float:left;
    margin-left:10px;
    font-size:29px;
    font-weight:700;
    color: #5a880f;
`

const Image = styled.div`
    width:40%;
    /* margin:auto; */
    float:right;
    margin-top:10%;
    & p {
        padding:0;
     
    }
    & img {
        width:100%
    }
`

const Video = styled.div`
    width:50%;
    margin:auto;
   
`

const Requirements = styled.div`
    width:100%;
    padding:1%;

    & li{
        list-style:disc;
        float : left;
    }
`
const RequirementImg = styled.div`
     width:25%;
    margin:auto;
    /* float:right; */
    margin-top:0%;
    & p {
        padding:0;
     
    }
    & img {
        width:100%
    }
`
const Li = styled.li`
    list-style: disc;
    /* float: left; */
    word-spacing:2px;
        font-size:19px;
        font-family:Montserrat,sans-serif;
        line-height:27px;
        text-align:left;
        word-spacing: auto ;
        margin-top:0px;
        color:#413f3f;
        font-weight:500;
        margin-bottom:35px;
`
