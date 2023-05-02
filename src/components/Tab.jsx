import React from 'react'
import Pitch from './Pitch'
import DetailsTab from './DetailsTab'
import Discussion from './Discussion'
import Updates from './Updates'

export default function Tab(props) {
  if (props.tabId == 2) {
      return (
      <DetailsTab />
    )
  }

  if (props.tabId == 3) {
    return (
        <Discussion />
    )
  }

  if (props.tabId == 4) {
    return (
        <Updates />
    )
  }

  return (
    <Pitch />
  )
}
