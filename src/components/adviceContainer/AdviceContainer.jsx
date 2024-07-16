import { useEffect, useState } from "react"
import { StyledAdviceContainer } from "./adviceContainer.styles"

const AdviceContainer=()=>{
    const[data,setData]=useState(null)
    const[click,setClick]=useState(false)
    console.log(data)
    useEffect(()=>{
        console.log('render')
        fetchData(setData)
    },[click])
    return(
        <>
            <div>
                <StyledAdviceContainer>
                {data ? (
                    <>
                        <h2>ADVICE #{data.slip.id}</h2>
                        <p>{data.slip.advice}</p>
                        <div>
                            <img src="./images/pattern-divider-mobile.svg" alt="" />
                        </div>
                        <div onClick={() => setClick(!click)}>
                            <img src="./images/icon-dice.svg" alt="" />
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                </StyledAdviceContainer>
            </div>
        </>
    )


   
} 
const fetchData= async setData=>{
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const json = await response.json();
        setData(json)
    } catch (error) {
        console.error("Error fetching data: ", error);
        setData(null);
    }
}
export default AdviceContainer