import React, { useEffect, useState } from 'react';
import api from '../../services/Api';
import Card from '../Card'

function List (){

const [locations, setLocations] = useState([])

useEffect(() => {
  async function loadLocations() {
    const res = await api.get('/locations')

    setLocations(res.data)
  }

  loadLocations()
  
}, [])

    return (
    <>
      <div className="list-content"></div>
        <ul>
          {locations.map(location => (
            <Card key={location.name}  location={location}/>
          )
       
        )}</ul>
    </>
      );
}

export default List