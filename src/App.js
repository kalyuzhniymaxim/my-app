import React from "react";
import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


const arr = [];

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() =>{
    fetch('https://65452bfc5a0b4b04436dc2c8.mockapi.io/items').then(res =>{
    return res.json();
  }).then(json => {
    setItems(json)
  });
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header 
        onClickCart={() => setCartOpened(true)}
      />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
        {items.map(obj =>(
          <Card 
          title = {obj.name}
          price = {obj.price}
          imageUrl = {obj.imageUrl}
          onFavorite = {() => console.log("Добавили в закладки")}
          onPlus = {() => console.log("Нажал плюс")}
          />
        ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
