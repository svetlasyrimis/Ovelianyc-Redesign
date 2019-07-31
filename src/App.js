import React from 'react';
import './App.css';
import ControlledCarousel from './components/ControlledCarousel';
import images from './services/images';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import DinnerMenu from './components/Dinner';
import BrunchMenu from './components/Brunch';
import CateringMenu from './components/Catering';
import PhotoSection from './components/PhotoSection';
import ContactForm from './components/ContactForm';
import classnames from 'classnames';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <ControlledCarousel />

        <tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <h4>Dinner</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <h4>Brunch</h4>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <h4>Catering</h4>
            </NavLink>
          </NavItem>

        </tabs>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <DinnerMenu />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <DinnerMenu />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <DinnerMenu />
              </Col>
            </Row>
          </TabPane>
        </TabContent>


        <AboutUs />
        <PhotoSection />
        <ContactForm />
      </div >
    );
  }
}

export default App;
