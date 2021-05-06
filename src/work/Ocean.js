import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'; 

function Ocean() {

    const arr = ["https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/2397651/pexels-photo-2397651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/210205/pexels-photo-210205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.unsplash.com/photo-1576515382035-a29a18c88b2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80", 
    "https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/1482193/pexels-photo-1482193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/944440/pexels-photo-944440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
    "https://images.pexels.com/photos/355288/pexels-photo-355288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.unsplash.com/photo-1439405326854-014607f694d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80", 
    "https://images.unsplash.com/photo-1488188840666-e2308741a62f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
    "https://images.unsplash.com/photo-1456753510773-a8bd200a4a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80", 
    "https://images.unsplash.com/photo-1551529609-8b070b9e28ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1059&q=80" 
 ]; 

 //useRef 
    const navOpenAnim = useRef();  
    const pageAnim = useRef(); 

    //useState 
    const [Scroll, setScroll] = useState("scroll"); 

    //useEffect 
    useEffect(() => {
        gsap.fromTo(pageAnim.current, {marginLeft: "10vw", opacity: 0}, {marginLeft: "0vw", opacity: 1, duration: 0.5, delay: 0.35}); 
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

            <div className="top-of-page ocean">
                <nav>
                    <div className="left-nav">
                        <h3>
                            <Link to="/HyWave/home">
                                HyWave
                            </Link>
                        </h3>
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

                <div className="page-img-title">Oceans</div>

            </div>

            <div className="ocean-below-container">
                <div className="grid-system-ocean">

                {
                    arr.map((val, idx) => {
                        return (
                            <div className="grid-items-div" key={idx}>
                                <div className="ocean-img-container">
                                    <img alt="" src={val} />
                                </div>
                                <div className="below-img-div">
                                    <h3>
                                        <Link className="blue-link" to="">
                                            Lorem
                                        </Link>
                                    </h3>
                                    <div className="p-container">
                                        <p>
                                            Quis minim nulla occaecat duis officia qui occaecat 
                                            exercitation dolor reprehenderit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
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

export default Ocean
