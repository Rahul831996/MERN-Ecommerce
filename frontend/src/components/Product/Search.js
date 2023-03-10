import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import "./Search.css"

const Search = () => {

    const [keywords, setKeyword] = useState(" ");

    const navigate = useNavigate();
    
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if(keywords.trim()) {
          navigate(`/products/${keywords}`);
        }
        else{
          navigate("/products");
        }
    };


  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
        <form  className='searchBox' onSubmit={searchSubmitHandler}>
            
            <input type="text" placeholder='Search a Product..' onChange={(e) => setKeyword(e.target.value)} />
            <input type="submit" value="Search" />
        </form>
    </Fragment>
  )
}

export default Search;