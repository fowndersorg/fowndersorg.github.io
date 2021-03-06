import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';
import Home from './Home';
import About from './About';
import WhyFutureFownders from './WhyFutureFownders';
import OurWork from './OurWork';
import Events from './Events';
import Sponsor from './Sponsor';
import BreakingBread from './BreakingBread';

class Nav extends Component {

    // constructor () {
    //     super();
    // }
    componentDidMount() {
        $(document).ready(function(){
            $('.button-collapse').sideNav();

            function hideFooter(path){
                path = window.location.pathname;

                if (path === '/breakingbread') {
                    console.log('true');
                    document.getElementById("display-none").style.display = "none";
                    document.getElementById("footer-none").style.display = "none";
                }
            }
            return hideFooter();

        });
    }

    render() {

        return (

            <Router className="transparent z-depth-0">
                <div className="transparent z-depth-0">
                    <nav className="transparent z-depth-0" id="display-none">
                        <div className="nav-wrapper transparent">
                            {/*<a href="#!" className="brand-logo left">*/}
                                <Link className="brand-logo left" to="/"><img className="logo responsive-img left" alt="Future Fownders" src="https://fownders.s3.us-east-2.amazonaws.com/futurefownders-logo-white-large.png" width={200}/></Link>
                            {/*</a>*/}
                            <a href="#" role="button" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons white-text">menu</i></a>

                            <ul className="right hide-on-med-and-down black-text">
                                {/*<li>*/}
                                    {/*<Link to="/">Future Fownder</Link>*/}
                                {/*</li>*/}
                                <li>
                                    <Link to="/whyfuturefownders">Why Future Fownders</Link>
                                </li>
                                <li>
                                    <Link to="/ourwork">Our Work</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                                        <input type="submit" value="DONATE" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn transparent"/>
                                        <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </li>
                                <li className="hide">
                                    <Link className="btn transparent" to="/sponsor">Sponsor</Link>
                                </li>
                                <li className="hide">
                                    <Link className="btn transparent" to="/breakingbread">BreakingBread</Link>
                                </li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo">
                                <li>
                                    <Link to="/whyfuturefownders">Why Future Fownders</Link>
                                </li>
                                <li>
                                    <Link to="/ourwork">Our Work</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/events">Events</Link>
                                </li>
                                <li className="hide">
                                    <Link to="/events">Events</Link>
                                </li>
                                <li>
                                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                        <input type="hidden" name="cmd" value="_s-xclick"/>
                                        <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                                        <input type="submit" value="DONATE" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn transparent"/>
                                        <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                    </form>
                                </li>
                                <li className="hide">
                                    <Link className="btn transparent" to="/sponsor">Sponsor</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path="/" component={Home} />
                    <Route path="/ourwork" component={OurWork} />
                    <Route path="/about" component={About} />
                    <Route path="/whyfuturefownders" component={WhyFutureFownders} />
                    <Route path="/Events" component={Events} />
                    <Route path="/Sponsor" component={Sponsor} />
                    <Route path="/breakingbread" component={BreakingBread} />
                </div>
            </Router>
        );
    }
}

export default Nav;