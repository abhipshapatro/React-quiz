import React from 'react'

export default function Date() {
  return (
    <div>
      <form>
        <div className="sm-flex">
            <input className='block w-full rounded-lg px-2 py-1 bg-darkGray text-white'
            type="date" name="date"  />

        </div>
      </form>
    </div>
  )
}
