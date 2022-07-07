import React from 'react'
import { useState } from 'react'
import FormDelete from './FormDelete';


const Card = ({photos, fetchApi}) => {
  const [modalState, setModalState] = useState(false);
  const [idImg, setIdImg] = useState();

  const closeModal = (e) => {
    if(e.target.className === 'form-container') {
      setModalState(!modalState)
    }
  };

  return (
    <div className='gallery '>
        {photos.map(imagen => (
            <div key={imagen.id} className="img_container">
                <img src={imagen.imagen} alt={imagen.nombre} />
                <div className='label'>
                    <div className='w-100 btn-container'>
                        <button className='btn btn-outline-danger' onClick={()=> {
                            setModalState(!modalState)
                            setIdImg(imagen.id)
                          }}>Delete</button>
                    </div>
                    <h2>{imagen.nombre}</h2>
                </div>
            </div>
        ))}
        {modalState ? <FormDelete setState={setModalState} state={modalState} close={closeModal} fetchApi={fetchApi} idImg={idImg}/> : ""}
    </div>
  )
}

export default Card