import React from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Dinner from './Dinner'
import Catering from './Catering'
import Brunch from './Brunch'


const ControlledTabs = () => {
  

  return (
    <Tabs id="controlled-tab-example"  defaultActiveKey="profile" id="uncontrolled-tab-example" className="tabs">
      <Tab eventKey="dinner" title="Dinner">
        <Dinner />
      </Tab>
      <Tab eventKey="catering" title="Catering" >
        <Catering />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs
