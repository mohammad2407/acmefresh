import React from 'react'
import styled from 'styled-components'

export const Hydroponic = () => {
  return (
    <div>

      <Body>
     
    <div>
        <div>
          <ParaDiv style={{fontSize:"30px", marginBottom:"40px", color:"orchid"}}>
            <b>What is Hydroponic Farming ?</b>
          </ParaDiv>
          <ExplainingDiv>
          <img src="https://www.agrifarming.in/wp-content/uploads/2015/08/Growing-Lettuce-in-Hydroponics-Farming.jpg" alt="" />
          </ExplainingDiv>
          <ParaDiv>


          <p>
            <b>Introduction Of Hydroponics Farming :</b> What is Hydroponic Farming ? It is the modern technology farming in which plant growth and productivity is controlled by water and its
            nutrients   levels in the water. In other words, it is the farming without soil and growing the crops
            on water. The word Hydroponics means “Water Related” and this technology of farming has become popular and has greater applications in moder farmin practices.
          </p>

          <p>
            <b>Hydroponics Farming Process :</b> In Hydroponics Farming, water is enriched with well balanced nutrients which are essential for plants growth and  better yield. Water level pH will be maintained within the specific range which results in better growth and produce. In this farming, plants take the nutrients from the water and using sun light, they produce the output. As we said it’s a soilless farming, one should ensure to replace the basic functions of soil while opting for Hydroponics farming. The following are the basic functions of the soil which have to be provided in water based farming in the absence of soil.
          </p>
          </ParaDiv>

          <ExplainingDiv>
            <img src="	https://www.agrifarming.in/wp-content/uploads/2015/08/Hydroponics-System1.jpg" alt="" />
         
          </ExplainingDiv>
        
          <ul>
            <Li>
             <span> <strong>Plant Root System Support: </strong> Generally, in Hydroponics system, a medium like sand or gravel or plastics are used for supporting the plant root system.</span>
            </Li>

             <Li>
              <span> <strong>Supply of Nutrients: </strong>In the soil based farming system, nutrients are supplied from organic content. where as in Hydroponics farming, fertilizers are added in the water for providing the well balanced. nutrition to the plants. </span>
             </Li>

             <Li>
              <span> <strong>Supply of Oxygen: </strong> In soil based farming, plats use the oxygen from the soil where as in Hydroponics, plants get the oxygen from the water. This is just like providing the oxygen for fish in the tank.</span>
             </Li>

              <Li>
                <span>
                  <strong>Supply of Water: </strong>
                  In soil based farming, plants get the water from the soils to establish the root system in the soil where as in Hydroponics farming, water is directly supplied to the plants.
                </span>
              </Li>
          </ul>
        <ParaDiv>

          <p>
          The above explains how we can replace the soil based farming with water based farming without affecting the plant functions.
          </p>
          <p><strong>Advantages of Hydroponic Farming: The following are main advantages of  Hydroponics Farming.</strong></p>
        </ParaDiv>
        </div>

        <div>
          <ul>
            <Li>
              <span>
              Hydroponics uses all the mineral nutrients provided in the water without any wastage thus it provides the less pollution farming.
              </span>
            </Li>

               <Li>
              <span>
              Hydroponics farming requires less water compared to soil based farming.
              </span>
            </Li>

            <Li>
              <span>
              As we are controlling water pH level and providing essential nutrients in optimized way, faster growth and high yield can be expected in this system.
              </span>
            </Li>

            <Li>
              <span>
              Hydroponics system can be automated and managed easily.
              </span>
            </Li>

            <Li>
              <span>
              Unlike traditional farming methods, Hydroponics farming requires less space.
              </span>
            </Li>

            <Li>
              <span>
              This technology can be combined with greenhouse technology to get better results.
              </span>
            </Li>

            <Li>
              <span>
              The only disadvantage of Hydroponics system is its initial set up cost. However, most of the farmers already getting good results with this system used in greenhouse farming.
              </span>
            </Li>

          </ul>
        </div>


    </div>
      </Body>
    </div>

  )
}

const ParaDiv = styled.div`
  word-spacing:2px;
        font-size:19px;
        font-family:Montserrat,sans-serif;
        line-height:30px;
        text-align:left;
        word-spacing: auto ;
        margin-top:0px;
        color:#2c2929;
        font-weight:500;
        width:70%;
        margin-left:15%;

        & b{
          color: #171750;
        };
        & strong{
           color: #4949d1
        }
        
`

const ExplainingDiv = styled.div`
  width:40%;
  margin:auto;
   
   & img {
     width:100%;
   }
`

const Body = styled.div`
  margin-top:15%;
  width:90%;
  /* margin:auto; */
  
`

const Li = styled.li`
  text-align:left;
  list-style:disc;
 

  & strong{
           color: #46771d
        };

  word-spacing:2px;
        font-size:19px;
        font-family:Montserrat,sans-serif;
        line-height:30px;
        text-align:left;
        word-spacing: auto ;
        margin-top:0px;
        color:#2c2929;
        font-weight:500;
        width:70%;
        margin-left:15%;
`

