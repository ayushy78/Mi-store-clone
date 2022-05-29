import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Offer from "./components/Offer.js"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
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
          <Route exact path="/music">
       <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />
       </Route>
      </Router>  
  );
}

export default App;
