import React from 'react'
import LoadingSVG from './Loading.svg'

// TODO: Test loading component
const Loading = () => {
  return (
    <>
      <div
        id="loading"
        className="flex flex-col items-center justify-center h-20 bg-gray-100"
      >
        <div className="animate-spin">
          <LoadingSVG className="amimate-spin fill-blue-700" />
        </div>
        <div>Loading...</div>
      </div>
    </>
  )
}

export default Loading
