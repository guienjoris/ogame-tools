import React, { useState, useEffect } from 'react'

const Trade = ()=>{
    const [ressources,setRessources] = useState({
        ressource:"deuterium",
        value:0
    })
    const [taux,setTaux] = useState({
        metal:2,
        cristal:1.5,
        deuterium:1
    })
    const [vs,setVs] = useState({});

    const [result,setResult] = useState();
    const [percent,setPercent] = useState(0.01);
    let percentDisplay;
    
    useEffect(()=>{
        console.log(ressources,taux,vs,percent);
        
    },[ressources,taux,vs]);

    const handleChangeRessources = (e)=>{
        const {name,value} = e.target;
        setRessources({...ressources,[name]:value});
    }
    const handleChangeTaux = e =>{
        const {name,value} = e.target;
        setTaux({...taux,[name]:parseFloat(value)});
    }
    const handleChangeVs = e =>{
        const {name,value} = e.target;
        setVs({...vs,[name]:value})
    }
    const handleChangePercent = e =>{
        const {value} = e.target;
        setPercent(value);
    }
    const calcResult = () =>{
        if(ressources.ressource === "deuterium" ){
            setResult(parseInt(ressources.value)* parseFloat(vs.vs))
        }
        if(ressources.ressource === "metal" && parseFloat(vs.vs) === taux.metal ){
            setResult(parseInt(ressources.value))
        }
        if(ressources.ressource === "metal" && parseFloat(vs.vs) === taux.cristal ){
            setResult(parseInt(ressources.value)/parseFloat(vs.vs));
        }
        if(ressources.ressource === "metal" && parseFloat(vs.vs) === taux.deuterium){
            setResult(parseInt(ressources.value)/parseFloat(taux.metal))
        }
        if(ressources.ressource === "cristal" && parseFloat(vs.vs) === taux.metal ){
            setResult(parseInt(ressources.value)*parseFloat(taux.cristal))
        }
        if(ressources.ressource === "cristal" && parseFloat(vs.vs) === taux.cristal ){
            setResult(parseInt(ressources.value));
        }
        if(ressources.ressource === "cristal" && parseFloat(vs.vs) === taux.deuterium){
            setResult(parseInt(ressources.value)/parseFloat(taux.cristal))
        }
        if(vs.vs === "mix"){
            let mixM = parseInt(ressources.value)*percent*parseFloat(taux.metal);
            let mixC = parseInt(ressources.value)*(1-percent)*parseFloat(taux.cristal);
            setResult(`Pour ${mixM} de métal et ${mixC} de cristal`)
        }
    }
    const handleSubmit = e =>{
        e.preventDefault();
        calcResult();
    }
    
    if(vs.vs === "mix"){
        percentDisplay=<div>
            Pourcentage de metal le restant sera du cristal{' '}
            <input type="number" placeholder="0.1 = 10%" min="0.01" max="0.99" step="0.01" value={percent} onChange={handleChangePercent} />
        </div>
    }
    return(
    <div>
        <h1>Calcul commerce</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <p>Valeur des ressources:</p> 
                <input type="number" onChange={handleChangeRessources} name="value" value={ressources.value.value} />
                <div>
                    <input type="radio" name="ressource" value="metal" onChange={handleChangeRessources}  />Metal
                    <input type="radio" name="ressource" value="cristal" onChange={handleChangeRessources} />Cristal
                    <input type="radio" name="ressource" value="deuterium" onChange={handleChangeRessources} />Deuterium
                </div>
            </div>
            <div>
                Taux: 
                <div>
                    Metal<input type="number" value= {taux.metal} onChange={handleChangeTaux} name="metal" className="inputTaux" step="0.1" min="1" max="3" />
                    Cristal<input type="number" value= {taux.cristal} onChange={handleChangeTaux} name="cristal" className="inputTaux" step="0.1" min="1" max="3" /> 
                    Deut<input type="number" value= {taux.deuterium} onChange={handleChangeTaux} name="deuterium" className="inputTaux" step="0.1" min="1" max="3" /> 
                </div>
            </div>
            Contre:
            <div>
                <input type="radio" name="vs" value= {taux.metal} onChange={handleChangeVs}  />Metal
                <input type="radio" name="vs" value= {taux.cristal} onChange={handleChangeVs}  />Cristal
                <input type="radio" name="vs" value= {taux.deuterium} onChange={handleChangeVs} />Deuterium
                <input type="radio" name="vs" value="mix" onChange={handleChangeVs} />Mix 
                <p>(Le mix fonctionne seulement pour le deuterium la valeur sera automatiquement considéré comme du deuterium)</p>
                {percentDisplay}
            </div>
            <button>Envoyer</button>
        </form>
        <h1>{result}</h1>
    </div>
    )
}


export default Trade;