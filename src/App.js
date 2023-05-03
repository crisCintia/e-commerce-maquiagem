import NavBar from './components/navbar/NavBar';
import React from 'react';
import '../src/components/styles/ListItensContents.css';
/*import '../src/components/styles/Navbar.css';*/
import ListItensContents from './components/listItens/ListItensContents';
import ItensCount from './components/listItens/ItensCount';




function App() {
  return (
    <div className="App">
        <NavBar/>
        <section>
        <ListItensContents/>

        <ItensCount stock={10} initial={1}/>

        </section>
        
        
    </div>
      
  );
}

export default App;