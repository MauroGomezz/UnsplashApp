import React from 'react'

const FormDelete = ({state, setState, close, fetchApi, idImg}) => {

    const borrarRegistro = (id) => {
        fetch('http://localhost/empleados/?borrar='+id)
        .then(res => {
          console.log(res)
          fetchApi();
        } 
      );   
    }

  return (
    <div className='form-container' onClick={close}>
        <div className='card form-card'>
            <form action='/' className='card-body form' onSubmit={() => borrarRegistro(idImg)}>
                <div className="mb-3">
                    <h3 className='fw-light'>Are you sure?</h3>
                </div>
                <div>
                    <button type='button' className='btn btn-light' onClick={() => setState(!state)}>Close</button>
                    <button className='btn btn-danger'>Delete</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default FormDelete