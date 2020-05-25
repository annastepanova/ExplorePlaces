import React, { useRef } from 'react'
import Button from './Button'



const ImageUpload = (props) => {
  const fileAttachRef = useRef()

  const attachedHandler = event => {
    console.log(event.target)

  }

  const attachImageHandler = () => {
    fileAttachRef.current.click()
  }

  return (
    <div className="form=control">
      <input 
        id={props.id} 
        ref={fileAttachRef}
        style={{display: 'none'}} 
        type="file" 
        onChange={attachedHandler}
        accept=".jpg,.jpeg,.png"
      />
      <div className={`image_upload ${props.center && 'center'}`}>
        <div className="image_upload__preview">
          <img src="" alt="preview"/>
        </div>
        <Button type="button" onClick={attachImageHandler}>ATTACH IMAGE</Button>
      </div>

    </div>
  )

}

export default ImageUpload
