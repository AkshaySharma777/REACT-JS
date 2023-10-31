import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import Ex3 from './components/Ex3';
import Ex4 from './components/Ex4';

function App() {
  return (
   <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="bg-primary text-center">THIS IS APP COMPONENT (THIS IS PARENT COMPONENT)</h1>
      </div>
    </div>
    <Ex1/>
    <Ex2/>
    <Ex3/>
     <Ex4/>
   </div>
  );
}

export default App;
