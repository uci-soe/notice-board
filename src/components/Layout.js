import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import {freshdesk as fdeskAuth, gcalendar as calAuth} from '../credentials.json'; // TODO: REMOVE credential.json... bad practice.
import {Noticeboard as Freshdesk} from 'notice-board-freshdesk';
import {StudentSchedule, TechSchedule} from 'notice-board-gcalendar';

import Background from './Background';

import './Layout.scss';


function Layout () {
  return (
    <div>
      <Background />

      <Container className="Layout">


        <Row>
          <Col xs="4">
            <Row>
              <Col xs="12">
                <TechSchedule {...calAuth.tech} />
              </Col>
              <Col xs="12">
                <StudentSchedule {...calAuth.student} />
              </Col>
            </Row>
          </Col>

          <Col xs="5">
            <Freshdesk subdomain={'ucieducation'} auth={fdeskAuth} limit={10} />
          </Col>
        </Row>

        <Row>
          <Col>
            {/* TODO: Add Lower Ticker */}
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Layout;
