import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import './Calendar.css'; // Import the new CSS styles

const Calendar = () => {
    useEffect(() => {
        // Any initialization if needed
    }, []);

    const handleEventClick = (info) => {
        alert(`Event: ${info.event.title}\nStart: ${info.event.start.toLocaleString()}\nEnd: ${info.event.end.toLocaleString()}`);
    };

    return (
        <div className="calendar-container">
            <h2>Appointment Calendar</h2>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                }}
                events={[
                    {
                        title: 'Consultation with Dr. Smith',
                        start: '2024-09-10T10:00:00',
                        end: '2024-09-10T11:00:00',
                        extendedProps: {
                            description: 'Follow-up consultation for diabetes treatment.',
                        },
                    },
                    {
                        title: 'Health Checkup',
                        start: '2024-09-12T14:00:00',
                        end: '2024-09-12T15:00:00',
                        extendedProps: {
                            description: 'General health checkup appointment.',
                        },
                    },
                ]}
                eventClick={handleEventClick}
                eventColor="#27c7b8" // Preferred teal color
                eventTextColor="#ffffff" // White text for contrast
                contentHeight="auto"
                nowIndicator={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                eventTimeFormat={{ hour: '2-digit', minute: '2-digit', meridiem: false }}
                customButtons={{
                    myCustomButton: {
                        text: 'Custom!',
                        click: function() {
                            alert('Clicked the custom button!');
                        }
                    }
                }}
            />
        </div>
    );
};

export default Calendar;