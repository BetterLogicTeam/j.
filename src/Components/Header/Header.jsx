import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillHandbagFill } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./Header.css";
import { Badge } from "@mui/material";

function Header({ addcart }) {
  // const [show, setShow] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [list, setlist] = useState();

  console.log("Props", addcart);

  const getApi = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${addcart}`);
      console.log("result", res.data);
      setlist(res.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    getApi();
  });

  return (
    <div>
      <div className="first">
        <span>Happy Independence Day!</span>
        <div className="first_j">
          <span>J. introduces Watan ki Khushboo</span>
          <div className="first_adio">
            <audio controls>
              <source src="ay_watan.wav" type="audio/wav" />
            </audio>
          </div>
        </div>
      </div>
      <Navbar className="nav" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand className="brand" href="#home">
            WELCOME TO J.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto flag">
              <Nav.Link className="lenk" href="#features">
                SIGN IN <img src="pak-flag.webp"></img>
              </Nav.Link>
              <Nav.Link className="lenk" href="#pricing">
                TRACKING INFO
              </Nav.Link>
              <NavDropdown
                className="flag2 lenk"
                title="PKR"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.2">
                  <img src="AUD.webp" />
                  AUD
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="GBP.webp" /> GBP
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="CAD.webp" /> CAD
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="EUR.webp" /> EUR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="INR.webp" /> INR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="JPY.webp" /> JPY
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="SAR.webp" /> SAR
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="SEK.webp" /> SEK
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="CHF.webp" /> CHF
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="USD.webp" /> USD
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <img src="AED.webp" /> AED
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link className="bag lenk" href="#deets">
                <BsFillHandbagFill
                  onClick={() => setShow(true)}
                ></BsFillHandbagFill>

                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      Custom Modal Styling
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body></Modal.Body>
                </Modal>
              </Nav.Link> */}
              {/* BsFillHandbagFill */}
              <Nav.Link>
                {/* <a className="user px-2" onClick={handleShow}>
                  <BsFillHandbagFill />
                </a> */}
                <Badge
                  badgeContent={addcart}
                  color="primary"
                  onClick={handleShow}
                >
                  <BsFillHandbagFill
                    color="action"
                    style={{ fontSize: "30px" }}
                  />
                </Badge>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="end"
                  responsive=""
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                      <h3>Customer Login:</h3>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="d">
                    {/* <Card style={{ width: '6rem' }}> */}
                    <img
                      style={{ width: "6rem", height: "6rem" }}
                      variant="top"
                      src="men1.webp"
                    />

                    <div>
                      <p className="para2">
                        GREY POLYESTER VISCOSE KAMEEZ SHALWAR | JJKS-A-44018
                      </p>
                      <p className="para2">SIZE: MEDIUM</p>
                      <h6 className="six">PKR6,490.00</h6>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </Nav.Link>

              {/* <Nav.Link className="searc lenk" eventKey={2} href="#memes">
                <GrSearch onClick={() => setShow(true)}></GrSearch> Search
                <Modal
                  show={show}
                  onHide={() => setShow(false)}
                  dialogClassName="modal-90w"
                  aria-labelledby="example-custom-modal-styling-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      <input
                        id="search"
                        type="text"
                        name="q"
                        value=""
                        placeholder="Search 'kurti' for demo search..."
                        class="input-text vertically-black"
                        role="combobox"
                        aria-haspopup="false"
                        aria-autocomplete="both"
                        autocomplete="off"
                      />
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="search"></Modal.Body>
                </Modal>
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="" collapseOnSelect expand="lg" bg="" variant="">
        <Container className="nav2">
          <Navbar.Brand className="brand2" href="#home">
          <img src="logo.webp" alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <div className="logo">
        <a href="">
          <img src="logo.webp" alt="" />
        </a>
      </div>

      <div className="full2">
        <header class="dark">
          <nav role="navigation">
            <a href="javascript:void(0);" class="ic menu" tabindex="1">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </a>
            <a href="javascript:void(0);" class="ic close"></a>
            <ul class="main-nav">
              <li class="top-level-link">
                <a class="mega-menu">
                  <span class="mm-subcategory-title underline-megamenu ">
                    New Arrivals
                  </span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <ul class="sub-menu-lists">
                        <li>
                          <a>Welcom To J.</a>
                        </li>
                        <li>
                          <a className="lenke">
                            SIGN IN <img src="pak-flag.webp"></img>
                          </a>
                        </li>
                        <li>
                          <a>TRAKING INFO</a>
                        </li>
                        <li>
                          <NavDropdown
                            className="flag2 lenke"
                            title="PKR"
                            id="collasible-nav-dropdown"
                          >
                            <NavDropdown.Item href="#action/3.2">
                              <img src="AUD.webp" />
                              AUD
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="GBP.webp" /> GBP
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="CAD.webp" /> CAD
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="EUR.webp" /> EUR
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="INR.webp" /> INR
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="JPY.webp" /> JPY
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="SAR.webp" /> SAR
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="SEK.webp" /> SEK
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="CHF.webp" /> CHF
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="USD.webp" /> USD
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                              <img src="AED.webp" /> AED
                            </NavDropdown.Item>
                          </NavDropdown>
                        </li>
                      </ul>
                      <a href="">
                        <h6 class="sub-menu-head fs-6">AZADI FASHION'22</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>WOMEN KURTI</a>
                        </li>
                        <li>
                          <a>TEEN GIRLS</a>
                        </li>
                        <li>
                          <a>KID GIRLS</a>
                        </li>
                        <li>
                          <a>MEN SHALWAR KAMEEZ</a>
                        </li>
                        <li>
                          <a>MEN KURTA</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">
                          MONOCHROME COLLECTION
                        </h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>UNSTITCHED</a>
                        </li>
                        <li>
                          <a>WOMEN KURTI</a>
                        </li>
                        <li>
                          <a>GIRL KURTI</a>
                        </li>
                        <li>
                          <a>MEN KURTA</a>
                        </li>
                        <li>
                          <a>MEN SHALWAR KAMEEZ</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">
                          WOMEN - FESTIVE AFFAIR'22
                        </h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>UNSTITCHED COLLECTION</a>
                        </li>
                        <li>
                          <a>WOMEN KURTI</a>
                        </li>
                        <li>
                          <a>GIRLS KURTI</a>
                        </li>
                        <li>
                          <a>MEN KURTA</a>
                        </li>
                        <li>
                          <a>MEN SHALWAR KAMEEZ</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">
                          MEN - FESTIVE CELEBRATION'22
                        </h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR COLLECTION</a>
                        </li>
                        <li>
                          <a>KURTA COLLECTION</a>
                        </li>
                        <li>
                          <a>WAISTCOAT COLLECTION</a>
                        </li>
                        <li>
                          <a>FOOTWEAR COLLECTION</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">
                          YOUNGSTERS - FESTIVE CELEBRATION'22
                        </h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>TEEN GIRLS</a>
                        </li>
                        <li>
                          <a>TEEN BOYS</a>
                        </li>
                        <li>
                          <a>KID GIRLS</a>
                        </li>
                        <li>
                          <a>KID BOYS</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2 men_4">
                      <img src="Men_4.webp" alt="" />
                    </div>
                  </div>
                </div>
              </li>

              <li class="top-level-link">
                <a class="mega-menu">
                  <span>ONLINE EDITION</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div className="col-1"></div>
                    <div class="col-md-3 col-lg-3 col-sm-3 men_4">
                      <img src="wmen.webp" alt="" />
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">WOMAN</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>UNSTITCHED COLLECTION</a>
                        </li>
                        <li>
                          <a>STITCHED COLLECTION</a>
                        </li>
                        <li>
                          <a>KURTI COLLECTION</a>
                        </li>
                        <li>
                          <a>MODEST WEAR(ABAYA)</a>
                        </li>
                        <li>
                          <a>SHAWLS</a>
                        </li>
                        <li>
                          <a>FOOTWEAR</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">MAN</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR</a>
                        </li>
                        <li>
                          <a>KURTA</a>
                        </li>
                        <li>
                          <a>JUBBA-THOBE</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">YOUNGSTER</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>TEEN GIRL</a>
                        </li>
                        <li>
                          <a>TEEN BOY</a>
                        </li>
                        <li>
                          <a>KID GIRL</a>
                        </li>
                        <li>
                          <a>KID BOY</a>
                        </li>
                        <li>
                          <a>INFANT GIRL</a>
                        </li>
                        <li>
                          <a>INFANT BOY</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="top-level-link">
                <a class="mega-menu">
                  <span>CAST & CREW</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div className="col-3"></div>
                    <div class="col-md-4 col-lg-4 col-sm-4">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">MEN</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR</a>
                        </li>
                        <li>
                          <a>KURTA TROUSER</a>
                        </li>
                        <li>
                          <a>FLEXI PANTS</a>
                        </li>
                        <li>
                          <a>SANDALS</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-4 col-lg-4 col-sm-4">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">WOMEN</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>UNSTITCHED</a>
                        </li>
                        <li>
                          <a>STITCHED</a>
                        </li>
                        <li>
                          <a>KURTI</a>
                        </li>
                        <li>
                          <a>STOLE</a>
                        </li>
                        <li>
                          <a>TROUSER</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="top-level-link">
                <a class="mega-menu">
                  <span>WOMEN</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div class="col-md-3 col-lg-3 col-sm-3 men_4">
                      <img src="wmen.webp" alt="" />
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">KURTI</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>PKR 1590/- ONLY</a>
                        </li>
                      </ul>

                      <a href="">
                        <h6 class="sub-menu-head fs-6">UN-STITCHED</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>1 PIECE</a>
                        </li>

                        <li>
                          <a>2 PIECE</a>
                        </li>

                        <li>
                          <a>3 PIECE</a>
                        </li>
                      </ul>

                      <a href="">
                        <h6 class="sub-menu-head fs-6">UN-STITCHED</h6>
                      </a>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">STOLES-SHAWLS</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">BOTTOM WEAR</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">BAGS</h6>
                      </a>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">JEWELLERY</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FOOTWEAR</h6>
                      </a>
                      <br />
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">
                          NAERANG-HANDWOVEN COLLECTION
                        </h6>
                      </a>
                      <br />
                    </div>
                  </div>
                </div>
              </li>
              <li class="top-level-link">
                <a class="mega-menu">
                  <span>MEN</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div class="col-md-3 col-lg-3 col-sm-3 men_4">
                      <img src="Men_4.webp" alt="" />
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">KURTA PAJAMA</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">KAMEEZ SHALWAR</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>CASUAL</a>
                        </li>
                        <li>
                          <a>SEMI-FORMAL</a>
                        </li>
                        <li>
                          <a>FORMAL</a>
                        </li>
                        <li>
                          <a>EXCLUSIVE</a>
                        </li>
                      </ul>

                      <a href="">
                        <h6 class="sub-menu-head fs-6">KURTA</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>CASUAL</a>
                        </li>
                        <li>
                          <a>SEMI-FORMAL</a>
                        </li>
                        <li>
                          <a>FORMAL</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">CAPS</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">WAISTCOAT</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">UNSTITCHED-FABRICS</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR</a>
                        </li>
                        <li>
                          <a>KURTA</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">BOTTOM</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FOOTWEAR</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>EMBROIDERED</a>
                        </li>
                        <li>
                          <a>TRENDY</a>
                        </li>
                      </ul>

                      <a href="">
                        <h6 class="sub-menu-head fs-6">UNDERWEAR</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>MODAL</a>
                        </li>
                        <li>
                          <a>COTTON</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">GROOMS COLLECTION</h6>
                      </a>
                      <ul class="sub-menu-lists">
                        <li>
                          <a>PRINCE COAT</a>
                        </li>
                        <li>
                          <a>SHERWANI</a>
                        </li>
                        <li>
                          <a>TURBAN</a>
                        </li>
                        <li>
                          <a>KHUSSA</a>
                        </li>
                        <li>
                          <a>SPECIAL KURTA</a>
                        </li>
                        <li>
                          <a>KID BOYS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="top-level-link">
                <a class="mega-menu">
                  <span>BOYS & GIRLS</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div className="col-1"></div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">TEEN GIRLS</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>STITCHED COLLECTION</a>
                        </li>
                        <li>
                          <a>KURTI</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">TEEN BOYS</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR</a>
                        </li>
                        <li>
                          <a>KURTA</a>
                        </li>
                        <li>
                          <a>TEEN BOTTOM</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">KID GIRLS</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>STITCHED COLLECTION</a>
                        </li>
                        <li>
                          <a>KURTI</a>
                        </li>
                        <li>
                          <a>KID GIRLS TROUSER</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">KID BOYS</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>KAMEEZ SHALWAR</a>
                        </li>
                        <li>
                          <a>KURTA</a>
                        </li>
                        <li>
                          <a>FOOTWEAR</a>
                        </li>
                        <li>
                          <a>KIDS BOTTOM</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">INFANT</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>INFANT BOYS</a>
                        </li>
                        <li>
                          <a>INFANT GIRLS</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li class="top-level-link">
                <a class="mega-menu">
                  <span>FRAGRANCES</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div className="col-1"></div>
                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FOR MEN</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>PERFUME</a>
                        </li>
                        <li>
                          <a>GIFT SET</a>
                        </li>
                        <li>
                          <a>ATTAR</a>
                        </li>
                        <li>
                          <a>BODY SPRAY</a>
                        </li>
                        <li>
                          <a>BEARD OIL</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FOR WOMEN</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>PERFUME</a>
                        </li>
                        <li>
                          <a>BODY MIST</a>
                        </li>
                        <li>
                          <a>GIFT SET</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FOR KIDS</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">SANITIZER</h6>
                      </a>
                      <br />
                      <a href="">
                        <h6 class="sub-menu-head fs-6">SCENTED CANDALS</h6>
                      </a>
                    </div>

                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <figure>
                        <div class="imagesContainer">
                          <div class="imageDiv image1"></div>
                          <div class="imageDiv image2 fadeInClass"></div>
                          <div class="imageDiv image3 fadeInClass"></div>
                          <div class="imageDiv image4 fadeInClass"></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </li>

              <li class="top-level-link">
                <a class="mega-menu">
                  <span>MAKEUP</span>
                </a>
                <div class="sub-menu-block">
                  <div class="row">
                    <div className="col-2"></div>
                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">FACE</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>BLUSHER</a>
                        </li>
                        <li>
                          <a>CREAM & FOUNDATION</a>
                        </li>
                        <li>
                          <a>POWDER</a>
                        </li>
                        <li>
                          <a>OTHER</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">EYES</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>EYE LINER</a>
                        </li>
                        <li>
                          <a>EYE PENCILE</a>
                        </li>
                        <li>
                          <a>EYE SHADOW</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-2 col-lg-2 col-sm-2">
                      <a href="">
                        <h6 class="sub-menu-head fs-6">LIPS</h6>
                      </a>
                      <br />
                      <ul class="sub-menu-lists">
                        <li>
                          <a>LIPSTICK</a>
                        </li>
                        <li>
                          <a>LIPGLOSS</a>
                        </li>
                        <li>
                          <a>OTHERS</a>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-3 col-lg-3 col-sm-3">
                      <figure>
                        <div class="imagesContainer">
                          <div class="imageDiv image5"></div>
                          <div class="imageDiv image6 fadeInClass"></div>
                          <div class="imageDiv image7 fadeInClass"></div>
                          <div class="imageDiv image8 fadeInClass"></div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </li>

              <li class="top-level-link">
                <a class="mega-menu">
                  <span>CATALOGUE</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Header;
