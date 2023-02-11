import React from 'react'

import callcalling from "../Assets/callcalling.png";
import house2 from "../Assets/house2.png";

const Footer = () => {
    return (
      <div className='bg-[url("landingBg2.png")] px-10 pt-10' id=''>
        <div className="text-sm text-gray-200 flex flex-col gap-5 md:flex-row md:items-center justify-between  py-5 border-t">
          <div className="flex items-center gap-2">
            <img src={house2} alt="" />
            <p>
              2nd Floor, The Garnet Building, KM14
              <br />
              Lekki Epe Expressway, Lagos, Nigeria.
            </p>
          </div>
          <h1>Loyalbaze is almost here.</h1>
          <div className="flex items-center gap-2">
            <img src={callcalling} alt="" />
            <p>+234 903 618 9485</p>
          </div>
        </div>
      </div>
    );
}

export default Footer