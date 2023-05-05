import NavBar from './components/navbar/NavBar';
import React from 'react';
import '../src/components/styles/ListItensContents.css';
import '../src/components/styles/ItemListContainer.css';
/*import '../src/components/styles/Navbar.css';*/
import ListItensContents from './components/listItens/ListItensContents';
import ItensCount from './components/listItens/ItensCount';
import ItemListContainer from './components/catalogo/ItemListContainer';




function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer/>
        <section>
          {/*
            <ItemListContainer>
              <ItemList> --> terá um map
                <Item />
                <Item />
                <Item />
                <Item />
              </ItemList>
            </ItemListContainer>
          
          
          */}
        {/*<ListItensContents/> essa tag foi substituída pela tag <ItemListContainer/> que possui a promisse*/}
        </section>
        
        
    </div>
      
  );
}

export default App;