import React from 'react'
import ReactPlayer from 'react-player'
export const Store = () => {

    const data = [
        {
            id : 1,
            engname:"Strawberries",
            hindiname:"सलाद पत्ता",
            image:"https://m.media-amazon.com/images/I/51s4t4rnU4L.jpg",
        }
    ]
  return (
    <div>
        <ReactPlayer url={`https://www.youtube.com/watch?v=zTitoHKsyJg`} controls = {true}></ReactPlayer>

    </div>
  )
}
