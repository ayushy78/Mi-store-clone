import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {  BrowserRouter, BrowserRouter as Router,Route } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu  from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
function App() {
  return (
      <Router>
          <PreNavbar/>
          <Navbar/> 
          <Slider start={data.banner.start}/>
          <Offers offer= {data.offer}> </Offers>
          <Heading text={"Star Products"}></Heading>
          <StarProduct starProduct={data.starProduct}/>
          <Heading text="HOT ACCESSORIES" />
          <HotAccessoriesMenu />
          <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
          <Heading text={"Product Reviews"}></Heading>
          <ProductReviews productReviews={data.productReviews}/>
          <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      </Router>  
  );
}

export default App;
