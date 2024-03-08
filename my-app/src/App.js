import Navbar from './components/Navbar';
import './App.css';
import StoreInfo from './components/StoreInfo';
import Information from './components/information';
import ImagesInfo from './components/ImagesInfo';
import StickyHeader from './components/StickyHeader';
import PhoneSection from './components/PhoneSection';




function App({val}) {

 
   
  return (
    <div className="App">
     
          <Navbar/>
          <StickyHeader/>

         <div id='img' >
         <ImagesInfo/>
         <PhoneSection/>
         </div>
          
          
      
       
    </div>
  );
}

export default App;