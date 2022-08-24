import React from "react";
import "./Footer.css";
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im';
import { ImInstagram } from 'react-icons/im';
import { FaPinterestP } from 'react-icons/fa';





function Footer() {
  return (
    <div>
      <div className="footer_main">
        <div className="container">
          <div className="fcn">
            <div className="row">
              <div className="col-md-12">
                <h4>BE THE FIRST</h4>
                <p>
                  New arrivals. Exclusive previews. First access to <br />{" "}
                  sales. Sign up to stay in the know.
                </p>
                <input type="email" placeholder="Entre your email address" />
                <button>SIGN UP</button>
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="row">
              <div className="col-md-3">
                <h5>NEED HELP?</h5> <br />
                <p>+92 21 111 112 111 (9am - 10pm , Mon - Sat)</p>
                <a href="">eshop@junaidjamshed.com</a>
              </div>

              <div className="col-md-3">
                <h5>CUSTOMER SERVICE</h5> <br />
                <ul>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Delivery & Orders</a>
                  </li>
                  <li>
                    <a href="">Returns & Exchanges</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Track My Order</a>
                  </li>
                  <li>
                    <a href="">Payment Guide</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <h5>COMPANY</h5> <br />
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Store locator</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12 mobile-toggle">
                <h4 class="no-padding-mob">FOLLOW US</h4>
                <div class="mg-mobile">
                  <a
                    class="social-icons si-borderless si-whatsapp"
                    href="https://wa.me/923211115368"
                    target="_blank"
                  >
                    {" "}
                    <AiOutlineWhatsApp class="pinterest"></AiOutlineWhatsApp>{" "}
                    <i class="fa fa-whatsapp"></i>{" "}
                  </a>
                  <a
                    class="social-icons si-borderless si-facebook"
                    href="https://www.facebook.com/j.junaidjamshed"
                    target="_blank"
                  >
                    {" "}
                    <FaFacebookF class="pinterest"></FaFacebookF> <i class="icon-facebook"></i>{" "}
                  </a>{" "}
                  <a
                    class="social-icons si-borderless si-twitter"
                    href="https://twitter.com/_JunaidJamshed"
                    target="_blank"
                  >
                    {" "}
                    <BsTwitter class="pinterest"></BsTwitter> <i class="icon-twitter"></i>{" "}
                  </a>{" "}
                  <a
                    class="social-icons si-borderless si-youtube"
                    href="https://www.youtube.com/channel/UC5xbg6lBACA3HBdN8idiQvQ"
                    target="_blank"
                  >
                    {" "}
                    <ImYoutube2 class="pinterest"></ImYoutube2> <i class="icon-youtube"></i>{" "}
                  </a>{" "}
                  <a
                    class="social-icons si-borderless si-instagram"
                    href="https://www.instagram.com/j.junaidjamshed/"
                    target="_blank"
                  >
                    {" "}
                    <ImInstagram class="pinterest"></ImInstagram>{" "}
                    <i class="icon-instagram"></i>{" "}
                  </a>{" "}
                  <a
                    class="social-icons si-borderless si-pinterest"
                    href="https://www.pinterest.com/junaidjamshed/"
                    target="_blank"
                  >
                    {" "}
                    <FaPinterestP class="pinterest"></FaPinterestP>{" "}
                    <i class="icon-pinterest"></i>{" "}
                  </a>{" "}
                  <a
                    class="social-icons si-borderless si-linkedin"
                    href="https://www.linkedin.com/company/junaid-jamshed-private-limited/"
                    target="_blank"
                  >
                    {" "}
                    <i class="icon-linkedin"></i> <i class="icon-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
