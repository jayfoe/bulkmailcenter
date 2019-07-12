import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation.js';
import { Route } from 'react-router-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer.js';
import Home from '../../components/Home/home.js';
import MailingServices from '../../components/MailingServices/MailingServices.js';
import DataProcessing from '../../components/DataProcessing/DataProcessing.js';
import DuplicationPrinting from '../../components/Printing/Printing.js';
import Procurement from '../../components/Procurement/Procurement.js';
import Direction from '../Direction/Direction.js';
import Testimonial from '../../components/Testimonial/Testimonial.js';
import Contact from '../Contact/Contact.js';
import Footer from '../../components/Footer/Footer.js';
import './Layout.css';

class Layout extends Component {
  state = {
    // if mobile view
    showSideDrawer: false
  }

  toggleIconHandler = () => {
    this.setState( (prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer}
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false})
  }
  
  render() {
    return (
      <div className="Background">
        <div className="Bar">
          <Navigation 
            toggleClick={this.toggleIconHandler} />
          <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler} />
        </div>
        <div className="Layout">
          <Route path="/" exact component={Home} />
          <Route path="/mail" exact component={MailingServices} />
          <Route path="/data" exact component={DataProcessing} />
          <Route path="/print" exact component={DuplicationPrinting} />
          <Route path="/procurement" exact component={Procurement} />
          <Route path="/testimonial" exact component={Testimonial} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/direction" exact component={Direction}/>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
