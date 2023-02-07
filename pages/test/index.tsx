import Script from "next/script"
import JQueryScripts from '../../components/jQueryScripts';



const Test = () => {
    return(
        <>
<div className="device-notification">
  <a className="device-notification--logo" href="#0">
    <img src="/assets/img/logo.png" alt="Global" />
    <p>Global</p>
  </a>
  <p className="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div className="perspective effect-rotate-left">
  <div className="container"><div className="outer-nav--return"></div>
    <div id="viewport" className="l-viewport">
      <div className="l-wrapper">
        <header className="header">
          <a className="header--logo" href="#0">
            <img src="/assets/img/logo.png" alt="Global" />
            <p>Global</p>
          </a>
          <button className="header--cta cta">Hire Us</button>
          <div className="header--nav-toggle">
            <span></span>
          </div>
        </header>
        <nav className="l-side-nav">
          <ul className="side-nav">
            <li className="is-active"><span>Home</span></li>
            <li><span>Works</span></li>
            <li><span>About</span></li>
            <li><span>Contact</span></li>
            <li><span>Hire us</span></li>
          </ul>
        </nav>
        <ul className="l-main-content main-content">
          <li className="l-section section section--is-active">
            <div className="intro">
              <div className="intro--banner">
                <h1>Your next interactive experience</h1>
                <button className="cta">Hire Us
                  <span className="btn-background"></span>
                </button>
                <img src="/assets/img/introduction-visual.png" alt="Welcome" />
              </div>
              <div className="intro--options">
                <a href="#0">
                  <h3>Metiew &amp; Smith</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a>
                <a href="#0">
                  <h3>Fantasy interactive</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a>
                <a href="#0">
                  <h3>Paul &amp; shark</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="work">
              <h2>Selected work</h2>
              <div className="work--lockup">
                <ul className="slider">
                  <li className="slider--item slider--item-left">
                    <a href="#0">
                      <div className="slider--item-image">
                        <img src="/assets/img/work-victory.jpg" alt="Victory" />
                      </div>
                      <p className="slider--item-title">Victory</p>
                      <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a>
                  </li>
                  <li className="slider--item slider--item-center">
                    <a href="#0">
                      <div className="slider--item-image">
                        <img src="/assets/img/work-metiew-smith.jpg" alt="Metiew and Smith" />
                      </div>
                      <p className="slider--item-title">Metiew &amp; Smith</p>
                      <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a>
                  </li>
                  <li className="slider--item slider--item-right">
                    <a href="#0">
                      <div className="slider--item-image">
                        <img src="/assets/img/work-alex-nowak.jpg" alt="Alex Nowak" />
                      </div>
                      <p className="slider--item-title">Alex Nowak</p>
                      <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a>
                  </li>
                </ul>
                <div className="slider--prev">
                </div>
                <div className="slider--next">
                </div>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="about">
              <div className="about--banner">
                <h2>Wepeople</h2>
                <a href="#0">Career
                  <span>
                  </span>
                </a>
                <img src="/assets/img/about-visual.png" alt="About Us" />
              </div>
              <div className="about--options">
                <a href="#0">
                  <h3>Winners</h3>
                </a>
                <a href="#0">
                  <h3>Philosophy</h3>
                </a>
                <a href="#0">
                  <h3>History</h3>
                </a>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="contact">
              <div className="contact--lockup">
                <div className="modal">
                  <div className="modal--information">
                    <p>Pawia 5, 31-154 Kraków, Poland</p>
                    <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
                    <a href="tel:+148126287560">+48 12 628 75 60</a>
                  </div>
                  <ul className="modal--options">
                    <li><a href="#0">Bēhance</a></li>
                    <li><a href="#0">dribbble</a></li>
                    <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="l-section section">
            <div className="hire">
              <h2>You want us to do</h2>
              <form className="work-request">
                <div className="work-request--options">
                  <span className="options-a">
                    <input id="opt-1" type="checkbox" value="app design"/>
                    <label htmlFor="opt-1">
                      App Design
                    </label>
                    <input id="opt-2" type="checkbox" value="graphic design"/>
                    <label htmlFor="opt-2">
                      Graphic Design
                    </label>
                    <input id="opt-3" type="checkbox" value="motion design"/>
                    <label htmlFor="opt-3">
                      Motion Design
                    </label>
                  </span>
                  <span className="options-b">
                    <input id="opt-4" type="checkbox" value="ux design"/>
                    <label htmlFor="opt-4">
                      UX Design
                    </label>
                    <input id="opt-5" type="checkbox" value="webdesign"/>
                    <label htmlFor="opt-5">
                      Webdesign
                    </label>
                    <input id="opt-6" type="checkbox" value="marketing"/>
                    <label htmlFor="opt-6">
                      Marketing
                    </label>
                  </span>
                </div>
                <div className="work-request--information">
                  <div className="information-name">
                    <input id="name" type="text" spellCheck="false"/>
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="information-email">
                    <input id="email" type="email" spellCheck="false"/>
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <input type="submit" value="Send Request"/>
              </form>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul className="outer-nav">
    <li className="is-active">Home</li>
    <li>Works</li>
    <li>About</li>
    <li>Contact</li>
    <li>Hire us</li>
  </ul>
</div>

<Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></Script>
{/* <Script id="my-script">window.jQuery || document.write(<Script src="/assets/js/vendor/jquery-2.2.4.min.js"></Script>)</Script> */}
<JQueryScripts />
<Script src="/assets/js/functions-min.js"></Script>
        </>
    )
}
export default Test