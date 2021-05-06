import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'; 

function Resorts() {

    const array1 = ['https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', 
    'https://images.pexels.com/photos/860922/pexels-photo-860922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
    'https://images.unsplash.com/photo-1561409037-c7be81613c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80', 
    'https://images.unsplash.com/photo-1541480551145-2370a440d585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80'];

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

            <div className="top-of-page resort">
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

                <div className="page-img-title">Resorts</div>

            </div>

            <div className="bottom-resorts-div">

                {
                    array1.map((info, key) => (
                        <div className="resort-container-div" key={key}>
                            <div className="resort-img-container-div" style={{backgroundImage: "url('"+info+"')"}}></div>
                            <div className="resort-img-description-div">
                                <div className="flex-start-div">
                                    <h2 className="h2-div">Lorem</h2>
                                </div>
                                <p>
                                    Exercitation ex elit eiusmod est. Sunt mollit aliquip 
                                    proident officia labore. Nulla minim anim et cupidatat 
                                    excepteur consequat occaecat. Ad duis id amet dolor 
                                    mollit aliquip sit sint officia exercitation. Ipsum 
                                    voluptate tempor tempor cillum. Ea velit elit cillum 
                                    labore culpa ullamco proident dolore laboris voluptate 
                                    proident nostrud incididunt proident.
                                </p>
                            </div>
                        </div>
                    ))
                }

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

export default Resorts
