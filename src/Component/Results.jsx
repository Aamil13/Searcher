import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import './result.css'
import ReactPlayer from 'react-player'


import { useResultContext } from '../Context/ResultContextProvider'

const Results = () => {
  const {call , result , isloading , searchTerm} = useResultContext();
  const location = useLocation();
  const [numm , setNumm] = useState(10)
  const [page, setPage] = useState(1)

  useEffect(() => {

    

    if(searchTerm){
      if(location.pathname === '/videos'){
        call(`/video/q=${searchTerm}&num=${numm} `)
      }else {
        call(`${location.pathname}/q=${searchTerm}&num=${numm}`)

      }
    }
   }, [searchTerm , location.pathname])

  if(isloading) return (<div style={{height:"70vh"}} className='d-flex justify-content-center align-items-center'><Spinner animation="border" variant="primary" /></div>)

const loadMore = () =>{
  let isLoadMore = true;

  if(location.pathname === '/videos'){
    call(`/video/q=${searchTerm}&page=${page}&num=${numm} `,isLoadMore)
  }else {
    call(`${location.pathname}/q=${searchTerm}&page=${page}&num=${numm}`, isLoadMore)

  }
  setPage(page + 1)
}
    
  // console.log('result', result)     
        
        // console.log(location.pathname);

        switch (location.pathname) {
            case '/search':
                return (
                  <>
                  {!searchTerm ? <h1 className=' text-center w-100 pt-5 ' style={{width:'400px' ,height:"50vh"}}>Nothing <br/> To <br/> Show</h1> : 
                  <div>
                  {result?.map(({link , title,description},index)=>(
                    <div key={index}>
                        <a className='sa' href={link} target="_blank" rel='noreferrer'>
                          <p className='mb-1'>
                            {link.length > 30 ? link.substring(0 , 30) : link}
                          </p>
                          <p className='ap'>
                            {title}
                          </p>
                          <p>
                            {description}
                          </p>
                        </a>
                    </div>
                  ))}

                  
              </div>}
              {searchTerm ? <div className='d-flex justify-content-center'>

                        <button className='btn btn-light' onClick={loadMore}>Load More</button>
                      </div> : null}
                </>
                
                )
               

                case "/image" :
                  return (
                   <>
                    {!searchTerm ? <h1 className=' text-center w-100 pt-5 ' style={{width:'400px' ,height:"50vh"}}>Nothing <br/> To <br/> Show</h1> :
                    <div className='d-flex flex-wrap p-3 justify-content-center align-content-center'>
                    {result?.map(({image , link:{href , title}},index)=>(
                    
                      <a className='p-2 m-3 ' href={href}  key={index} target="_blank" rel='noreferrer' >
                      <img src={image?.src} alt={title} loading="lazy" />
                      
                      </a>
                      
                    
                    ))}

                    </div>  }
                    {searchTerm ? <div className='d-flex justify-content-center'>

<button className='btn btn-light' onClick={loadMore}>Load More</button>
</div> : null}
                    </>
                  )
                   

                  case "/news" :
                  return(
                    <>
                    {!searchTerm ? <h1 className=' text-center w-100 pt-5 ' style={{width:'400px' ,height:"50vh"}}>Nothing <br/> To <br/> Show</h1> :
                      <div>
                          {result?.map(({link ,id , title , source})=>(
                        <div key={id}>
                            <a className='sa' href={source?.href} target="_blank" rel='noreferrer'>
                             <p>{source?.title}</p>
                              
                              {/* <p>
                                {description}
                              </p> */}
                            </a>
                           <a className='' href={link} target="_blank" rel='noreferrer'>
                           <p className='ap ms-4 me-4 mt-0'>
                                {title}
                              </p>
                           </a>
                        </div>
                      ))}


                      </div> }
                      {searchTerm ? <div className='d-flex justify-content-center'>

<button className='btn btn-light' onClick={loadMore}>Load More</button>
</div> : null}
                      </>
                  )
                 


                  case "/video" :
                  return(
                    <>
                    {!searchTerm ? <h1 className=' text-center w-100 pt-5 ' style={{width:'400px' ,height:"50vh"}}>Nothing <br/> To <br/> Show</h1> :
                    <div className='d-flex flex-wrap justify-content-center '>
                      {result.map((video  , index)=> (
                        <div key={index} className="p-2">
                          {/* {console.log(video)} */}
                          <ReactPlayer url={video.additional_links?.[0]?.href} controls width='400px' height="200px" />
                        </div>
                      ))}
                    </div>}
                    {searchTerm ? <div className='d-flex justify-content-center'>

<button className='btn btn-light' onClick={loadMore}>Load More</button>
</div> : null}
                    </>
                  )
                  
                
        
            default:
              return "error"
        }
        

}

export default Results