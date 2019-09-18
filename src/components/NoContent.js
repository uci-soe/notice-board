import React from 'react';

import './NoContent.scss';

export function NoTickets () {
  return (
    <div className="noTickets">
      <p>There are currently no opening or pending tickets. Please check back tomorrow.</p>
    </div>
  );
}

export function NoEvents () {
  return (
    <div></div>
  );
}

export function NoStudents () {
  return (
    <div></div>
  );
}
