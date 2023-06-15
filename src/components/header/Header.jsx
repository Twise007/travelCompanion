import React from 'react'
import { Autocomplete } from '@react-google-maps/api'

const Header = () => {
  return (
    <div className="navbar bg-sky-800 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Travel Companion</a>
      </div>
      <div className="flex-none gap-2">
        <h1>Explore new places</h1>
        {/* <Autocomplete> */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto outline-none glass placeholder:text-gray-600"
            />
          </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
}

export default Header