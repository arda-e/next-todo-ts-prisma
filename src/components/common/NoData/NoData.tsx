import React from 'react'
import NoDataSVG from './NoData.svg'

const NoData = () => {
  return (
    <>
      <div
        id="no-data-container"
        className="flex flex-col gap-2 grow justify-center items-center"
      >
        <NoDataSVG />
        <p className="text-sm font-normal">No data found</p>
      </div>
    </>
  )
}

export default NoData
