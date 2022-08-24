import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Landing.css";
import { Navigation } from "swiper";

function Landing() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="slider1.webp"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="slider2.webp"></img>
        </SwiperSlide>
      </Swiper>

      <div className="land_main">
        <div className="container">
          <div className="row ttl">
            <div className="col-1"></div>
            <div className="col-md-3 wmn_">
              <a href="">
                <img src="women1.webp" alt="" />
              </a>
              <p>Unstitched</p>
              <a className="aaa" href="">Shop Now</a>
            </div>
            <div className="col-3"></div>
            <div className="col-md-2 wmn_2">
              <a className="wmn_3" href="">
                <img src="women2.webp" alt="" />
              </a>
              <p>Kurti</p>
              <a className="aaa" href="">Shop Now</a>

              <a className="wmn_4" href="">
                <img src="women2.webp" alt="" />
              </a>
              <p>Kurti</p>
              <a className="aaa" href="">Shop Now</a>
            </div>
            <div className="col-1"></div>
          </div>

          <div className="row ttl">
            <div className="col-1"></div>
            <div className="col-md-2 wmn_2">
              <a className="wmn_4" href="">
                <img src="men2.webp" alt="" />
              </a>
              <p>Kurta</p>
              <a className="aaa" href="">Shop Now</a>

              <a className="wmn_4" href="">
                <img src="men2.webp" alt="" />
              </a>
              <p>Kurta</p>
              <a className="aaa" href="">Shop Now</a>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-3 wmn_">
              <a className="wmn_4" href="">
                <img src="men1.webp" alt="" />
              </a>
              <p>Kameez Shalwar</p>
              <a className="aaa" href="">Shop Now</a>
            </div>
          </div>

          <div className="row pink">
            <div class="col-xs-12 col-md-10 mg-sec-4 topmarginmob">
              <a href="https://www.junaidjamshed.com/womens/nearang-handwoven-collection.html">
                {" "}
                <img src="https://www.junaidjamshed.com/media/wysiwyg/Naerang.jpg" />{" "}
              </a>
            </div>
          </div>

          <div className="row pink">
            <div class="col-xs-12 col-md-10 mg-sec-4 topmarginmob">
              <a href="https://www.junaidjamshed.com/mens/underwear.html">
                {" "}
                <img src="https://www.junaidjamshed.com/media/wysiwyg/Underwear_1.jpg" />{" "}
              </a>
            </div>
          </div>

          <div className="row arrival">
            <p>NEW ARRIVALS</p>
            <h1>Boys & Girls</h1>
            <div className="col-1"></div>
            <div className="col-md-4">
              <div class="content">
                <a
                  href="https://unsplash.com/photos/HkTMcmlMOUQ"
                  target="_blank"
                >
                  <div class="content-overlay"></div>
                  <img
                    class="content-image"
                    src="https://www.junaidjamshed.com/media/wysiwyg/ms3.jpg"
                  />
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Teen Girls</h3>
                    <p class="content-text">Shop Now</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-2">
              <div class="content">
                <a
                  href="https://unsplash.com/photos/HkTMcmlMOUQ"
                  target="_blank"
                >
                  <div class="content-overlay"></div>
                  <img
                    class="content-image"
                    src="https://www.junaidjamshed.com/media/wysiwyg/TB1.jpg"
                  />
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Teen Girls</h3>
                    <p class="content-text">Shop Now</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-2">
              <div class="content">
                <a
                  href="https://unsplash.com/photos/HkTMcmlMOUQ"
                  target="_blank"
                >
                  <div class="content-overlay"></div>
                  <img
                    class="content-image"
                    src="https://www.junaidjamshed.com/media/wysiwyg/ms4.jpg"
                  />
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Teen Girls</h3>
                    <p class="content-text">Shop Now</p>
                  </div>
                </a>
              </div>
{/* <br /><br />
              <p>NEW COLLECTION</p> */}
            </div>

            <div className="col-md-2">
              <div class="content">
                <a
                  href="https://unsplash.com/photos/HkTMcmlMOUQ"
                  target="_blank"
                >
                  <div class="content-overlay"></div>
                  <img
                    class="content-image"
                    src="https://www.junaidjamshed.com/media/wysiwyg/KB.jpg"
                  />
                  <div class="content-details fadeIn-bottom">
                    <h3 class="content-title">Teen Girls</h3>
                    <p class="content-text">Shop Now</p>
                  </div>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
