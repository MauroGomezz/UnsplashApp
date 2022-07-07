import React, { useState } from 'react'

const Search = ({photosList, setPhotos}) => {
  const [nombre, setNombre] = useState();
    const handleChange = (e) => {
      setNombre(e.target.value)
      filtrar(e.target.value)
    };

    const filtrar = (termino) => {
      let resultado = photosList.filter((elemento) => {
        if (elemento.nombre.toString().toLowerCase().includes(termino.toLowerCase())) {
          return elemento;
        }
      });
      setPhotos(resultado)
    }

  return (
    <div>
        <form action="POST">
          <input className='form-control me-2' type="search" name="nombre" value={nombre} placeholder='Search by name' onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Search