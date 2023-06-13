import './App.css'
import Mountain from './components/mountain';

function App() {
  const mountains = [
    {
      id:1,
      nama : "Merbabu",
      gambar : "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQlZ8sLYsU88KthuZQE-l6mFxCh6ZOlDgLTVrfx1SmFA0NBVNIo_cfxzgPAXadR8Bns",
      ketinggian : "3.145 m",
      deskripsi : "Gunung Merbabu adalah gunung api yang bertipe Stratovulcano yang terletak secara geografis pada 7,5° LS dan 110,4° BT. ",
    },
    {
      id:2,
      nama : "Papandayan",
      gambar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzT3_bwCq1goAQYbFENEbN8SCKr4SDDYCizB3UescbE-2ArY1TLyWiK1Wtc5zBKDFAJoQ&usqp=CAU",
      ketinggian : "2.665 m",
      deskripsi : "Gunung Papandayan adalah gunung api stratovolcano yang terletak di Kabupaten Garut, Jawa Barat, tepatnya di Kecamatan Cisurupan. ",
    },
    {
      id:3,
      nama : "Bromo",
      gambar : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg/420px-Mount_Bromo_at_sunrise%2C_showing_its_volcanoes_and_Mount_Semeru_%28background%29.jpg",
      ketinggian : "2.329 m",
      deskripsi : "Gunung Bromo atau juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia.",
    },
    
  ]

  return (
    <div>
      {
        mountains.map((item,index)=>{
          return(
            <Mountain 
              key={index} 
              nama={item.nama} 
              gambar={item.gambar} 
              ketinggian={item.ketinggian} 
              deskripsi={item.deskripsi} 
            />
          )
        })
      }
    </div>
  )
}

export default App;
