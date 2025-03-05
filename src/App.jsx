import { useState } from 'react'

import './App.css'

function App() {

  const data = [
    { image: "https://picsum.photos/200/300?random=1", title: "Imagen 1" },
  ]
  const [images, setImages] = useState(data)
  const [allImages, setAllImages] = useState(data)

  const addImage = () => {
    let newImage = {
      image: `https://picsum.photos/200/300?random=${allImages.length + 1}`, title: `Imagen ${allImages.length + 1} `
    }
    setImages([...allImages, newImage])
    setAllImages([...allImages, newImage])
  }

  const searchImage = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setImages(allImages);
    } else {
      const filtered = allImages.filter(entry =>
        Object.values(entry).some(val =>
          typeof val === "string" && val.toLowerCase().includes(searchTerm)
        )
      );
      setImages(filtered);
    }
  }

  return (
    <>
      <div className='flex flex-col justify-center items-center mt-32'>
        <div className='flex gap-5'>
          <button className='bg-blue-500 px-5 py-3 text-white rounded-full cursor-pointer hover:bg-blue-400 transition-all' onClick={addImage}>Agregar</button>
          <input placeholder='Buscar' className='w-96 py-2 px-2 border-2 border-gray-300' onChange={(e) => searchImage(e)} />
        </div>

        <div className='flex gap-5 mt-10'>
          {images.map((myImage, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center'>
                <img src={myImage.image} alt={myImage.title} className='w-52 h-52 object-fill' />
                <p className='text-black text-lg mt-6'>{myImage.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
