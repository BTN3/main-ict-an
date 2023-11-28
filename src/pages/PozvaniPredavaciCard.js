// import React from 'react';
// import { Card, Row, Col } from 'react-bootstrap';
// import '../FeesStyle.css'

// const PozvaniPredavaciCard = ({ title, description, photo, cv }) => {
//   return (
//     <Row className='mb-4'>
//       <Col md={2}>
//         <div  style={{
//           width: '100%',
//           borderRadius: '50%',
//           overflow: 'hidden',
//           position: 'relative',
//           paddingTop: '100%',
//         }}>
//           <img 
//             src={photo} 
//             alt='Predavač' 
//             style={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%) scale(1)',
//               maxWidth: '70%',
//               maxHeight: '70%',
//               width: 'auto',
//               height: 'auto',
//               transition: 'transform 0.3s ease-in-out',
//             }} 
//             onMouseOver={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.3)'}
//             onMouseOut={(e) => e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'}
//           />
//         </div>
//       </Col>
//       <Col md={10}>
//         <Card>
//           <Card.Body className='custom-div' style={{color:'white'}}>
//             <Card.Title>{title}</Card.Title>
//             <Card.Text>{description}</Card.Text>
//             <Card.Text className='text-muted'>
//               Datum
//               <iframe
//                 title='Zivotopis'
//                 src={cv}
//                 width='100%'
//                 height='500px'
//                 style={{ border: 'none' }}
//               />
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

// export default PozvaniPredavaciCard;
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../FeesStyle.css';

const PozvaniPredavaciCard = ({ title, subtitle, description, photo, cv }) => {
  return (
    <Row className='mb-4'>
      <Col md={12}>
        <Card>
          <Card.Body className='custom-div' style={{ color: 'white' }}>
            <Row>
              <Col md={3}>
                <div
                  style={{
                    width: '100%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    position: 'relative',
                    paddingTop: '100%',
                  }}
                >
                  <img
                    src={photo}
                    alt='Predavač'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%) scale(1)',
                      maxWidth: '150%',
                      maxHeight: '150%',
                      width: 'auto',
                      height: 'auto',
                      transition: 'transform 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.3)')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)')
                    }
                  />
                </div>
              </Col>
              <Col md={9}>
                <Card.Title style={{fontSize:'23px' ,color:'orange'}}>{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
                <Card.Text>{description}</Card.Text>
                {/* <Card.Text className='text-muted'>
                  28.studenog 2023.                  <iframe
                    title='Zivotopis'
                    src={cv}
                    width='100%'
                    height='500px'
                    style={{ border: 'none' }}
                  />
                </Card.Text> */}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default PozvaniPredavaciCard;

