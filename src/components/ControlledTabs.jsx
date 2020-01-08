import React from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Dinner from './Dinner'
import Catering from './Catering'
import Brunch from './Brunch'


const ControlledTabs = () => {


  return (
    <div className="menu-tabs">
      <Tabs id="menu" defaultActiveKey="dinner" className="tabs">
        <Tab eventKey="dinner" title="Dinner" >
          <Dinner />
        </Tab>
        <Tab eventKey="catering" title="Catering" >
          <Catering />
        </Tab>
        <Tab eventKey="brunch" title="Brunch">
          <Brunch />
        </Tab>
      </Tabs>
    </div>
  );
}

export default ControlledTabs
