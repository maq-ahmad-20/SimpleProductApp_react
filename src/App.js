import { useState, useEffect } from 'react';
import './App.css';
import ProductForm from './Components/ProductFrom';

import DisplayProducts from './Components/displayProducts';


function App() {

  const [productData, setProductData] = useState([{

    id: "",
    name: "",
    price: "",
    categeory: ""
  }]);

  useEffect(() => {

    const electronicItem = JSON.parse(localStorage.getItem('ElectronicItems')) || [];
    const FoodItem = JSON.parse(localStorage.getItem('FoodItems')) || [];
    const skinItem = JSON.parse(localStorage.getItem('SkinCare')) || [];

    const total = [...electronicItem, ...FoodItem, ...skinItem]
    setProductData(total)

  }, [])




  const getSubmittedProductDetails = (product) => {

    setProductData((prevProdData) => {
      return [...prevProdData, product];
    })

    const prevDetails = JSON.parse(localStorage.getItem(product.categeory)) || [];
    prevDetails.push(product)

    localStorage.setItem(product.categeory, JSON.stringify(prevDetails))


  }
  const deleteListItem = (product) => {

    console.log(product)

    const getDataFromLocalStorage = JSON.parse(localStorage.getItem(product.categeory)) || [];

    const filteredData = getDataFromLocalStorage.filter(prod => prod.id !== product.id)



    localStorage.setItem(product.categeory, JSON.stringify(filteredData))
    const electronicItem = JSON.parse(localStorage.getItem('ElectronicItems')) || [];
    const FoodItem = JSON.parse(localStorage.getItem('FoodItems')) || [];
    const skinItem = JSON.parse(localStorage.getItem('SkinCare')) || [];

    const total = [...electronicItem, ...FoodItem, ...skinItem]
    setProductData(total)

  }


  return (
    <div className="App">
      <ProductForm getSubmittedProductDetails={getSubmittedProductDetails} />
      <DisplayProducts products={productData} deleteListItem={deleteListItem} />
    </div>
  );
}

export default App;
