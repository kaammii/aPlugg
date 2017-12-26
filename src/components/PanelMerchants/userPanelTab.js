import React, { Component } from 'react';
import Tabs, { TabPane } from '../../components/uielements/tabs';
import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/box';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import IntlMessages from '../../components/utility/intlMessages';
import { Row, Col } from 'antd';
import { Icon } from 'antd';
import { Timeline } from 'antd';

import UserGamification from './Gamification/userGamification';

import FindMyBusiness from './Forms/FindMyBusiness';
import AssignedPhoneNumber from './Forms/FindMyBusiness';
import BusinessDetail from './Forms/FindMyBusiness';
import Competitors from './Forms/FindMyBusiness';
import Suppliers from './Forms/FindMyBusiness';
import PosSystems from './Forms/FindMyBusiness';
import DeliveryServices from './Forms/FindMyBusiness';
import CreditCardProcessor from './Forms/FindMyBusiness';
import BusinessAssociations from './Forms/FindMyBusiness';
import OnlineListingApi from './Forms/FindMyBusiness';
import CompletePlugBusiness from './Forms/FindMyBusiness';

import ReadAddress from './Lists/ReadAddress';
import ItemUser from './Lists/ItemUser';



// const TabPane = Tabs.TabPane;

function callback(key) {}
const logoutBtn = <span className="red pointer textAlignLeft"> <Icon type="logout" /> logout </span>;

export default class UserPanelTab extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <LayoutWrapper>
      <PageHeader>
          {<IntlMessages id="Panel.Merchant.Header" />}
        </PageHeader>
      <Box>
      
                <Row gutter={24}>
                  <Col span="14">
                    <Timeline>
    <Timeline.Item dot={<Icon type="bell" style={{ fontSize: '16px' }} />} color="green">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Start" />} </h3>
        </Col>
        <Col span="12"> 
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" controls="0" rel="0" showinfo={0}></iframe>
        </Col>
        <Col span="12">
          notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. notes to merchant is here. This address isso cool to find. I love it very much. 

        </Col>
      </Row>
    
    </Timeline.Item>
    <Timeline.Item dot={<Icon type="environment-o" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.FindMyBusiness" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <FindMyBusiness />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.AssignedPhoneNumber" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <AssignedPhoneNumber />
        </Col>
      </Row>
    </Timeline.Item>

    <Timeline.Item dot={<Icon type="edit" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.BusinessDetail" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <BusinessDetail />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    <Timeline.Item dot={<Icon type="meh-o" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Competitors" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <Competitors />
        </Col>
      </Row>
    </Timeline.Item>
    
   

    <Timeline.Item dot={<Icon type="shop" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.Suppliers" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <Suppliers />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="desktop" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.PosSystems" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <PosSystems />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    <Timeline.Item dot={<Icon type="car" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.DeliveryServices" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <DeliveryServices />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="credit-card" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.CreditCardProcessor" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <CreditCardProcessor />
        </Col>
      </Row>
    </Timeline.Item>

    <Timeline.Item dot={<Icon type="share-alt" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.BusinessAssociations" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <BusinessAssociations />
        </Col>
      </Row>
    </Timeline.Item>
    
    <Timeline.Item dot={<Icon type="api" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.OnlineListingApi" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <OnlineListingApi />
        </Col>
      </Row>
    </Timeline.Item>
    
    
    <Timeline.Item dot={<Icon type="trophy" style={{ fontSize: '16px' }} />} color="red">
      <Row gutter={16}>
        <Col span="24">
         <h3> {<IntlMessages id="Panel.Merchant.CompletePlugBusiness" />} </h3>
        </Col>
        <Col span="12">
        <iframe width="100%" src="https://www.youtube.com/embed/9FyIEXDJrvA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
        </Col>
        <Col span="12">
            <CompletePlugBusiness />
        </Col>
      </Row>
    </Timeline.Item>
    

  </Timeline>
                  </Col>
                  <Col span="10">
  busines here
                  </Col>
                </Row>
              
        </Box>
      </LayoutWrapper>
    );
  }
}
