import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import ComponentA from './component-A';

import {freshdesk as fdeskAuth} from '../credentials.json'; // TODO: REMOVE credential.json... bad practice.
import {Noticeboard as Freshdesk} from 'notice-board-freshdesk';

import './Layout.scss';

function Layout () {
  return (
    <Container className="Layout">

      <Row>
        <Col xs="4">
          <Row>
            <Col xs="12">
              {/*TODO: Add Calendar Component*/}
            </Col>
            <Col xs="12">
              {/*TODO: Add Student Schedule*/}
            </Col>
          </Row>
        </Col>

        <Col xs={"5"}>
          <Freshdesk subdomain={'ucieducation'} auth={fdeskAuth} limit={10} />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* TODO: Add Lower Ticker */}
        </Col>
      </Row>

    </Container>
  );
}

export default Layout;
