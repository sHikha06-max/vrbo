import { Button } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"

const Footer = () =>{
  

      return <div>
          <div className="mainDivs">
          <div className="right">
          <div>
              <img src="https://csvcus.homeaway.com/rsrcs/cdn-logos/5.8.0/sitename/vrbo/web/logo.svg"/>
          </div>

          <div>
              <ul>
                  <h5>Explore Vrbo</h5>
                  <li>List your property</li>
                  <li>Book with Confidence</li>
                  <li>Trust {`&`} Safety</li>
                  <li>Partner resources</li>
                  <li>Vacation rental guides</li>
              </ul>
          </div>

          <div>
              <ul>
                  <h5>Meet the Vrbo family</h5>
                  <li>Vrbo</li>
                  <li>Abritel.fr</li>
                  <li>FeWo-direkt.de</li>
                  <li>Bookabach.co.nz</li>
                  <li>Stayz.com.au</li>
              </ul>
          </div>
    
          <div>
              <ul>
                  <h5>Company</h5>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Affiliates</li>
                  <li>Media Center</li>
                  <li>Advertising</li>
              </ul>
          </div>
          </div>

          <div className="left">
            <div className="upper">
                <div>
                <h5>Get special offers, travel inspiration, and more from Vrbo</h5>
                </div>
                <div>
                    <div>
                        <input type="email" placeholder=" Email Addess"/>
                    </div>
                    <div><Button variant="contained">Subscribe</Button></div>
                </div>
            </div>

            <div>
                <div>
                <h5>Get the Vrbo mobile app</h5>
                </div>
                <div>
                    <div>
                        <input type="tel" placeholder=" Your mobile phone number"/>
                    </div>
                    <div><Button variant="contained">Send</Button></div>
                    <span>Available for iOS and Android. Messaging rates may apply.</span>
                </div>
            </div>

            <div >
              
            </div>

          </div>
          <div className="lower">
         <div className="tweet"> <TwitterIcon></TwitterIcon></div>
         </div>
          </div>

      </div>
}

export {Footer}