import { useState } from 'react'
import './App.css'
import useFetch from './hook/use_fetch'


function App() {
  // https://dummyjson.com/products
    const {data,loading,error} = useFetch('https://dummyjson.com/products')
     console.log(data,loading,error); 
  
     if(loading){
      return <h1>Loading...</h1>
     }
     if(error){
      return <h1 style={{color:'red'}} >{error.message}</h1>}
  return (<>
      <h1>Fetch Data from API</h1>
    <div className="container">
       {data && data.products.map( (item) =>
       <div key={item.id} className='card'>
          <div className='fig'>
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className='info'>
            <h2>{item.title}</h2>
            <p className='scroll_info'>{item.description}</p>
            <h3>Price: ${item.price}</h3>
             <div className='buy_btn'><button>Buy</button></div>
          </div>
        </div> 
      )}
    </div></>
  )
} 


export default App
