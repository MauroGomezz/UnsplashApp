import { useEffect, useState } from 'react';
import svg from './assets/my_unsplash_logo.svg';
import Card from './components/Card';
import Form from './components/Form';
import Search from './components/Search';

function App() {
  const [photos, setPhotos] = useState([]);
  const [photosList, setPhotosList]= useState([]);

  const fetchApi = async () => {
      const temp = await fetch('https://api-maurogomez.herokuapp.com/')
      .then(res => res.json());
      setPhotos(temp);
      setPhotosList(temp)
  }

  useEffect(() => {
      fetchApi();
  }, [])

  const [modalState, setModalState] = useState(false);
  const closeModal = (e) => {
    if(e.target.className === 'form-container') {
      setModalState(!modalState)
    }
  };

  return (
    <div className="App">
      <nav className='d-flex justify-content-between p-3'>
        <div className='d-flex gap-5'>
          <img src={svg} alt="" />
          <Search photosList={photosList} setPhotos={setPhotos}/>
        </div>
        <button className='btn btn-success' onClick={() => setModalState(!modalState)}>Add a photo</button>
      </nav>
      {modalState ? <Form setState={setModalState} state={modalState} close={closeModal} fetchApi={fetchApi}/> : ""}
      <Card photos={photos} />
    </div>
  );
}

export default App;
