import React, { useState, useEffect } from 'react'

const Trade = ()=>{
    const [data,setData] = useState({
        metal:0,
        cristal:0,
        deuterium:0,
    })
    const [taux,setTaux] = useState({
        metal:2,
        cristal:1.5,
        deuterium:1
    })


    let result;
    useEffect(()=>console.log(data,taux));

    const handleChangeData = (e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:parseInt(value)});
    }
    
    const handleChangeTaux = e =>{
        const {name,value} = e.target;
        setTaux({...taux,[name]:parseFloat(value)});
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
    }
    return(
    <div>
        <h1>Calcul commerce</h1>
        <p>taux maxi à respecter: 3M:2C:1D</p>

        <form onSubmit={handleSubmit}>
            <div>
                Metal:
                <input type="number" onChange={handleChangeData} value={data.metal} name="metal" />
            </div>
            <div>
                Cristal: <input type="number" onChange={handleChangeData} value={data.cristal} name="cristal"/>
            </div>
            <div>
                Deuterium: <input type="number" onChange={handleChangeData} value = {data.deuterium} name="deuterium"/>
            </div>
            <div>
                Taux: 
                <div>
                    Metal<input type="number" value= {taux.metal} onChange={handleChangeTaux} name="metal" className="inputTaux"  />
                    Cristal<input type="number" value= {taux.cristal} onChange={handleChangeTaux} name="cristal" className="inputTaux" /> 
                    Deut<input type="number" value= {taux.deuterium} onChange={handleChangeTaux} name="deuterium" className="inputTaux" /> 
                </div>
            </div>
            Contre:
            <div>
                <input type="radio" name="vs"  />Metal
                <input type="radio" name="vs" />Cristal
                <input type="radio" name="vs" />Deuterium
                <input type="radio" name="vs"/>Mix
            </div>
            <button>Envoyer</button>
        </form>
        <h1>{result}</h1>
    </div>
    )
}


export default Trade;