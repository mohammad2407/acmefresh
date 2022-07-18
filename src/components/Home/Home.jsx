import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <HomeDiv>

        <IntroDiv>
            <div>
            <h3>
                Buy Healthy 
            </h3>
            <h3>
                Stay Healthy
            </h3>
            </div>

        </IntroDiv>

        <Section>
        <About>
            <p>
                We are the one of the fast Growing Hydroponic Companies in India. We ensure to delilver the best quality Fruits, Vegetables and All types of plants. We support farmers and help them from the middle persons to get most of the benefits. We practise Latest Automations so that since the item
                is planted till its delivered we practise no touch to the plants.
            </p>
        </About>
        <Image>
            <img src="https://cdn.pixabay.com/photo/2016/07/29/15/50/farm-1554307_960_720.jpg" alt="" />
        </Image>
        </Section>


        <Section>
        <Image>
            <img src="https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139527_960_720.jpg" alt="" />
        </Image>
        <About style={{marginLeft:"20px"}}>
            <p>
                We are the one of the fast Growing Hydroponic Companies in India. We ensure to delilver the best quality Fruits, Vegetables and All types of plants. We support farmers and help them from the middle persons to get most of the benefits. We practise Latest Automations so that since the item
                is planted till its delivered we practise no touch to the plants.
            </p>
        </About>
        </Section>

        <Section>
        <About >
            <p>
                We are the one of the fast Growing Hydroponic Companies in India. We ensure to delilver the best quality Fruits, Vegetables and All types of plants. We support farmers and help them from the middle persons to get most of the benefits. We practise Latest Automations so that since the item
                is planted till its delivered we practise no touch to the plants.
            </p>
        </About>
        <Image>
            <img src="https://cdn.pixabay.com/photo/2020/05/20/07/37/beby-pakcoy-5195246_960_720.jpg" alt="" />
        </Image>
        </Section>
      </HomeDiv>
    </div>
  )
}

export default Home

const HomeDiv = styled.div`
    width:100%;
   
`

const IntroDiv  = styled.div`
    
    width:100%;
    height:600px;
    background: url(https://freepngimg.com/thumb/leaves/155944-green-leaves-organic-free-download-png-hd.png);
    background-repeat: no-repeat;
    /* z-index:5; */
    & div{
        width:40%;
        position:absolute;
        margin:  15% 30%;
        background: #4c60cf;
        border-radius: 9px;
        font-size:40px;
        color:#fff;

    }
   

`

const About = styled.div`
    width: 30%;
    /* border: 1px solid black; */
    margin-right:20px;
    padding:2%;
    & p{
       word-spacing:2px;
        font-size:19px;
        font-family:Montserrat,sans-serif;
        line-height:30px;
        text-align:left;
        margin-top:40px;
        color:#2c2929;
        font-weight:500;
    }
`

const Section = styled.div`
    margin:auto;
    width:85%;
    display:flex;
    margin-left:8%;
    margin-top:3%;
   box-shadow:0px 2px 9px 1px #b7df6e;
   /* position:absolute; */
`
const Image = styled.div`

    width:65%;
    height:400px;
    float:right;
    & img {
        width:90%;
        height:95%;
        margin-top:20px;
    }

`

