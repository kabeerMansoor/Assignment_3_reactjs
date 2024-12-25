import React from 'react'
import Card from './Components/Cards/Card'
import { Data } from './Data'

const App = () => {
  return (
    <>

      {
        Data ? 
        Data.map((e)=>{
          return(
            <>
            <Card key={e.id} title={e.title} price={e.price} rating={e.rating.rate} desc={e.description} imageSrc={e.image} />
            </>
          )
        }) 
        : 
        "Data not fetched yet! please wait..."
      }
      
    </>
  )
}

export default App