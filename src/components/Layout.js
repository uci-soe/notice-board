import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import {freshdesk as fdeskAuth, gcalendar as calAuth} from '../credentials.json'; // TODO: REMOVE credential.json... bad practice.
import {Noticeboard as Freshdesk} from 'notice-board-freshdesk';
import {StudentSchedule, TechSchedule} from 'notice-board-gcalendar';

import Background from './Background';
import Clock from './Clock';
import {NoTickets} from './NoContent';

import './Layout.scss';
import Simplebar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



function Layout () {
  return (
    <div>
      <Background />

      <Container className="Layout">
        <Row>
          <Col xs="5">
            <Row>
              <Col xs="12">
                <div className="pillbox calendar-height">
                  <h2 className="title">Google Calendar</h2>
                  <Simplebar className="scroll-wrapper">
                    <TechSchedule {...calAuth.tech} />
                  </Simplebar>
                </div>
              </Col>
              <Col xs="12">
                <div className="pillbox student-schedule">
                  <h2 className="title">Student Schedule</h2>
                  <Simplebar className="scroll-wrapper">
                    <StudentSchedule {...calAuth.student} />
                  </Simplebar>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs="7">
            <div className="pillbox freshdesk-height">
              <h2 className="title">Freshdesk Tickets</h2>
              <Simplebar className="scroll-wrapper">
                <Freshdesk noTickets={NoTickets} subdomain='ucieducation' auth={fdeskAuth} displayResolved={true} />
              </Simplebar>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* TODO: Add Lower Ticker */}
          </Col>
        </Row>

        <Clock />

      </Container>
    </div>
  );
}

export default Layout;
