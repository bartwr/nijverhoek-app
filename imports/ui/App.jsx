import React, {useEffect} from 'react';
import uuid from 'uuid';

export const App = ({
  children
}) => {
  useEffect(() => {
    let myUuid;

    const uuidFromLocalStorage = localStorage.getItem('SLOOPHOEK__uuid');
    if(uuidFromLocalStorage) {
      myUuid = uuidFromLocalStorage;
    } else {
      myUuid = uuid.v4()
      localStorage.setItem('SLOOPHOEK__uuid', myUuid);
    }
  }, []);

  return <div className="max-w-2xl mx-auto h-full">
    {children}
  </div>
}
