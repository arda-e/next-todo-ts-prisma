import React from 'react'
import LoadingSVG from './Loading.svg'

const Loading = () => {
  return (
    <>
      <div className="flex h-screen grow flex-col items-center justify-center">
        <div
          id="loading"
          className="flex h-20 flex-col items-center justify-center"
        >
          <div className="animate-spin">
            <LoadingSVG className="amimate-spin fill-blue-700" />
          </div>
          <div>Loading...</div>
        </div>
      </div>
    </>
  )
}

export default Loading
