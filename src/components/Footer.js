import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-section">
        <div className="top-section-item">
          <h2>List your Show</h2>
          <p>Got a show, event, activity or a great experience? Partner with us & get listed on FilmCraze</p>
          <button className="contact-button">Contact today!</button>
        </div>
        <div className="top-section-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmalwGipfN7OQWqeBFqULsuPbzvsRO_W2Rw&s" alt="Customer Care" style={{width:'100px',height:'80px'}}/>
          <p>24/7 CUSTOMER CARE</p>
        </div>
        <div className="top-section-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb66kM7QRwXKhM5EflQ8D8gvRs7bVXRDqz5Q&s" alt="Booking Confirmation" style={{width:'100px',height:'80px'}}/>
          <p>RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="top-section-item">
          <img src="https://w7.pngwing.com/pngs/281/643/png-transparent-pinecrest-elementary-school-newsletter-algaeurope-logo-subscribe-miscellaneous-media-news-thumbnail.png" alt="Newsletter" style={{width:'100px',height:'80px'}}/>
          <p>SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-item">
          <h3>COUNTRIES</h3>
          <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
        </div>
        <div className="bottom-section-item">
          <h3>HELP</h3>
          <p>About Us | Contact Us | Current Openings | Press Release | Press Coverage | Terms & Conditions | Privacy Policy | FAQs | Sitemap</p>
        </div>
        <div className="bottom-section-item">
          <h3>BOOKMYSHOW EXCLUSIVES</h3>
          <p>Watch Guide | Superstar | BookASmile | Corporate Vouchers | Gift Cards | List My Show | Offers | Stream</p>
        </div>
      </div>
      <div className="footer-logo">
      <h4><img src="https://banner2.cleanpng.com/20180323/ape/kisspng-art-film-logo-cinema-clip-art-movie-logo-cliparts-5ab587fb1000c4.1651552415218462670656.jpg" alt="filmcraze" style={{width:'50px',height:'50px',marginLeft:'-30px'}}/>
       FilmCraze</h4>
      </div>
      <div className="social-icons" style={{marginTop:'50px'}}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIynNAR8bZxQUjrRWCu4Z_OfTw3-_AskoY1a5NHnXs9uLier3xH8u57_zfH8oLWEGtCdU&usqp=CAU" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxdg2tY9vkpg8Kxr0NaTZRhpVvB2FVzSsFQ&s" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="https://e7.pngegg.com/pngimages/163/425/png-clipart-youtube-computer-icons-logo-subscribe-angle-desktop-wallpaper.png" alt="YouTube" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAECtNLv4Q5Z754hH5ZFmcIGr9spfGZkgqUw&s" alt="Pinterest" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_vZkdeM4kxjZm39nK8k5UfQqddIa0nmAnA&s" alt="LinkedIn" />
        </a>
      </div>
      <div className="copyright" style={{marginTop:'30px'}}>
      <p>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
The content and images used on this site are copyright protected and copyrights vests with the respective owners.
The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
Unauthorized use is prohibited and punishable by law.</p>

      </div>
    </footer>
  );
};

export default Footer;
