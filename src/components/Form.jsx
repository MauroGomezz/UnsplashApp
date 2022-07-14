import React, { useState } from 'react'

const Form = ({state, setState, close}) => {
    const [nombre, setNombre] = useState();
    const [imagen, setImagen] = useState();

    const cambioValor = (e) => {
        switch (e.target.name) {
            case "nombre":
                setNombre(e.target.value) 
                break;
            case "imagen":
                setImagen(e.target.value) 
                break;
            default:
                break;
        }
    };

    const enviarDatos = () => {
        let datosEnviar = {nombre,imagen};
         fetch('https://api-maurogomez.herokuapp.com/?insertar', {
                method:"POST",
                body:JSON.stringify(datosEnviar)
            })
            .then(res => console.log(res));
        }

  return (
    <div className='form-container' onClick={close}>
        <div className='card form-card'>
            <form action="POST" className='card-body form' onSubmit={enviarDatos}>
                <h3 className='fw-light'>Add a new photo</h3>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Tagline</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Story Tagline" name='nombre' onChange={cambioValor} value={nombre}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Image URL</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Image Url" name='imagen' onChange={cambioValor} value={imagen}/>
                </div>
                <div>
                    <button type='button' className='btn btn-light' onClick={() => setState(!state)}>Close</button>
                    <button className='btn btn-success'>Upload</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form