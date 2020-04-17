import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from '../components/PlaceItem'
import './PlaceList.css'


const PlaceList = (props) => {

  if (props.items.length === 0) {
    return (
    <div className="place-list center">
      <Card>
        <h2>No places found. May be create one?</h2>
        <button>Share a place</button>
      </Card>
    </div>
    )
  }

  return (
    <ul className="place-list">
      {props.items.map(place => {
        return <PlaceItem 
                key={place.id} 
                id={place.id} 
                image={place.imageURL} 
                title={place.title} 
                description={place.description} 
                address={place.address} 
                coordinates={place.location}
                creatorId={place.creator} />
      })}
    </ul>
  )
}

export default PlaceList