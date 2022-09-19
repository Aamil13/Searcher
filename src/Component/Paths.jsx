import React from 'react'
import {Routes , Route ,Navigate} from "react-router-dom"
import Results from './Results'

export const Paths = () => {
  return (
    <div>
      <Routes>

      
        <Route exact path='/' element={<Navigate to="/search"/>} ></Route>

        {["/search","/news","/image","/video"]?.map((value)=>{
            return <Route path={value} key={value} element={<Results/>}> </Route>
        })} 
          
        
      
        </Routes>

    </div>
  )
}

