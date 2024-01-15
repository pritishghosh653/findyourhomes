// import React, { useState ,useEffect} from 'react'
import HomeCard from './HomeCard';


const Findyourhomes = () => {
  // const [getData , setData ] = useState('');
  // const [visible, setVisible] = useState(2);
   
  // const fetchData = async() =>{
  //  await fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((data)=> setData(data));
  // }
  // const loadMore = ()=> {
  //   setVisible(visible => visible + 2);
  // }


  // useEffect(() => {
  //   fetchData();
  // }, [visible])
  // if (getData) {
  //   console.log(getData.length);
  //   console.log(visible);
  // }

  
  return (
    <div id='findyourhomes'>
      <div className="home-container">
        {/* {getData? 
          getData.slice(0,visible).map((item,index)=>
            <p key={index}>{item.name}</p>
          )
        : 'No Data'}
        {visible < 10 ? <button onClick={loadMore}>Load More</button> : ""} */}
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </div>
  )
}

export default Findyourhomes
