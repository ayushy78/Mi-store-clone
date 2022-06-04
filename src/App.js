import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
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
          <Routes>
            <Route path ='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
            </Route>
            <Route path ='/smartDevice' element={<HotAccessories music={data.hotAccessories.smartDevice} musicCover={data.hotAccessoriesCover.smartDevice}/>}>
            </Route>
            <Route path ='/home' element={<HotAccessories music={data.hotAccessories.home} musicCover={data.hotAccessoriesCover.smartDevice}/>}>
            </Route>
            <Route path ='/lifestyle' element={<HotAccessories music={data.hotAccessories.lifeStyle} musicCover={data.hotAccessoriesCover.lifeStyle}/>}>
            </Route>
            <Route path ='/mobileAccessories' element={<HotAccessories music={data.hotAccessories.mobileAccessories} musicCover={data.hotAccessoriesCover.mobileAccessories}/>}>
            </Route>
          </Routes>
          <Heading text={"Product Reviews"}></Heading>
          <ProductReviews productReviews={data.productReviews}/>
          <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      </Router>  
  );
}

export default App;
