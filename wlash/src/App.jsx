import Carousel from "./components/Carousel";
import SlideEstudiante from "./components/SlideEstudiante";
import Slide0 from "./components/Slide0";
import Slide1 from "./components/Slide1";
import Slide2 from "./components/Slide2";
import Slide3 from "./components/Slide3";
import Slide4 from "./components/Slide4";
import Slide100 from "./components/Slide100";
import Slide101 from "./components/Slide101";
import Slide102 from "./components/Slide102";


export default function App() {
  return (
    <Carousel>
      
        <Slide100 />
     
      
        <Slide101 />
    
     
        <Slide102 />
      
        <Slide0 />
  
      <SlideEstudiante nombre="Santino Villagran">
        <Slide1 />
      </SlideEstudiante>

      <SlideEstudiante nombre="Jeremias Cueliche">
        <Slide2 />
      </SlideEstudiante>

      <SlideEstudiante nombre="Delfina Girard / Geronimo Sanabria">
        <Slide3 />
      </SlideEstudiante>
      <SlideEstudiante nombre="Antonella Cañete">
              <Slide4 />
            </SlideEstudiante>
    </Carousel>
  );
}
