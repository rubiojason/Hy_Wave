import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'; 

function Main() {

    //useRef 
    const navOpenAnim = useRef();  
    const pageAnim = useRef(); 

    //useState 
    const [Scroll, setScroll] = useState("scroll"); 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(pageAnim.current, {transform: "translate(0px, 10vh)", opacity: 0}, {transform: "translate(0px, 0vh)", opacity: 1, duration: 0.5, delay: 0.35}); 
    }, [])

    //functions 
    const handleNavClick = () => {
        gsap.fromTo(navOpenAnim.current, {width: "0%", display: "flex"}, {width: "100%", opacity: 1, display: "flex"}); 
        setScroll("hidden"); 
    }
    
    const handleXClick = () => { 
        gsap.to(navOpenAnim.current, {width: "0%", opacity: 0, display: "none"}); 
        setScroll("scroll"); 
    }

    //window width 

    const size = useWindowSize();

        function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined,
        });
      
        useEffect(() => {
          // Handler to call on window resize
          function handleResize() {
            // Set window width/height to state
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }

          // Add event listener
          window.addEventListener("resize", handleResize);
          
          // Call handler right away so state gets updated with initial window size
          handleResize();
          
          // Remove event listener on cleanup
          return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
      
        return windowSize;
    }

    document.body.style.overflowY = Scroll;
    document.body.style.overflowX = "hidden";

    return (
        <div className="main-page" ref={pageAnim}>

            <div className="nav-open-up" ref={navOpenAnim}>
                <div className="top-nav-x-container">
                    <img onClick={handleXClick} alt="" src="https://cdn4.iconfinder.com/data/icons/user-interface-3-6/100/user_interfaceUIUXx_markcancel-512.png" />
                </div>
                <div className="bottom-nav-container">
                    <div>
                        <Link to="/HyWave/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/HyWave/animals">Animals</Link>
                    </div>
                    <div>
                        <Link to="/HyWave/ocean">Oceans</Link>
                    </div>
                    <div>
                        <Link to="/HyWave/resorts">Resorts</Link>
                    </div>
                </div>
            </div>

            <div className="top-of-page">
                <nav>
                    <div className="left-nav">
                        <h3>HyWave</h3>
                    </div>

                        {
                            size.width >=  1500 ? 
                            <div className="right-nav">
                                <div className="nav-links">
                                    <Link to="/HyWave/ocean">
                                        Oceans
                                    </Link>
                                </div>
                                <div className="nav-links">
                                    <Link to="/HyWave/animals">
                                        Animals
                                    </Link>
                                </div>
                                <div className="nav-links">
                                    <Link to="/HyWave/resorts">
                                        Resorts
                                    </Link>
                                </div>
                            </div>
                        :
                        <div className="right-nav">
                            <div className="hamburger-div" onClick={handleNavClick}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        }
                </nav>

                <div className="center-box-div">
                    <div className="center-box">
                        <p>
                            Proident irure ex et aliquip qui cillum laborum duis 
                            consequat.Ad reprehenderit mollit sunt amet. Non do 
                            consectetur minim enim Lorem laborum proident.
                        </p>
                        <Link  to="/HyWave/resorts">
                            <button>Explore Resorts</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="middle-page-container">

                <a className="img-select-div" href="/lorem/ocean">
                    <img className="inside-img-div" alt="" src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <div className="img-text-overlay">Oceans</div>
                </a>

                <a className="img-select-div" href="/lorem/animals">
                    <img className="inside-img-div" alt="" src="https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <div className="img-text-overlay">Animals</div>
                </a>

                <a className="img-select-div" href="/lorem/resorts">
                    <img className="inside-img-div" alt="" src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <div className="img-text-overlay">Resorts</div>
                </a>

            </div>

            <div className="bottom-nav">
                <div className="bottom-left">
                    <div className="bottom-top-text">Aute anim nulla sunt</div>
                    <div className="bottom-middle-text">Laboris</div>
                    <div className="bottom-bottom-text">Do adipisicing consequat do duis amet ex proident proident reprehenderit quis elit elit enim.</div>
                </div>
                <div className="bottom-right">
                    <h3 className="bottom-white-color-text other">lorem</h3>
                    <h3 className="bottom-white-color-text other">lorem</h3>
                    <h3 className="bottom-white-color-text other">lorem</h3>
                    <h3 className="bottom-white-color-text other">lorem</h3>
                    <h3 className="bottom-white-color-text other">lorem</h3>
                    <h3 className="bottom-white-color-text other">lorem</h3>
                </div>
            </div>

        </div>
    )
}

export default Main
