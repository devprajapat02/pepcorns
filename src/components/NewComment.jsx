import React from 'react'

export default function NewComment() {
  return (
    <div className='col'>
        <div className='row'>
            New Comment
        </div>

        <div className='row'>
            <input type="text" />
        </div>

        <div className='row'>
            <button>Comment</button>
        </div>
    </div>
  )
}
