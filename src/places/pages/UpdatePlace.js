import React from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/Validators'
import { useForm } from '../../shared/hooks/form-hook'
import './PlaceForm.css'


const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Boston Common',
    description: 'Central public park in downtown Boston, Massachusetts',
    imageURL: 'https://cdn.traveltripper.io/site-assets/192_866_18602/media/2018-08-29-113233/small_boston-common-guide.jpg',
    address: '139 Tremont St, Boston, MA 02111',
    location: {
      lat: 42.355437,
      lng: -71.0662329
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
      lng: -71.0662329
    },
    creator: 'u2'
  }
]

const UpdatePlace = () => {
  const placeId = useParams().placeId
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true
      },
      description: {
        value: identifiedPlace.description,
        isValid: true
      }
    }, true
  )

  const placeUpdateSubmitHadler = (event) => {
    event.preventDefault()
    console.log(formState.inputs)
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
      <h2>Can't find place</h2>
      </div>
    )
  }

  return <form className="place-form" onSubmit={placeUpdateSubmitHadler}>

    <Input
      id="title"
      element="input"
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorText="Please enter a valid title"
      onInput={inputHandler}
      initialValue={formState.inputs.title.value}
      initialValid={formState.inputs.title.isValid}
    />
    <Input
      id="description"
      element="textarea"
      label="Description"
      validators={[VALIDATOR_MINLENGTH(5)]}
      errorText="Please enter a valid description (min 5 characters)"
      onInput={inputHandler}
      initialValue={formState.inputs.description.value}
      initialValid={formState.inputs.description.isValid}
    />
    <Button type="submit" disabled={!formState.isValid}>
      UPDATE PLACE
    </Button>
  </form>

}

export default UpdatePlace