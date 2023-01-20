import Title from "./components/Title";
import flower from './assets/flower.png';

function App() {
  return (
    <div className="App">

      <Title image={flower}/>

      <nav>
        <ul className="nav-list">
          <li className='nav-link'>Softmax</li>
          <li className='nav-link'>SVM</li>
          <li className='nav-link'>Random Forest</li>
        </ul>
      </nav>



    </div>
  );
}

export default App;
