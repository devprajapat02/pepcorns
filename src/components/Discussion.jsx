import React, {useState} from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import NewComment from './NewComment';


export default function Discussion() {

    const [trigger, setTrigger] = useState(false)

  return (
    <div className='col-8' style={{border: "1px solid rgb(200, 200, 200)", borderTop: "none"}}>
                <div className='row mt-3'>
                  <div className='col-2 h5'>
                    Discussion
                  </div>
                  <Popup trigger=
                {
                  <div className='col-2 mb-2' style={{marginLeft: "580px"}}>
                    <button onClick={() => {setTrigger(true)}} style={{backgroundColor: "rgb(49, 33, 229)", color: "white", border: "none", fontSize: "14px", height: "30px"}} >Add Comment</button>
                  </div>
                  }
                  modal nested>
                  {
                      close => (
                        <div className=''>
                            <div className='col' style={{marginLeft: "100px", width: "750px"}}>
                        <div className='row h5 mt-4'>
                            New Comment
                        </div>

                        <div className='row mt-4' style={{border: "none"}}>
                            <textarea name="" id="" cols="10" rows="5"></textarea>
                        </div>

                        <div className='row mt-4 mb-4' style={{width: "120px", height: "40px"}}>
                            <button onClick={() => {close()}} style={{border: "none", borderRadius: "10px", backgroundColor: "rgb(150, 150, 150)", color: "white", boxShadow: "0 5px 15px rgba(197, 197, 197, 0.785)"}}>Comment</button>
                        </div>
                    </div>
                          </div>
                      )
                  }
              </Popup>
                </div>

                <div className='row mt-5'>
                    <img height="250px" src="https://app.pepcorns.com/assets/img/145.svg" alt="" />
                </div>

                <div className='row mt-4'>
                <h6>No Comments Found. Be the first one to comment!</h6>
                </div>


                
                
            </div>
  )
}
