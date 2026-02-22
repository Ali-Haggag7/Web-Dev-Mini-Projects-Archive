import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import Cards from "./components/Cards";
import { items } from "./data";
import { useState } from "react";


function App() {

  const [itemsData, setItemsData] = useState(items)

  // get all category unique
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]
  console.log(allCategory)

  // filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items)
    }
    else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  // filter by search form
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body overflow-hidden">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory={allCategory} />
        <Cards itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
