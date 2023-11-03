import "./App.scss";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.jpg'},
              {name: 'Мужские Кроссовки Nike Air Max 270', price: 11999, imageUrl: '/img/sneakers/2.jpg'},
              {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 9999, imageUrl: '/img/sneakers/3.jpg'},
              {name: 'Кроссовки Puma X Aka Boku Future Rider', price: 20999, imageUrl: '/img/sneakers/4.jpg'},
              {name: 'Мужские Кроссовки Under Armour Curry 8', price: 11999, imageUrl: '/img/sneakers/5.jpg'},
              {name: 'Мужские Кроссовки Nike Kyrie 7', price: 8999, imageUrl: '/img/sneakers/6.jpg'},
              {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: 15999, imageUrl: '/img/sneakers/7.jpg'},
              {name: 'Мужские Кроссовки Nike LeBron XVIII', price: 12999, imageUrl: '/img/sneakers/8.jpg'}
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
        {arr.map(obj =>(
          <Card 
          title = {obj.name}
          price = {obj.price}
          imageUrl = {obj.imageUrl}
          />
        ))}
          
        </div>
      </div>
    </div>
  );
}

export default App;
