import React from 'react'
import InvestCard from './InvestCard'
import Tab from './Tab'

export default function Content(props) {
  return (
    <div>
        <div className='row'>
            <hr style={{margin: "0"}}/>
            
            
            <Tab tabId={props.tabId} />

            <div className='col'>
                <div className='row h5 mt-3' style={{marginLeft: "10px"}}>
                  Documents
                </div>

                <div className='row mt-2' style={{border: "1px solid rgb(200, 200, 200)", marginLeft: "10px", width: "400px"}}>
                  <p className='col mt-1' href="" style={{padding: "10px", paddingLeft: "20px", paddingBottom: "0", textAlign: "left"}}>Zappfresh.zip</p>
                  <div className='col' style={{marginLeft: "220px", marginTop: "14px"}}>
                    <img height="20px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWE-CBjNBRirX6dAp1RkgK51ELEEGKoadtLF_eTKThQ&s" alt="" />
                  </div>
                </div>

                <div className='row mt-5'>
                  {[...Array(3)].map((x, id) => {
                    return (<div>
                      <InvestCard />
                    </div>)
                  })}
                </div>

                <div className='row mt-3' style={{marginLeft: "10px"}}>
                  Custom Offer? Click Here
                </div>
            </div>
        </div>
    </div>
  )
}
