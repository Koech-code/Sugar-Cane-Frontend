import React, { useState } from 'react';

function Calendry() {
  const [events, setEvents] = useState({
    '2023-03-25': ['Event 1', 'Event 2', 'Event 3'],
    '2023-03-26': ['Event 4'],
    '2023-03-27': ['Event 5', 'Event 6'],
    // add more dates and events here
  });

  const handleDateClick = (date) => {
    setEvents({ [date]: events[date] });
  };

  return (
    <div className="calendar bg-gray-100 p-4">
      <div className="grid grid-cols-7 gap-2">
        <div className="col-span-1"></div>
        <div className="col-span-1 text-center font-bold">Sun</div>
        <div className="col-span-1 text-center font-bold">Mon</div>
        <div className="col-span-1 text-center font-bold">Tue</div>
        <div className="col-span-1 text-center font-bold">Wed</div>
        <div className="col-span-1 text-center font-bold">Thu</div>
        <div className="col-span-1 text-center font-bold">Fri</div>
        <div className="col-span-1 text-center font-bold">Sat</div>
        {Object.keys(events).map((date) => (
          <div key={date} className="col-span-1 cursor-pointer" onClick={() => handleDateClick(date)}>
            <div className="bg-white rounded-lg shadow-lg p-2">
              <div className="font-bold text-lg">{new Date(date).getDate()}</div>
              {events[date].map((event) => (
                <div key={event} className="text-sm">{event}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendry;
