
import './style.css';
import Back from './img/Back.jpg'
function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title">Mohammed Elhasumi</h1>
      <br />
      <img src="/Front.jpg" height={600} width={400} />
      <br />
      <img src={Back} alt="" height={600} width={400} />
      
    </div>
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}

export default App;
