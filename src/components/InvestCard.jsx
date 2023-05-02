import React from 'react'
import "./styles/InvestCard.css"

export default function InvestCard() {

    const fn = () => {
        console.log("clked!")
    }

  return (
    <div id='hovernow' style={{border: "1px solid rgb(230, 230, 230)", marginLeft: "10px", width: "400px"}} onClick={() => {console.log("clked")}}>
        <div className='col' style={{marginLeft: "30px"}}>
            <div className='row h2 mt-3' style={{fontWeight: "bold"}}>₹ 5000</div>
            
            <div className='row' style={{width: "350px"}}><hr /></div>

            <div className='row' style={{fontWeight: "bold", fontSize: "16px"}}>
                Rewards
            </div>

            <div className='row mt-2' style={{textAlign: "left", fontSize: "14px"}}>
                <ul>
                    <li>Be part of our growth sucess</li>
                    <li>Special offer deals for you on our platform</li>
                </ul>
            </div>

            <div className='row' style={{fontWeight: "bold", fontSize: "16px"}}>
                Terms and Conditions
            </div>

            <div className='row mt-2' style={{textAlign: "left", fontSize: "14px"}}>
                Community participants offer
            </div>

            <div className='row mt-3' style={{}}>
                <button style={{backgroundColor: "rgb(49, 33, 229)", color: "white", border: "none", width: "350px", height: "40px"}}>
                    Invest ₹5000
                </button>
            </div>

            <div className='row mt-3 mb-4' style={{textAlign: "left"}}>
                <div className='col-1' style={{marginLeft: "-10px", fontWeight: "bold"}}>CSOP</div>
                <div className='col' style={{marginLeft: "30px"}}>Limited(199 of 200 left)</div>
            </div>
        </div>

    </div>
  )
}
