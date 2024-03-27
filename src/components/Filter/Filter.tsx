import React from 'react'

const Filter = ({
  filterStr,
  filterData
}: {
  filterStr: string,
  filterData: (e: React.ChangeEvent<HTMLInputElement>) => void,
}) => {
  return (
    <div>
      <span className="text-pink-200">Filter players: </span>
      <input value={filterStr} onChange={filterData} type="text"/>
    </div>
  )
}

export default Filter
