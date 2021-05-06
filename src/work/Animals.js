import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import gsap from 'gsap'; 

function Animals() {

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
                        <Link to="/lorem/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/lorem/animals">Animals</Link>
                    </div>
                    <div>
                        <Link to="/lorem/ocean">Oceans</Link>
                    </div>
                    <div>
                        <Link to="/lorem/resorts">Resorts</Link>
                    </div>
                </div>
            </div>

            <div className="top-of-page animal">
                <nav>
                    <div className="left-nav">
                        <h3>
                            <Link to="/lorem/home">
                                HyWave
                            </Link>
                        </h3>
                    </div>

                    {
                        size.width >=  1500 ? 

                        <div className="right-nav">
                            <div className="nav-links">
                                <Link to="/lorem/ocean">
                                    Oceans
                                </Link>
                            </div>
                            <div className="nav-links">
                                <Link to="/lorem/animals">
                                    Animals
                                </Link>
                            </div>
                            <div className="nav-links">
                                <Link to="/lorem/resorts">
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

                <div className="page-img-title">Sea Animals</div>

            </div>

            <div className="bottom-grid-system-div">

                <div className="card card-tall"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card card-tall"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/1618606/pexels-photo-1618606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/712367/pexels-photo-712367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card card-tall"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/4886378/pexels-photo-4886378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/5277693/pexels-photo-5277693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/3390587/pexels-photo-3390587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card card-tall"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/2690766/pexels-photo-2690766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/4755028/pexels-photo-4755028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/3220368/pexels-photo-3220368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage:"url('https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card card-tall"
                    style={{backgroundImage: "url('https://images.pexels.com/photos/1683724/pexels-photo-1683724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.pexels.com/photos/1986374/pexels-photo-1986374.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1568013233471-99996ae1b1d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card card-tall"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1559076101-70396ba2dd8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"}}
                >
                    <div className="bottom-box-tall">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1566575007302-d1bd5a157fdf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1487252168646-fa0e87f6e83c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG9jZWFuJTIwYW5pbWFsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1575680130698-ba3aaf3c3c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
                </div>

                <div className="card"
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1560497122-b1392e1f12f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80')"}}
                >
                    <div className="bottom-box-small">
                        <div className="boxes">lorem</div>
                        <a className="boxes" rel="noreferrer" href="https://unsplash.com/" target="_blank">source</a>
                    </div>
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

export default Animals
