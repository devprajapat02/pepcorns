import React, {useState} from 'react'
import Dash from './Dash'
import Details from './Details'
import Title from './Title'
import Content from './Content'

export default function Main() {
  
  const [tabId, setTabId] = useState(1);

  const changeTab = async (id) => {
    await setTabId(id)
    console.log(`tabid changed to ${tabId}`)
  }

  return (


    <div>
        <div style={{width: "70%", marginLeft: "15%", marginTop: "25px"}}>
            <Title />
            <Dash />
            <Details changeTab={changeTab}/>
            <Content tabId={tabId}/>
        </div>
    </div>
  )
}
