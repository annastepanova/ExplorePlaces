import React from 'react'
import PlaceList from '../components/PlaceList'

const UserPlaces = () => {

  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Boston Common',
      description: 'Central public park in downtown Boston, Massachusetts',
      imageURL: 'https://cdn.traveltripper.io/site-assets/192_866_18602/media/2018-08-29-113233/small_boston-common-guide.jpg',
      address: '139 Tremont St, Boston, MA 02111',
      location: {
        lat: 42.355437,
        long: -71.0662329
      },
      creator: 'u1'
    },
    {
      id: 'p1',
      title: 'Boston Common',
      description: 'Central public park in downtown Boston, Massachusetts',
      imageURL: 'https://cdn.traveltripper.io/site-assets/192_866_18602/media/2018-08-29-113233/small_boston-common-guide.jpg',
      address: '139 Tremont St, Boston, MA 02111',
      location: {
        lat: 42.355437,
        long: -71.0662329
      },
      creator: 'u1'
    }
  ]



  return (
    <PlaceList items={DUMMY_PLACES}/>
  )

}

export default UserPlaces
