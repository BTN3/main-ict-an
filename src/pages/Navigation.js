import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from './Logo';
import '../App.css';
import HamburgerIcon from '../assets/media/hamburger-icon.png';
import { useNavigate } from 'react-router-dom';
import logoKomora from '../assets/media/image.png'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [btn,setBtn] = useState(false);
  const navigate = useNavigate();
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const handleButtonLogin = () => {
  //   if( setBtn(!btn))
  //  {
  //  localStorage.removeItem('token');
  //  localStorage.removeItem('myPredavanja');
  //  localStorage.removeItem('myPredavanjaIDs')
    

  //  }
  //  else{
  //   navigate('../registrationfeesaccommodation/inserttoken')
  //  }
  // };
  const showPrijavaLink = true; // Change this based on your condition

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: menuOpen ? 'hsla(232, 87%, 98%, 0.8)' : 'hsla(232, 87%, 98%, 0.8)',
        height: menuOpen ? 'auto' : '120px',
      }}
      variant="dark"
      className={`modern-navbar sticky-top ${menuOpen ? 'expanded' : ''}`}
    >
      <Navbar.Brand href="/">
        <Logo alt="" width="30" height="30" className="d-inline-block align-top" type="file"  />
        Horizonti snage 
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleMenu} aria-controls="responsive-navbar-nav" className="menu">
        <img
          src={HamburgerIcon}
          style={{ width: '42px', height: '30px', backgroundColor: 'hsla(210, 70%, 50%, 0.8)' }}
          alt="Hamburger Menu"
          className={`hamburger-icon ${menuOpen ? 'opened' : ''}`}
        />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={`mr-auto ${menuOpen ? 'nav-open' : ''}`}>
          <Nav.Link href="/" className={`nav-link ${menuOpen ? 'nav-link-open' : ''}`}>
            Naslovna
          </Nav.Link>
          <NavDropdown title="O nama" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="/about">O nama</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about/introductionspeech">Pozivno pismo</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about/pozvanipredavaci">Pozvani predavači</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about/organizacija">Organizatori</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/about/photos">Fotografije</NavDropdown.Item>
          </NavDropdown>
          {/* Add more Nav.Link or NavDropdown items as needed */}
          <NavDropdown title="Kotizacije i oblici sudjelovanja" id="collasible-nav-dropdown">
           <NavDropdown.Item href="/registrationfeesaccommodation">Kotizacije i oblici sudjelovanja</NavDropdown.Item>
             <NavDropdown.Divider />
            <NavDropdown.Item href="/registrationfeesaccommodation/dataprotection">Politika privatnosti</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/registrationfeesaccommodation/formsofparticipation">
            Oblici sudjelovanja
             </NavDropdown.Item>
             <NavDropdown.Divider />
             {/* <NavDropdown.Item href="/registrationfeesaccommodation/inserttoken">
               Token - prijava na predavanja
             </NavDropdown.Item>                                                                      
             <NavDropdown.Divider /> */}
             {/* <NavDropdown.Item href="/registrationfeesaccommodation/lectureselectionpredb">
               Predbilježbe
             </NavDropdown.Item>
             <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="/registrationfeesaccommodation/createpredavanje">
               Stvori predavanje
            </NavDropdown.Item>
            <NavDropdown.Divider /> */}
          
             <NavDropdown.Item href="/registrationfeesaccommodation/popissazetaka">
               Popis sažetaka
             </NavDropdown.Item>
           </NavDropdown>

        </Nav>

        {/* Conditionally render "Prijava" link */}
        {showPrijavaLink && (
          <Nav className={`ml-auto ${menuOpen ? 'nav-open' : ''}`}>
            <Nav.Link
              href="/registrationfeesaccommodation/eventregistration"
              className={`nav-link ${menuOpen ? 'nav-link-open' : ''}`}
            >
              Prijava na konferenciju
            </Nav.Link>
          </Nav>
        )}
        {!menuOpen && (
 <img
 src={logoKomora}
 alt='fotka'
 style={{ width: '100px', height: '100px', marginLeft: 'auto' }}
 className="ml-auto d-none d-lg-block"

/>
)}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

