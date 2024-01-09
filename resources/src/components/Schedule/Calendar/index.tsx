import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "event 1", date: "2024-01-08" },
        { title: "event 2", date: "2024-01-09" },
      ]}
      selectable
      select={(e) => console.log(e)}
      eventClick={(e) => console.log(e.event)}
      locale="pt-br"
      buttonText={{
        today: "Hoje",
      }}
    />
  );
}
