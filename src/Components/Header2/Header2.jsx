import React from "react";
import "./Header2.css";
import { Link } from "react-router-dom";


function Header2() {
  return (
    <div className="full">
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
              <span class="mm-subcategory-title underline-megamenu ">New Arrivals</span>
              </a>
              <div class="sub-menu-block">
                <div class="row">
                  <div class="col-md-2 col-lg-2 col-sm-2">
                   <Link to="/Azadi_main"> <h6 class="sub-menu-head fs-6">AZADI FASHION'22</h6> </Link>
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
                  <a href=""><h6 class="sub-menu-head fs-6">MONOCHROME COLLECTION</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">WOMEN - FESTIVE AFFAIR'22</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">MEN - FESTIVE CELEBRATION'22</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">YOUNGSTERS - FESTIVE CELEBRATION'22</h6></a>
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
                <div class="col-md-3 col-lg-3 col-sm-3 men_4" >
                    <img src="wmen.webp" alt="" />
                </div>
                  <div class="col-md-3 col-lg-3 col-sm-3">
                  <a href=""><h6 class="sub-menu-head fs-6">WOMAN</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">MAN</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">YOUNGSTER</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">MEN</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">WOMEN</h6></a>
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
                <div class="col-md-3 col-lg-3 col-sm-3 men_4" >
                    <img src="wmen.webp" alt="" />
                </div>
                  <div class="col-md-2 col-lg-2 col-sm-2">
                  <a href=""><h6 class="sub-menu-head fs-6">KURTI</h6></a>
                    <ul class="sub-menu-lists">
                      <li>
                        <a>PKR 1590/- ONLY</a>
                      </li>
                      
                    </ul>

                    <a href=""><h6 class="sub-menu-head fs-6">UN-STITCHED</h6></a>
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

                    <a href=""><h6 class="sub-menu-head fs-6">UN-STITCHED</h6></a>
                  </div>
                  <div class="col-md-2 col-lg-2 col-sm-2">
                  <a href=""><h6 class="sub-menu-head fs-6">STOLES-SHAWLS</h6></a><br />
                  <a href=""><h6 class="sub-menu-head fs-6">BOTTOM WEAR</h6></a><br />
                  <a href=""><h6 class="sub-menu-head fs-6">BAGS</h6></a>
                   
                  </div>
                  <div class="col-md-2 col-lg-2 col-sm-2">
                  <a href=""><h6 class="sub-menu-head fs-6">JEWELLERY</h6></a><br />
                  <a href=""><h6 class="sub-menu-head fs-6">FOOTWEAR</h6></a><br />
                  </div>

                  <div class="col-md-2 col-lg-2 col-sm-2">
                  <a href=""><h6 class="sub-menu-head fs-6">NAERANG-HANDWOVEN COLLECTION</h6></a><br />
                  
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
                <div class="col-md-3 col-lg-3 col-sm-3 men_4" >
                    <img src="Men_4.webp" alt="" />
                </div>
                  <div class="col-md-2 col-lg-2 col-sm-2">
                  <a href=""><h6 class="sub-menu-head fs-6">KURTA PAJAMA</h6></a>
                      <br />
                  <a href=""><h6 class="sub-menu-head fs-6">KAMEEZ SHALWAR</h6></a>
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

                    <a href=""><h6 class="sub-menu-head fs-6">KURTA</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">CAPS</h6></a>
                       <br />
                  <a href=""><h6 class="sub-menu-head fs-6">WAISTCOAT</h6></a>
                      <br />
                  <a href=""><h6 class="sub-menu-head fs-6">UNSTITCHED-FABRICS</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">BOTTOM</h6></a>
                       <br />
                  <a href=""><h6 class="sub-menu-head fs-6">FOOTWEAR</h6></a>
                    <ul class="sub-menu-lists">
                      <li>
                        <a>EMBROIDERED</a>
                      </li>
                      <li>
                        <a>TRENDY</a>
                      </li>
                      
                    </ul>

                    <a href=""><h6 class="sub-menu-head fs-6">UNDERWEAR</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">GROOMS COLLECTION</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">TEEN GIRLS</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">TEEN BOYS</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">KID GIRLS</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">KID BOYS</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">INFANT</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">FOR MEN</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">FOR WOMEN</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">FOR KIDS</h6></a>
                  <br />
                  <a href=""><h6 class="sub-menu-head fs-6">SANITIZER</h6></a>
                  <br />
                  <a href=""><h6 class="sub-menu-head fs-6">SCENTED CANDALS</h6></a>
                    
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
                  <a href=""><h6 class="sub-menu-head fs-6">FACE</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">EYES</h6></a>
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
                  <a href=""><h6 class="sub-menu-head fs-6">LIPS</h6></a>
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
  );
}

export default Header2;
