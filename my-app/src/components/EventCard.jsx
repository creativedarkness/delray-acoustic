import dayjs from 'dayjs'
import AddToCalendar from './AddToCalendar'
import './index.css'

const DATE_FORMAT = 'dddd, MMMM D, YYYY'

const EventCard = ({ event }) => (
  <div className='event-card'>
    <h3 className='event-title'><a href={event.link} target="_blank" rel="noopener noreferrer">{event.venue}</a></h3>
    <div className='event-details'>
      <span>{dayjs(event.date).format(DATE_FORMAT)}</span>
      <span>{event.time}</span>
      {/* <p>{event.location}</p> */}
    </div>
    <div className='card-footer'>
      <AddToCalendar
        title={event.venue}
        startDate={new Date(`${event.date}T19:00:00`)}
        endDate={new Date(`${event.date}T22:00:00`)}
        location={event.location}
        description={`Join us at ${event.venue} for a great time!`}
      />
    </div>
  </div>
)

export default EventCard
