import React from 'react'
import NoDataSVG from './NoData.svg'

const NoData = () => {
  return (
    <>
      <div
        id="no-data-container"
        className="flex grow flex-col items-center justify-center gap-2"
      >
        <NoDataSVG />
        <p className="text-sm font-normal">No data found</p>
      </div>
    </>
  )
}

export default NoData
