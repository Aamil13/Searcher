import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Search from './Search';
import {useDebounce} from 'use-debounce'
import { useResultContext } from '../Context/ResultContextProvider'

const Navb = () => {

        const {setSearchTerm} = useResultContext();
        const [text ,setText] = useState("");
        const [debounceValue] = useDebounce(text , 300);
        const[st, setSt] = useState('');
    
        useEffect (()=>{
              if(debounceValue){ setSearchTerm(debounceValue)}
        },[debounceValue])

       
        

   
    
  return (
    <div className='border-bottom border-danger'>
    <div className='d-flex p-5 pb-0 justify-content-evenly flex-column flex-lg-row align-items-center '>
        
        <Link to="/">
            
        <h1 className=' text-center text-light p-2 rounded-5 fw-light'>Searcher</h1>
        </Link>
        
        <InputGroup className="mb-3 searchss pt-2">
        <Form.Control
          placeholder="Type here"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={st}
          onChange={((e)=>setSt(e.target.value))}
        />
        <Button className='btn-primary text-light' variant="outline-secondary">
          {onclick=(()=>setText(st))} Search
        </Button>
      </InputGroup>
            
      
    </div>
      <Search/>
      </div>
  )
}

export default Navb