import React from 'react'

export default function Details(props) {
    const fn = (x) => {
        // console.log("called")
        
        for(let i=1; i<=4; i++) {
            let btn = document.getElementById(`b${i}`)
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        }

        let btn = document.getElementById(`b${x}`)
        console.log(btn)
        btn.style.backgroundColor = "black"
        btn.style.color = "white"

        props.changeTab(x)

    }

  return (


    <div>
        <div className='col'>

            <div className='mt-5' style={{display: "flex", flexDirection: "inherit", alignItems: "left"}}>
                <div className='co'>
                    <button id="b1" onClick={() => {fn(1)}} className='btn' style={{backgroundColor: "black", color: "white", borderRadius: "50px", borderColor: "black", marginRight: "15px"}}>Pitch</button>
                </div>
                <div className='co' style={{marginRight: "0px"}}>
                    <button id="b2" onClick={() => {fn(2)}} className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black", marginRight: "15px"}}>Details</button>
                </div>
                <div className='co'>
                    <button id="b3" onClick={() => {fn(3)}} className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black", marginRight: "15px"}}>Discussions</button>
                </div>
                <div className='co' style={{marginRight: "800px"}}>
                    <button id="b4" onClick={() => {fn(4)}} className='btn' style={{backgroundColor: "white", color: "black", borderRadius: "50px", borderColor: "black", marginRight: "15px"}}>Updates</button>
                </div>
                
            </div>
            <hr className='mb-4'/>
            
        </div>
    </div>
  )
}
