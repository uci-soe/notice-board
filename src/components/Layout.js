import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import {freshdesk as fdeskAuth, gcalendar as calAuth} from '../credentials.json'; // TODO: REMOVE credential.json... bad practice.
import {Noticeboard as Freshdesk} from 'notice-board-freshdesk';
import {StudentSchedule, TechSchedule} from 'notice-board-gcalendar';

import Background from './Background';
import { NoTickets } from './NoContent';

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
                <div className="pillbox calendar-height">
                  <h2 className="title">Google Calendar</h2>
                  <TechSchedule {...calAuth.tech} />
                </div>
              </Col>
              <Col xs="12">
                <div className="pillbox">
                  <h2 className="title">Student Schedule</h2>
                  <StudentSchedule {...calAuth.student} />
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs="5">
            <div className="pillbox freshdesk-height">
              <h2 className="title">Freshdesk Tickets</h2>
              <Freshdesk subdomain={'ucieducation'} auth={fdeskAuth} limit={10} displayResolved={false} noTickets={NoTickets} />
            </div>
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
