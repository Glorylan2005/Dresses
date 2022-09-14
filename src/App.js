import { useState } from 'react';
import './App.css';
import { data } from './data';


function App() {

  const [dress, setDress] = useState(0);
  const {id, dressName, description, image, brand, price, rate} = data[dress];

  const previousDress = () => {
    setDress ((dress=> {
      dress--;
      if (dress<0) {
        return data.length -1;
      }
      return dress;
    }))
  }

  const nextDress = () => {
    setDress ((dress=> {
      dress++;
      if (dress> data.length -1) {
        dress=0;
      }
      return dress;
    }))
  }
  
  return (
    <div className="App">
      <div className='container'>
        <h1>Bestsellers in 2022</h1>
      </div>
      
      <div className='container two' key={id}>

        <div className='boxOne'>
          <img src={image} alt="dress" width="300px"/>
        </div>

        <div className='boxTwo'>
          <div>
            <h2>{dressName}</h2>
          </div>
          
          <div>
            <p>{rate}</p>
          </div>

          <div>
            <p>Brand: 💖 <b>{brand}</b></p>
          </div>

          <div>
            <p>{description}</p>
          </div>

          <div>
            <p className='price'>{price}</p>
          </div>

          <div className='container three'>
        <button onClick={previousDress}>🠠 Previous</button>
        <button onClick={nextDress}>Next 🠢</button>
      </div>
        </div>

      </div>

      



    </div>
  );
}

export default App;
