// import Carousel from "react-bootstrap/Carousel";



// function CarouselComponent() {
//     return (
//       <div>
//       <Carousel >
//         <Carousel.Item style={{'height':"80vh"}}>
//           <img
//             className="d-block w-100 text-white active"
//             src="https://www.publicdomainpictures.net/pictures/480000/velka/banner-abstrakt-kunst-hintergrund-1670195980Uci.jpg"
//             alt="mental-health"
//           />
//           <Carousel.Caption>
//             <h3>Mental Health</h3>
//             <p>Bla</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{'height':"80vh"}}>
//           <img
//             className="d-block w-100"
//             // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkovec-zrak2.jpg')}
//             src="https://www.publicdomainpictures.net/pictures/470000/velka/banner-abstrakt-textur-hintergrund-1665436199id1.jpg"
//             alt="mental-health 2"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{'height':"80vh"}}>
//           <img
//             className="d-block w-100"
//             // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkovec-zrak2.jpg')}
//             src="https://c1.wallpaperflare.com/preview/504/588/842/waterfall-nature-water-croatia.jpg"
//             alt="mental-health 2"
//           />
  
//           <Carousel.Caption>
//             <h3>Second slide label</h3>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item style={{'height':"80vh"}}>
//           <img
//             className="d-block w-100"
//             // src={require('C:\\Users\\misla\\web-jelk\\src\\assets\\jelkoveczrak.jpg')}
//             src="https://www.picpedia.org/chalkboard/images/mental-health-treatment.jpg"
//             alt="Third slide"
//           />
  
//           <Carousel.Caption>
//             <h3>Third slide label</h3>
//             <p>
//               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//             </p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
     
//       </div>
//     );
//   }
  
//   export default CarouselComponent;
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css"; // Import a CSS file for custom styling
import photo1 from '../assets/media/1.konferencija/120e013d-c56b-4472-a9a8-8eaa3d8389e8.jpg'
import photo2 from '../assets/media/1.konferencija/1e3f6c05-b47a-4a9e-a08c-5b7d99425d66.jpg'
import photo3 from '../assets/media/1.konferencija/22ce4a0a-e1de-422d-96bd-c574edc637d2.jpg'
import photo4 from '../assets/media/1.konferencija/2b7fd45e-8a37-42a5-abb3-ce46ff54e462.jpg'
import photo5 from '../assets/media/1.konferencija/2f845c60-2372-461a-8965-a11fb4cc5bd6.jpg'
import photo6 from '../assets/media/1.konferencija/3d589d31-acdf-42c2-b927-2c6dc336eef6.jpg'
import photo7 from '../assets/media/1.konferencija/3d659cea-b4fe-48e3-bafb-a631690e279f.jpg'
import photo8 from '../assets/media/1.konferencija/3f4c0a2e-2d9f-451b-8513-ee7ed4eac26a.jpg'
import photo9 from '../assets/media/1.konferencija/Boris Jokić.jpg'
import photo10 from '../assets/media/1.konferencija/545f0ca7-1a12-4c0f-a037-e21c078fdc81.jpg'
import photo11 from '../assets/media/1.konferencija/7398240a-d726-4e8a-b628-6857161df364.jpg'
import photo12 from '../assets/media/1.konferencija/75eca869-f680-45a6-8484-ebce378b82ee.jpg'

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo1}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo5}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo6}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo7}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo8}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo9}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo10}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo11}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo12}
            alt="Mental Health"
          />
          <Carousel.Caption>
            {/* <h3>Mental Health</h3>
            <p>Bla</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo4}
            alt="Mental Health 2"
          />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo2}
            alt="Mental Health 3"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={photo3}
            alt="Mental Health 3"
          />
          <Carousel.Caption>
            {/* <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
