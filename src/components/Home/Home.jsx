import './Home.css'
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const Home = () => {
    const [allactors,setAllactors]=useState([])
    const[selectActor,setSelecActor]=useState([])
    const[rmaining,setRemaing]=useState(0)
    const[totalCost,setTotalCost]=useState(0)
    useEffect(()=>{
        fetch('./data.json')
        .then(rcs=>rcs.json())
        .then(data=>setAllactors(data))
    },[])
    // handle button start
    const handleSelect=(actor)=>{
        const isExist =selectActor.find(item=>item.id ===actor.id)
        let cost = actor.salary
        if (isExist) {
            alert('already booking')
        }
        else{
              selectActor.forEach((item)=>{
                 cost=cost+item.salary
              })
              setTotalCost(cost)
              if (cost>20000) {
                return alert('taka ses tomi pore jogajog koiro')
              }
              const totalRemaining =20000-cost
              setRemaing(totalRemaining)
             
            setSelecActor([...selectActor,actor])
        }
       
     
    }
    
    return (
        <div className='container'>
            <div className='card-container flex flex-col-reverse lg:flex-row'>
                <div className='cart flex flex-wrap gap-5'>
                {
                    allactors.map((actor)=>(
                        <div key={actor.id} className='left-card text-center '>
                 <div className='img'>
                    <img className='ml-20' src={actor.image} alt="" />
                 </div>
                 <h2 className='my-6 text-2xl font-bold' >{actor.name}</h2>
                 <div className='font-bold'>
                 <span>Salary:{actor.salary}</span><span className='ml-5'>{actor.role}</span>
                 </div>
                 <button onClick={()=>handleSelect(actor)} className=' bg-orange-600 py-2 px-3 rounded-lg mt-5'>Selected</button>
                </div>
                    ))
                }
                </div>
           
           <div className='right-card'>
            <Card selectActor={selectActor} rmaining={rmaining} totalCost={totalCost}></Card>
           </div>
           </div>
        </div>
    );
};

export default Home;