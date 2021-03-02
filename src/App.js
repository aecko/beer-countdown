import logo from './logo.svg';
import './css/App.css';
import CountdownContainer from './components/CountdownContainer';
import NavBar from './components/NavBar';
import CountdownValue from './components/CountdownValue';


function App() {
  return (
    <>
    <NavBar />
    <div className="AppGrid">
      <div className="Header">
        <CountdownContainer title='Beers in the park, with one mate' date='2021-03-08T00:00:00' color='#fff' backgroundColor='#d33f49' />
      </div>
      <div className="SideHeader">
        <CountdownContainer title='Beers in the park, with 5 mates' date='2021-03-29T00:00:00' color='#000' backgroundColor='#bf9bb5' />
      </div>
      <div className="Main1">
        <CountdownContainer title='Beers in a beer garden, with 5 friends' date='2021-04-12T00:00:00' color='#000' backgroundColor='#eff0d1' />
      </div>
      <div className="Main2">
        <CountdownContainer title='Beers in a pub or restaurant, with 5 friends ' date='2021-05-17T00:00:00' color='#000' backgroundColor='#77ba99' />
      </div>
      <div className="Main3">
        <CountdownContainer title='Beers everywhere, with all your mates' date='2021-06-21T00:00:00' color='#fff' backgroundColor='#262730' />
      </div>
    </div>
    </>
  );
}

export default App;

/*

*/
