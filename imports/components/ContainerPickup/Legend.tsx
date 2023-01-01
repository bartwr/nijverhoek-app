import { Meteor } from 'meteor/meteor';
import React, { useEffect, useState } from 'react';

const LegendItem = ({
  icon,
  title
}) => {
  return <div className="flex flex-wrap justify-center mr-2">
    <span className="flex flex-col justify-center">
      {icon}
    </span> <span className="
      flex flex-col justify-center
      font-bold
      uppercase
    " style={{fontSize: '10px'}}>
      {title}
    </span>
  </div>
}

export const Legend = () => {
  return (
    <div className="fixed z-2 bottom-0 left-0 w-full overflow-x-auto">
      <div className="Legend-inner bg-white max-w-fit mx-auto rounded-t-full rounded-8xl">
        <img src="/images/components/ContainerPickup/legend.png" alt="Container map"
          className="ContainerPickup-map w-full bg-white p-1 block mx-auto"
          style={{
            maxWidth: '390px'
          }}
        />
        <div className="bg-white p-1 w-full flex justify-center">
          <LegendItem icon="⚒️" title="Bouw&Sloop" />
          <LegendItem icon="🪵" title="Houtafval" />
          <LegendItem icon="🌴" title="Groenafval" />
          <LegendItem icon="◻️" title="Tegels" />
        </div>
      </div>
    </div>
  )
}
