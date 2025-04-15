/**
 * Calendar Utilities
 * Functions for generating calendar events in various formats
 */

/**
 * Create an iCalendar (.ics) file content for an event
 * @param {Object} event - Event details
 * @param {string} event.title - Event title
 * @param {string} event.description - Event description
 * @param {Date} event.startDate - Start date and time
 * @param {Date} event.endDate - End date and time (optional, defaults to 1 hour after start)
 * @param {string} event.location - Event location
 * @returns {string} iCalendar formatted string
 */
export const createICalEvent = (event) => {
  const {
    title,
    description,
    startDate,
    endDate = new Date(startDate.getTime() + 60 * 60 * 1000), // Default to 1 hour after start
    location
  } = event;

  // Format dates to iCalendar format (YYYYMMDDTHHMMSSZ)
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const now = new Date();
  
  // Create unique identifier for the event
  const uid = `${now.getTime()}-${Math.random().toString(36).substring(2, 11)}@evangelist-site`;
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//St. John the Evangelist//Holy Week Events//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
SUMMARY:${title}
DTSTAMP:${formatDate(now)}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
DESCRIPTION:${description.replace(/\\n/g, '\\n')}
LOCATION:${location}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;
};

/**
 * Generate a downloadable calendar file
 * @param {Object} event - Event details
 * @param {string} event.title - Event title
 * @param {string} event.description - Event description
 * @param {Date} event.startDate - Start date and time
 * @param {Date} event.endDate - End date and time (optional)
 * @param {string} event.location - Event location
 */
export const downloadCalendarEvent = (event) => {
  const icsContent = createICalEvent(event);
  
  // Create a blob with the ics content
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  
  // Create a download link
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${event.title.replace(/\s+/g, '-').toLowerCase()}.ics`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(link.href), 100);
};

/**
 * Create a Google Calendar event URL
 * @param {Object} event - Event details
 * @param {string} event.title - Event title
 * @param {string} event.description - Event description
 * @param {Date} event.startDate - Start date and time
 * @param {Date} event.endDate - End date and time (optional)
 * @param {string} event.location - Event location
 * @returns {string} Google Calendar URL
 */
export const createGoogleCalendarUrl = (event) => {
  const {
    title,
    description,
    startDate,
    endDate = new Date(startDate.getTime() + 60 * 60 * 1000),
    location
  } = event;
  
  // Format dates for Google Calendar (YYYYMMDDTHHMMSSZ)
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };
  
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: description,
    location: location,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/**
 * Create a collection of Holy Week events
 * @returns {Array} Array of event objects with dates for the current year
 */
export const createHolyWeekEvents = () => {
  // Use 2025 dates from the Holy Week schedule
  return [
    {
      title: 'Palm Sunday Mass',
      description: 'Palm Sunday Mass begins at ROWI',
      startDate: new Date('2025-04-13T07:00:00'),
      endDate: new Date('2025-04-13T08:30:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Holy Thursday - Mass of the Lord\'s Supper',
      description: 'Holy Thursday celebration of the Mass of the Lord\'s Supper',
      startDate: new Date('2025-04-17T19:00:00'),
      endDate: new Date('2025-04-17T20:30:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Good Friday - Stations of the Cross',
      description: 'Stations of the Cross service on Good Friday',
      startDate: new Date('2025-04-18T07:00:00'),
      endDate: new Date('2025-04-18T08:30:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Good Friday - Divine Mercy Novena',
      description: 'Divine Mercy Novena service on Good Friday',
      startDate: new Date('2025-04-18T14:30:00'),
      endDate: new Date('2025-04-18T15:00:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Good Friday - Veneration of the Cross',
      description: 'Veneration of the Cross service on Good Friday',
      startDate: new Date('2025-04-18T15:00:00'),
      endDate: new Date('2025-04-18T16:30:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Holy Saturday - Mass of Easter Vigil',
      description: 'Holy Saturday Mass of Easter Vigil',
      startDate: new Date('2025-04-19T19:00:00'),
      endDate: new Date('2025-04-19T21:00:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Easter Sunday Mass',
      description: 'Easter Sunday Mass celebrating the resurrection of our Lord Jesus Christ',
      startDate: new Date('2025-04-20T07:00:00'),
      endDate: new Date('2025-04-20T08:30:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Easter Sunday Mass',
      description: 'Easter Sunday Mass celebrating the resurrection of our Lord Jesus Christ',
      startDate: new Date('2025-04-20T09:30:00'),
      endDate: new Date('2025-04-20T11:00:00'),
      location: 'St. John the Evangelist Catholic Church, Adenta'
    },
    {
      title: 'Easter Picnic',
      description: 'Easter Picnic beginning with Holy Mass',
      startDate: new Date('2025-04-21T12:00:00'),
      endDate: new Date('2025-04-21T15:00:00'),
      location: 'St. John the Evangelist Catholic Church Grounds, Adenta'
    }
  ];
};
